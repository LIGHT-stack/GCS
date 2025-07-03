import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please check your environment variables.');
}

// Create Supabase client with debug options
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'x-application-name': 'gcs-web-app'
    }
  }
});

// Add error logging
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth state changed:', event, session);
  if (event === 'SIGNED_OUT') {
    // Handle sign out gracefully
    window.location.href = '/';
  }
});

// Test the connection
supabase.auth.getSession().then(({ data: { session }, error }) => {
  if (error) {
    console.error('Supabase connection error:', error);
    // Handle connection error gracefully
    window.location.href = '/maintenance';
  } else {
    console.log('Supabase connected successfully');
  }
}); 