-- Drop existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- Create a function to log debug information
CREATE OR REPLACE FUNCTION public.log_debug(message TEXT)
RETURNS void AS $$
BEGIN
    INSERT INTO public.debug_logs (message, created_at)
    VALUES (message, NOW());
END;
$$ LANGUAGE plpgsql;

-- Create debug_logs table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.debug_logs (
    id SERIAL PRIMARY KEY,
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the trigger function with debug logging
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    -- Log the start of the function
    PERFORM public.log_debug('Starting handle_new_user for user: ' || NEW.id);
    
    -- Log the raw metadata
    PERFORM public.log_debug('Raw metadata: ' || NEW.raw_user_meta_data::text);
    
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
            created_at,
            updated_at
        ) VALUES (
            NEW.id,
            COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
            NEW.email,
            NEW.raw_user_meta_data->>'phone',
            NEW.raw_user_meta_data->>'place_of_work',
            NEW.raw_user_meta_data->>'position',
            COALESCE(NEW.raw_user_meta_data->>'membership_type', 'student'),
            COALESCE(NEW.raw_user_meta_data->>'role', 'member'),
            'pending',
            false,
            NOW(),
            NOW()
        );
        
        -- Log successful insertion
        PERFORM public.log_debug('Successfully inserted profile for user: ' || NEW.id);
    EXCEPTION WHEN OTHERS THEN
        -- Log any errors that occur
        PERFORM public.log_debug('Error inserting profile: ' || SQLERRM);
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
GRANT ALL ON public.debug_logs TO authenticated, anon;
GRANT ALL ON public.gcs_profiles TO authenticated, anon;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO authenticated, anon;
GRANT EXECUTE ON FUNCTION public.log_debug(TEXT) TO authenticated, anon; 