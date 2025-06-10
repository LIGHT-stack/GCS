import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import RegisterContent from '@/components/membership/RegisterContent';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const MembershipRegister = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Register for Membership | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AnimatedBackground />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/membership">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Membership
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <RegisterContent />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MembershipRegister; 