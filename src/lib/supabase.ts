import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dymuhkgryowvtkcaqgsw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5bXVoa2dyeW93dnRrY2FxZ3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODEzOTMsImV4cCI6MjA2Mzc1NzM5M30.Pelb-gjsdls-yBeFMC-P6MI08jq_f_sbx6D2lhseeFM';

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
});

// Test the connection
supabase.auth.getSession().then(({ data: { session }, error }) => {
  if (error) {
    console.error('Supabase connection error:', error);
  } else {
    console.log('Supabase connected successfully');
  }
}); 