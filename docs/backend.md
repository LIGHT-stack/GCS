# Backend Documentation

## Database Setup

### ENUM Types
The system uses three ENUM types for user management:

```sql
-- Membership Types
CREATE TYPE membership_type_enum AS ENUM (
    'student',
    'regular',
    'corporate',
    'honorary'
);

-- User Roles
CREATE TYPE user_role_enum AS ENUM (
    'member',
    'admin',
    'moderator'
);

-- Approval Status
CREATE TYPE approval_status_enum AS ENUM (
    'pending',
    'approved',
    'rejected'
);
```

### User Profile Table
The `gcs_profiles` table stores user profile information:

```sql
CREATE TABLE public.gcs_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    gcs_number TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    place_of_work TEXT,
    position TEXT,
    membership_type membership_type_enum DEFAULT 'student',
    role user_role_enum DEFAULT 'member',
    status approval_status_enum DEFAULT 'pending',
    is_active BOOLEAN DEFAULT false,
    profile_completed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login TIMESTAMPTZ
);
```

## Authentication Flow

### User Signup Process
1. User submits signup form with metadata
2. Supabase Auth creates user in `auth.users`
3. Trigger `on_auth_user_created` fires
4. `handle_new_user()` function creates profile in `gcs_profiles`

### Trigger Function
```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
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
        COALESCE(NEW.raw_user_meta_data->>'membership_type', 'student')::public.membership_type_enum,
        COALESCE(NEW.raw_user_meta_data->>'role', 'member')::public.user_role_enum,
        'pending'::public.approval_status_enum,
        false,
        false,
        NOW(),
        NOW(),
        'GCS-' || to_char(NOW(), 'YY') || '-' || LPAD((SELECT COUNT(*) + 1 FROM public.gcs_profiles)::text, 4, '0')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### Row Level Security (RLS)
```sql
-- Enable RLS
ALTER TABLE public.gcs_profiles ENABLE ROW LEVEL SECURITY;

-- User Policies
CREATE POLICY "Users can view own profile"
ON public.gcs_profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON public.gcs_profiles FOR UPDATE
USING (auth.uid() = id);

-- Admin Policies
CREATE POLICY "Admins can view all profiles"
ON public.gcs_profiles FOR SELECT
USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins can update all profiles"
ON public.gcs_profiles FOR UPDATE
USING (auth.jwt() ->> 'role' = 'admin');

-- Insert Policy
CREATE POLICY "Users can insert their own profile"
ON public.gcs_profiles FOR INSERT
WITH CHECK (auth.uid() = id);
```

## Troubleshooting Guide

### Common Issues and Solutions

1. **ENUM Type Not Found**
   - Error: `ERROR: type "membership_type_enum" does not exist`
   - Solution: Ensure ENUM types are created in the public schema
   - Fix: Run the ENUM creation SQL in the Supabase SQL Editor

2. **Infinite Recursion in RLS**
   - Error: `ERROR: infinite recursion detected in policy for relation "gcs_profiles"`
   - Solution: Use `SECURITY DEFINER` in trigger function
   - Fix: Add `SECURITY DEFINER` and `SET search_path = public` to function definition

3. **Transaction Aborted**
   - Error: `ERROR: current transaction is aborted`
   - Solution: Ensure proper error handling in trigger function
   - Fix: Add explicit error handling with RAISE NOTICE

### Debugging Steps

1. **Check ENUM Types**
   ```sql
   SELECT typname, enumlabel, nspname
   FROM pg_type
   JOIN pg_enum ON pg_enum.enumtypid = pg_type.oid
   JOIN pg_namespace ON pg_type.typnamespace = pg_namespace.oid
   WHERE typname IN ('membership_type_enum', 'user_role_enum', 'approval_status_enum');
   ```

2. **Verify Trigger Function**
   ```sql
   SELECT pg_get_functiondef(oid)
   FROM pg_proc
   WHERE proname = 'handle_new_user';
   ```

3. **Check RLS Policies**
   ```sql
   SELECT *
   FROM pg_policies
   WHERE tablename = 'gcs_profiles';
   ```

## Best Practices

1. **Security**
   - Always use `SECURITY DEFINER` for trigger functions that need elevated privileges
   - Set explicit `search_path` to prevent schema hijacking
   - Use proper RLS policies to control access

2. **Error Handling**
   - Include detailed error logging in trigger functions
   - Use RAISE NOTICE for debugging
   - Handle exceptions explicitly

3. **Data Integrity**
   - Use ENUMs for constrained fields
   - Set appropriate default values
   - Include proper foreign key constraints

4. **Performance**
   - Index frequently queried columns
   - Use appropriate data types
   - Minimize trigger complexity

## Maintenance

### Regular Checks
1. Monitor error logs for trigger function issues
2. Verify ENUM types are correctly defined
3. Check RLS policies are working as expected

### Backup and Recovery
1. Keep SQL migration files for all schema changes
2. Document all ENUM values and their meanings
3. Maintain a list of all trigger functions and their purposes 