import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) throw sessionError;
        
        if (!session) {
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
          throw profileError;
        }

        // If profile doesn't exist, create it
        if (!profile) {
          const { error: insertError } = await supabase
            .from('gcs_profiles')
            .insert({
              id: session.user.id,
              name: session.user.user_metadata?.name || '',
              email: session.user.email,
              phone: session.user.user_metadata?.phone || '',
              place_of_work: session.user.user_metadata?.place_of_work || '',
              position: session.user.user_metadata?.position || '',
              membership_type: session.user.user_metadata?.membership_type || 'regular',
              status: 'pending'
            });

          if (insertError) throw insertError;
        }

        // Redirect to dashboard
        navigate('/dashboard');
      } catch (error: any) {
        console.error('Auth callback error:', error);
        toast({
          title: "Error",
          description: error.message || "An error occurred during authentication",
          variant: "destructive"
        });
        navigate('/auth');
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin mb-4">
          <svg className="h-12 w-12 text-gcs-blue" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Processing...</h2>
      </div>
    </div>
  );
};

export default AuthCallback; 