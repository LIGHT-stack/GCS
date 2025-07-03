-- Drop existing functions and triggers
DROP TRIGGER IF EXISTS on_auth_user_login ON auth.users;
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_user_login() CASCADE;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;
DROP FUNCTION IF EXISTS public.generate_gcs_number() CASCADE;

-- Function to generate GCS number
CREATE OR REPLACE FUNCTION public.generate_gcs_number()
RETURNS TEXT AS $$
DECLARE
    year_suffix TEXT;
    next_number INTEGER;
    gcs_number TEXT;
BEGIN
    -- Get current year's last two digits
    year_suffix := TO_CHAR(CURRENT_DATE, 'YY');
    
    -- Get the next number for this year
    SELECT COALESCE(MAX(CAST(SUBSTRING(gcs_number FROM 8) AS INTEGER)), 0) + 1
    INTO next_number
    FROM gcs_profiles
    WHERE gcs_number LIKE 'GCS-' || year_suffix || '-%';
    
    -- Format the GCS number
    gcs_number := 'GCS-' || year_suffix || '-' || LPAD(next_number::TEXT, 4, '0');
    
    RETURN gcs_number;
END;
$$ LANGUAGE plpgsql;

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.gcs_profiles (
        id,
        gcs_number,
        name,
        email,
        phone,
        place_of_work,
        position,
        membership_type,
        status,
        role,
        created_at,
        updated_at
    ) VALUES (
        NEW.id,
        public.generate_gcs_number(),
        NEW.raw_user_meta_data->>'name',
        NEW.email,
        NEW.raw_user_meta_data->>'phone',
        NEW.raw_user_meta_data->>'place_of_work',
        NEW.raw_user_meta_data->>'position',
        COALESCE(NEW.raw_user_meta_data->>'membership_type', 'regular'),
        'pending',
        'member',
        NOW(),
        NOW()
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- Function to handle user login
CREATE OR REPLACE FUNCTION public.handle_user_login()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.gcs_profiles
    SET last_login = NOW()
    WHERE id = NEW.id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for user login
CREATE TRIGGER on_auth_user_login
    AFTER UPDATE OF last_sign_in_at ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_user_login(); 