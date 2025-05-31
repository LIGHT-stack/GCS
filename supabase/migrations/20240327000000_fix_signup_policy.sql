-- Drop existing insert policy
DROP POLICY IF EXISTS "Enable insert for service role and trigger" ON public.gcs_profiles;

-- Create new insert policy that allows signup
CREATE POLICY "Enable insert for signup and service role"
ON public.gcs_profiles FOR INSERT
TO authenticated, anon, service_role
WITH CHECK (
  auth.uid() = id OR 
  auth.jwt() ->> 'role' = 'service_role' OR
  (auth.uid() IS NULL AND id IS NULL)
);

-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Create the trigger function with proper permissions
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.gcs_profiles (
    id,
    name,
    email,
    phone,
    place_of_work,
    position,
    membership_type,
    status,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'name',
    NEW.email,
    NEW.raw_user_meta_data->>'phone',
    NEW.raw_user_meta_data->>'place_of_work',
    NEW.raw_user_meta_data->>'position',
    NEW.raw_user_meta_data->>'membership_type',
    'pending',
    NOW(),
    NOW()
  );
  RETURN NEW;
END;
$$;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON public.gcs_profiles TO anon, authenticated, service_role;
GRANT USAGE ON SEQUENCE public.gcs_profiles_id_seq TO anon, authenticated, service_role;

-- Ensure the trigger function has the right permissions
ALTER FUNCTION public.handle_new_user() SECURITY DEFINER; 