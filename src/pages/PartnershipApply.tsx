import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PartnershipApplicationForm from '../components/partnership/PartnershipApplicationForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const PartnershipApply = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') as 'sponsorship' | 'research' | 'grants' || 'sponsorship';
  const tier = searchParams.get('tier') as 'platinum' | 'gold' | 'silver' || undefined;

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      <AnimatedBackground />
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gcs-blue/20 via-gcs-orange/10 to-transparent" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/f325ad61-649a-4137-b354-0cdcc5dda909.png')] bg-cover bg-center opacity-10" />
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartnershipApplicationForm type={type} tier={tier} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnershipApply;
