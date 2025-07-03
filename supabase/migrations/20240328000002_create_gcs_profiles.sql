-- Create gcs_profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.gcs_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    gcs_number TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    place_of_work TEXT,
    position TEXT,
    membership_type TEXT DEFAULT 'regular',
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'suspended', 'expired')),
    role TEXT DEFAULT 'member' CHECK (role IN ('member', 'admin')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login TIMESTAMPTZ
);

-- Enable Row Level Security
ALTER TABLE public.gcs_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile"
ON public.gcs_profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON public.gcs_profiles FOR UPDATE
USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
ON public.gcs_profiles FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM public.gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

CREATE POLICY "Admins can update all profiles"
ON public.gcs_profiles FOR UPDATE
USING (
    EXISTS (
        SELECT 1 FROM public.gcs_profiles
        WHERE id = auth.uid()
        AND role = 'admin'
    )
);

-- Create trigger for updating updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.gcs_profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at(); 