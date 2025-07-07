import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import AuthContent from '../components/auth/AuthContent.tsx';
import AnimatedBackground from '../components/AnimatedBackground.tsx';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'login';
  
  // Update page title
  useEffect(() => {
    document.title = 'Login/Register | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="pt-28 pb-12 md:pt-36 md:pb-16 px-4">
        <AuthContent initialTab={activeTab} />
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
