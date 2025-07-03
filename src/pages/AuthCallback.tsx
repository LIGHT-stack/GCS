import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          navigate('/auth');
          return;
        }
        
        if (!session) {
          console.log('No session found');
          navigate('/auth');
          return;
        }

        // Check if user profile exists
        const { data: profile, error: profileError } = await supabase
          .from('gcs_profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (profileError && profileError.code !== 'PGRST116') {
          console.error('Profile error:', profileError);
          throw profileError;
        }

        // If profile doesn't exist, create it
        if (!profile) {
          const { error: insertError } = await supabase
            .from('gcs_profiles')
            .insert({
              id: session.user.id,
              name: session.user.user_metadata?.name || session.user.email,
              email: session.user.email,
              phone: session.user.user_metadata?.phone || '',
              place_of_work: session.user.user_metadata?.place_of_work || '',
              position: session.user.user_metadata?.position || '',
              membership_type: 'student',
              role: 'member',
              status: 'pending'
            });

          if (insertError) {
            console.error('Insert error:', insertError);
            throw insertError;
          }
        }

        // Redirect to dashboard
        navigate('/dashboard');
      } catch (error) {
        console.error('Auth callback error:', error);
        navigate('/auth');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Loading...</h2>
        <p className="text-gray-600">Please wait while we set up your account.</p>
      </div>
    </div>
  );
} 