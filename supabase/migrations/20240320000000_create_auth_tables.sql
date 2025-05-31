-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing objects in the correct order
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP FUNCTION IF EXISTS public.delete_user(UUID);
DROP FUNCTION IF EXISTS public.approve_member(UUID);

-- Drop policies that depend on gcs_profiles
DROP POLICY IF EXISTS "Members can access approved content" ON members_content;
DROP POLICY IF EXISTS "Admins can view audit logs" ON audit_logs;
DROP POLICY IF EXISTS "Private files are accessible to members" ON storage.objects;
DROP POLICY IF EXISTS "Member content is accessible to approved members" ON storage.objects;
DROP POLICY IF EXISTS "Users can view own profile" ON gcs_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON gcs_profiles;
DROP POLICY IF EXISTS "Users can create profiles" ON gcs_profiles;

-- Drop the table with CASCADE to handle any remaining dependencies
DROP TABLE IF EXISTS public.gcs_profiles CASCADE;

-- Create custom types for better data integrity
CREATE TYPE membership_status AS ENUM ('pending', 'approved', 'rejected', 'suspended', 'expired');
CREATE TYPE membership_type AS ENUM ('student', 'regular', 'associate', 'fellow');

-- Create the profiles table
CREATE TABLE public.gcs_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    place_of_work TEXT,
    position TEXT,
    membership_type membership_type NOT NULL DEFAULT 'regular',
    status membership_status NOT NULL DEFAULT 'pending',
    gcs_number TEXT UNIQUE,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    last_login_at TIMESTAMPTZ,
    CONSTRAINT valid_gcs_number CHECK (gcs_number ~ '^GCS-\d{4}$')
);

-- Create the trigger function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    -- Insert the profile with metadata from auth.users
    INSERT INTO public.gcs_profiles (
        id,
        email,
        name,
        phone,
        place_of_work,
        position,
        membership_type,
        status
    )
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'name', ''),
        COALESCE(NEW.raw_user_meta_data->>'phone', ''),
        COALESCE(NEW.raw_user_meta_data->>'place_of_work', ''),
        COALESCE(NEW.raw_user_meta_data->>'position', ''),
        COALESCE(NEW.raw_user_meta_data->>'membership_type', 'regular')::membership_type,
        'pending'
    );

    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Error creating profile for user %: %', NEW.id, SQLERRM;
        RAISE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to approve members
CREATE OR REPLACE FUNCTION public.approve_member(user_id UUID)
RETURNS void AS $$
DECLARE
    new_gcs_number TEXT;
BEGIN
    -- Generate a unique GCS number
    SELECT 'GCS-' || LPAD(CAST(COUNT(*) + 1 AS TEXT), 6, '0')
    INTO new_gcs_number
    FROM public.gcs_profiles
    WHERE status = 'approved';

    -- Update the user's status and GCS number
    UPDATE public.gcs_profiles
    SET 
        status = 'approved',
        gcs_number = new_gcs_number,
        updated_at = now()
    WHERE id = user_id;

    -- Log the approval
    RAISE NOTICE 'User % has been approved with GCS number %', user_id, new_gcs_number;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Error approving user %: %', user_id, SQLERRM;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to safely delete users
CREATE OR REPLACE FUNCTION public.delete_user(user_id UUID)
RETURNS void AS $$
BEGIN
    -- Delete the user from auth.users
    -- This will cascade to gcs_profiles due to ON DELETE CASCADE
    DELETE FROM auth.users WHERE id = user_id;
    
    -- Log the deletion
    RAISE NOTICE 'User % has been deleted', user_id;
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'Error deleting user %: %', user_id, SQLERRM;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Enable Row Level Security
ALTER TABLE public.gcs_profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for gcs_profiles
CREATE POLICY "Users can view own profile"
    ON public.gcs_profiles FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
    ON public.gcs_profiles FOR UPDATE
    USING (auth.uid() = id);

CREATE POLICY "Users can create profiles"
    ON public.gcs_profiles FOR INSERT
    WITH CHECK (auth.uid() = id);

-- Recreate dependent policies
CREATE POLICY "Members can access approved content"
    ON public.members_content FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.gcs_profiles
            WHERE gcs_profiles.id = auth.uid()
            AND gcs_profiles.status = 'approved'
        )
    );

CREATE POLICY "Private files are accessible to members"
    ON storage.objects FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.gcs_profiles
            WHERE gcs_profiles.id = auth.uid()
            AND gcs_profiles.status = 'approved'
        )
    );

CREATE POLICY "Member content is accessible to approved members"
    ON storage.objects FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.gcs_profiles
            WHERE gcs_profiles.id = auth.uid()
            AND gcs_profiles.status = 'approved'
        )
    );

-- Create indexes
CREATE INDEX IF NOT EXISTS gcs_profiles_email_idx ON public.gcs_profiles (email);
CREATE INDEX IF NOT EXISTS gcs_profiles_status_idx ON public.gcs_profiles (status);
CREATE INDEX IF NOT EXISTS gcs_profiles_gcs_number_idx ON public.gcs_profiles (gcs_number);

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL ROUTINES IN SCHEMA public TO anon, authenticated;

-- Grant specific permissions for the functions
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO service_role;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO postgres;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO authenticated;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO anon;
GRANT EXECUTE ON FUNCTION public.delete_user(UUID) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_user(UUID) TO postgres;
GRANT EXECUTE ON FUNCTION public.approve_member(UUID) TO service_role;
GRANT EXECUTE ON FUNCTION public.approve_member(UUID) TO postgres; 