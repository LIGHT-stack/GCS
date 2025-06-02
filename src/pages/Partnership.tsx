import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PartnershipHeader from '../components/partnership/PartnershipHeader';
import SponsorshipContent from '../components/partnership/SponsorshipContent';
import ResearchFundingContent from '../components/partnership/ResearchFundingContent';
import GrantsScholarshipsContent from '../components/partnership/GrantsScholarshipsContent';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';

const Partnership = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'sponsorship';
  
  // Update page title
  useEffect(() => {
    document.title = 'Partnership Programs | Ghana Chemical Society - GCS';
  }, []);

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'research':
        return <ResearchFundingContent />;
      case 'grants':
        return <GrantsScholarshipsContent />;
      case 'sponsorship':
      default:
        return <SponsorshipContent />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gcs-blue/20 via-gcs-orange/10 to-transparent" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/f325ad61-649a-4137-b354-0cdcc5dda909.png')] bg-cover bg-center opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Partnership Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join forces with the Ghana Chemical Society to advance chemistry research,
              education, and innovation through our diverse partnership opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/partnership/apply"
                className="inline-flex items-center px-6 py-3 bg-gcs-blue text-white rounded-lg hover:bg-gcs-blue/90 transition-colors"
              >
                Become a Partner
              </a>
              <a
                href="#programs"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section id="programs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {renderContent()}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;
