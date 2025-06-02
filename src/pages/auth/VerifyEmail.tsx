import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle } from 'lucide-react';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = searchParams.get('token');
        if (!token) {
          throw new Error('No verification token provided');
        }

        // Verify the email
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: 'email'
        });

        if (error) throw error;

        setVerified(true);
        toast({
          title: "Email Verified",
          description: "Your email has been successfully verified. You can now log in.",
        });

        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/auth');
        }, 3000);
      } catch (error: any) {
        console.error('Verification error:', error);
        toast({
          title: "Verification Failed",
          description: error.message || "Failed to verify email",
          variant: "destructive"
        });
      } finally {
        setVerifying(false);
      }
    };

    verifyEmail();
  }, [searchParams, navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Email Verification</CardTitle>
          <CardDescription className="text-center">
            {verifying ? 'Verifying your email...' : verified ? 'Email verified successfully!' : 'Verification failed'}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-4">
          {verifying ? (
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gcs-blue"></div>
          ) : verified ? (
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          ) : (
            <XCircle className="h-12 w-12 text-red-500" />
          )}
          {!verifying && !verified && (
            <Button
              onClick={() => navigate('/auth')}
              className="mt-4"
            >
              Return to Login
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmail; 