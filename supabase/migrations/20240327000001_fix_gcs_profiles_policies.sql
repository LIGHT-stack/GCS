-- Drop existing policies
DROP POLICY IF EXISTS "Enable read access for all users" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Enable insert for signup and service role" ON public.gcs_profiles;
DROP POLICY IF EXISTS "Enable update for users based on id" ON public.gcs_profiles;

-- Create new policies
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

-- Grant necessary permissions
GRANT ALL ON public.gcs_profiles TO authenticated;
GRANT ALL ON public.gcs_profiles TO service_role;
GRANT SELECT ON public.gcs_profiles TO anon; 