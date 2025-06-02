import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventsSection from '../components/EventsSection';
import ProgramsSection from '../components/ProgramsSection';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import OurImpactSection from '../components/OurImpactSection';
import { upcomingEvents } from '../data/events';

/**
 * Index Component
 * 
 * The main landing page of the Ghana Chemical Society website.
 * Contains the hero section, events, programs, and impact sections.
 * 
 * @returns {JSX.Element} The rendered Index component
 */
const Index = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = 'Ghana Chemical Society | GCS - Advancing Chemistry in Ghana';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <EventsSection events={upcomingEvents} autoPlay={true} />
      <ProgramsSection />
      <OurImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
