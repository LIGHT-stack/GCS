import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '@/components/auth/SignUpForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Register = () => {
  const handleSuccess = () => {
    // Handle successful registration
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Join the Ghana Chemical Society today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm onSuccess={handleSuccess} />
          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/auth" className="text-gcs-blue hover:underline">
              Sign in here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register; 