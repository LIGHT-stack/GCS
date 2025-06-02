-- Drop all existing policies first
DROP POLICY IF EXISTS "Enable read access for all users" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Enable insert for signup and service role" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.gcs_memberships;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.gcs_memberships;
DROP POLICY IF EXISTS "Enable update for users based on profile_id" ON public.gcs_memberships;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.gcs_events;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.gcs_events;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON public.gcs_events;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.gcs_news;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.gcs_news;
DROP POLICY IF EXISTS "Enable update for users based on author_id" ON public.gcs_news;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.gcs_publications;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.gcs_publications;
DROP POLICY IF EXISTS "Enable update for users based on author_id" ON public.gcs_publications;

-- Drop existing tables
DROP TABLE IF EXISTS public.gcs_profiles CASCADE;
DROP TABLE IF EXISTS public.gcs_memberships CASCADE;
DROP TABLE IF EXISTS public.gcs_events CASCADE;
DROP TABLE IF EXISTS public.gcs_news CASCADE;
DROP TABLE IF EXISTS public.gcs_publications CASCADE;

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create profiles table
CREATE TABLE public.gcs_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    place_of_work TEXT,
    position TEXT,
    membership_type TEXT NOT NULL CHECK (membership_type IN ('student', 'regular', 'associate', 'fellow')),
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'suspended')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create memberships table
CREATE TABLE public.gcs_memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID NOT NULL REFERENCES public.gcs_profiles(id) ON DELETE CASCADE,
    membership_type TEXT NOT NULL CHECK (membership_type IN ('student', 'regular', 'associate', 'fellow')),
    start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    end_date DATE NOT NULL,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'expired', 'cancelled')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create events table
CREATE TABLE public.gcs_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    event_date TIMESTAMPTZ NOT NULL,
    location TEXT,
    max_participants INTEGER,
    registration_deadline TIMESTAMPTZ,
    status TEXT NOT NULL DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create news table
CREATE TABLE public.gcs_news (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    author_id UUID REFERENCES public.gcs_profiles(id),
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create publications table
CREATE TABLE public.gcs_publications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT,
    author_id UUID REFERENCES public.gcs_profiles(id),
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.gcs_profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.gcs_memberships
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.gcs_events
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.gcs_news
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.gcs_publications
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security
ALTER TABLE public.gcs_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gcs_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gcs_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gcs_news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gcs_publications ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies for gcs_profiles
CREATE POLICY "Enable read access for all users"
ON public.gcs_profiles FOR SELECT
TO authenticated, anon
USING (true);

CREATE POLICY "Enable insert for signup and service role"
ON public.gcs_profiles FOR INSERT
TO authenticated, anon, service_role
WITH CHECK (
    auth.uid() = id OR 
    auth.jwt() ->> 'role' = 'service_role' OR
    (auth.uid() IS NULL AND id IS NULL)
);

CREATE POLICY "Enable update for users based on id"
ON public.gcs_profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Create RLS Policies for gcs_memberships
CREATE POLICY "Enable read access for all users"
ON public.gcs_memberships FOR SELECT
TO authenticated, anon
USING (true);

CREATE POLICY "Enable insert for authenticated users"
ON public.gcs_memberships FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = profile_id);

CREATE POLICY "Enable update for users based on profile_id"
ON public.gcs_memberships FOR UPDATE
TO authenticated
USING (auth.uid() = profile_id)
WITH CHECK (auth.uid() = profile_id);

-- Create RLS Policies for gcs_events
CREATE POLICY "Enable read access for all users"
ON public.gcs_events FOR SELECT
TO authenticated, anon
USING (true);

CREATE POLICY "Enable insert for authenticated users"
ON public.gcs_events FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Enable update for authenticated users"
ON public.gcs_events FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Create RLS Policies for gcs_news
CREATE POLICY "Enable read access for all users"
ON public.gcs_news FOR SELECT
TO authenticated, anon
USING (true);

CREATE POLICY "Enable insert for authenticated users"
ON public.gcs_news FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Enable update for users based on author_id"
ON public.gcs_news FOR UPDATE
TO authenticated
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);

-- Create RLS Policies for gcs_publications
CREATE POLICY "Enable read access for all users"
ON public.gcs_publications FOR SELECT
TO authenticated, anon
USING (true);

CREATE POLICY "Enable insert for authenticated users"
ON public.gcs_publications FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Enable update for users based on author_id"
ON public.gcs_publications FOR UPDATE
TO authenticated
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);

-- Grant necessary permissions
GRANT ALL ON public.gcs_profiles TO authenticated;
GRANT ALL ON public.gcs_memberships TO authenticated;
GRANT ALL ON public.gcs_events TO authenticated;
GRANT ALL ON public.gcs_news TO authenticated;
GRANT ALL ON public.gcs_publications TO authenticated;

GRANT ALL ON public.gcs_profiles TO service_role;
GRANT ALL ON public.gcs_memberships TO service_role;
GRANT ALL ON public.gcs_events TO service_role;
GRANT ALL ON public.gcs_news TO service_role;
GRANT ALL ON public.gcs_publications TO service_role;

GRANT SELECT ON public.gcs_profiles TO anon;
GRANT SELECT ON public.gcs_memberships TO anon;
GRANT SELECT ON public.gcs_events TO anon;
GRANT SELECT ON public.gcs_news TO anon;
GRANT SELECT ON public.gcs_publications TO anon; 