import React from 'react';
import SignUpForm from '@/components/auth/SignUpForm';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const RegisterContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSuccess = () => {
    toast({
      title: "Registration Successful",
      description: "Please check your email for verification and login instructions.",
    });
    navigate('/membership/members-area');
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Register for GCS Membership
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Complete the form below to begin your membership application process. 
        Our team will review your application and contact you with next steps.
      </p>

      <div className="max-w-2xl mx-auto">
        <SignUpForm onSuccess={handleSuccess} />
      </div>
    </div>
  );
};

export default RegisterContent;
