-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- Create the trigger function with proper ENUM handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    -- Log the start of the function
    RAISE NOTICE 'Starting handle_new_user for user: %', NEW.id;
    RAISE NOTICE 'Raw metadata: %', NEW.raw_user_meta_data::text;
    
    -- Insert into gcs_profiles with explicit error handling
    BEGIN
        INSERT INTO public.gcs_profiles (
            id,
            name,
            email,
            phone,
            place_of_work,
            position,
            membership_type,
            role,
            status,
            is_active,
            profile_completed,
            created_at,
            updated_at,
            gcs_number
        ) VALUES (
            NEW.id,
            COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
            NEW.email,
            NEW.raw_user_meta_data->>'phone',
            NEW.raw_user_meta_data->>'place_of_work',
            NEW.raw_user_meta_data->>'position',
            COALESCE(NEW.raw_user_meta_data->>'membership_type', 'student')::membership_type_enum,
            COALESCE(NEW.raw_user_meta_data->>'role', 'member')::user_role_enum,
            'pending'::approval_status_enum,
            false,
            false,
            NOW(),
            NOW(),
            'GCS-' || to_char(NOW(), 'YY') || '-' || LPAD((SELECT COUNT(*) + 1 FROM public.gcs_profiles)::text, 4, '0')
        );
        
        -- Log successful insertion
        RAISE NOTICE 'Successfully inserted profile for user: %', NEW.id;
    EXCEPTION WHEN OTHERS THEN
        -- Log any errors that occur
        RAISE NOTICE 'Error inserting profile: %', SQLERRM;
        RAISE;
    END;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated, anon;
GRANT ALL ON public.gcs_profiles TO authenticated, anon;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO authenticated, anon; 