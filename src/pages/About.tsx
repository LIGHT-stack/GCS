import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HistorySection from '../components/about/HistorySection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import LeadershipSection from '../components/about/LeadershipSection';
import ContactSection from '../components/about/ContactSection';
import SocialMediaSection from '../components/about/SocialMediaSection';
import AboutHero from '../components/about/AboutHero';

const About = () => {
  // Update page title
  useEffect(() => {
    document.title = 'About Ghana Chemical Society | GCS';
    
    // Scroll to section based on hash
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }, 300);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div id="history">
            <HistorySection />
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div id="mission-vision">
            <MissionVisionSection />
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div id="leadership">
            <LeadershipSection />
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div id="contact">
            <ContactSection />
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8">
          <div id="social">
            <SocialMediaSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
