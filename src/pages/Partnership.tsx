import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
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
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <PartnershipHeader activeTab={activeTab} />
      
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
    </div>
  );
};

export default Partnership;
