-- Drop existing policies
DROP POLICY IF EXISTS "Users can view own profile" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Users can create profiles" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.gcs_profiles;

-- Create new policies
CREATE POLICY "Enable read access for all users"
ON public.gcs_profiles FOR SELECT
TO authenticated, anon
USING (true);

CREATE POLICY "Enable insert for service role and trigger"
ON public.gcs_profiles FOR INSERT
TO authenticated, service_role
WITH CHECK (
  auth.uid() = id OR 
  auth.jwt() ->> 'role' = 'service_role'
);

CREATE POLICY "Enable update for users based on id"
ON public.gcs_profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Grant necessary permissions
GRANT ALL ON public.gcs_profiles TO authenticated;
GRANT ALL ON public.gcs_profiles TO service_role;
GRANT ALL ON public.gcs_profiles TO anon;

-- Ensure the trigger function has the right permissions
ALTER FUNCTION public.handle_new_user() SECURITY DEFINER; 