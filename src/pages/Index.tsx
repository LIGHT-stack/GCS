import React, { useEffect } from 'react';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import Hero from '../components/Hero.tsx';
import EventsSection from '../components/EventsSection.tsx';
import ProgramsSection from '../components/ProgramsSection.tsx';
import AnimatedBackground from '../components/AnimatedBackground.tsx';
import OurImpactSection from '../components/OurImpactSection.tsx';
import { upcomingEvents } from '../data/events.ts';

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
      <EventsSection events={upcomingEvents} />
      <ProgramsSection />
      <OurImpactSection />
    </div>
  );
};

export default Index;
