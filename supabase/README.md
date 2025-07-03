# Supabase Backend Setup & Migration Guide

## Why Connect to Supabase?
Supabase is used as the backend database and authentication provider for this project. Connecting your local project to Supabase allows you to:
- Track database schema changes in version control (via migration files)
- Apply schema changes consistently across environments
- Use Supabase CLI tools for local development, migrations, and project management

## Prerequisites
- Supabase account and a project created at https://supabase.com/
- Supabase project reference ID (found in your project dashboard URL)
- Supabase database password (found in Project Settings > Database)
- Supabase CLI installed (see below)

## 1. Install Supabase CLI
We use the Supabase CLI to manage migrations and connect to the remote database. On Windows, the recommended way is via Scoop:

```
scoop install supabase
```

Verify installation:
```
supabase --version
```

## 2. Initialize Supabase in Your Project
This creates the `supabase/` folder and config files:

```
supabase init
```

## 3. Login to Supabase CLI
This authenticates your CLI with your Supabase account:

```
supabase login
```
- This will open a browser window. Log in with your Supabase account.
- Enter the verification code from the browser back into the terminal.

## 4. Link Your Local Project to Your Supabase Instance
This step connects your local codebase to your remote Supabase project. You will need your project reference ID and database password.

```
supabase link --project-ref <your-project-ref>
```
- When prompted, enter your Supabase database password (e.g., `GCS@1995creation$`).
- The password is required so the CLI can connect and apply migrations to your remote database.

**Note:** The password is sensitive. Only share it with trusted team members and change it if you suspect it has been exposed.

## 5. Create/Edit Migration Files
All schema changes (tables, policies, functions, etc.) should be written as SQL files in `supabase/migrations/`.
- Example: `supabase/migrations/20240328000000_initial_schema.sql`
- Use `CREATE TABLE IF NOT EXISTS`, `CREATE POLICY`, etc.
- If you need to update existing objects, use `DROP ... IF EXISTS` before creating them.

## 6. Push Migrations to Supabase
To apply your migration files to the remote database:

```
supabase db push
```
- This will prompt you to confirm before applying migrations.
- The CLI will report any errors or notices (e.g., if objects already exist).

## 7. Troubleshooting
- If you see errors about existing tables or policies, make sure your migration files use `IF NOT EXISTS` or drop/recreate objects as needed.
- If you see connection errors, double-check your project ref and database password.
- If you need to reset the Supabase config, you can delete the `supabase/` folder and run `supabase init` again.

## Security Note
- The database password is required for CLI operations but should not be committed to version control or shared publicly.
- Change your password in the Supabase dashboard if you believe it has been compromised.

## Summary of What Was Done
- Installed and verified Supabase CLI
- Initialized Supabase config in the project
- Logged in to Supabase CLI
- Linked the local project to the remote Supabase instance using the project ref and password
- Created a migration file for the initial schema and policies
- Pushed the migration to the remote database

---

For any future schema changes, repeat steps 5 and 6. This ensures your backend remains consistent and version-controlled. 