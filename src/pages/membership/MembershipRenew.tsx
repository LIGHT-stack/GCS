import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import RenewContent from '../../components/membership/RenewContent';

const MembershipRenew = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Renew Membership | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link to="/membership">
              <Button variant="ghost" className="flex items-center gap-2">
                <ChevronLeft className="h-5 w-5" /> Back to Membership
              </Button>
            </Link>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Renew Your GCS Membership</h1>
            <div className="w-24 h-1 bg-gcs-blue mb-8"></div>
            <RenewContent />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MembershipRenew; 