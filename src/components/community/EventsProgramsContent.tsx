
import React from 'react';
import { Calendar, Award, MessageCircle } from 'lucide-react';
import EventsList from './events/EventsList';
import ProgramsSection from './events/ProgramsSection';
import { upcomingEvents, pastEvents, programCategories } from './events/EventsData';

/**
 * EventsProgramsContent Component
 * 
 * Displays information about events and programs offered by the Ghana Chemical Society.
 * This component has been refactored to use smaller, focused components for better maintainability.
 * 
 * @returns {JSX.Element} The rendered EventsProgramsContent component
 */
const EventsProgramsContent = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Events & Programs</h2>
        <p className="text-gray-600">
          Join us for a variety of events designed to advance chemical sciences, foster collaboration, 
          and promote professional development for chemists across Ghana.
        </p>
      </div>
      
      {/* Upcoming Events Section */}
      <EventsList 
        title="Upcoming Events"
        iconClass={<Calendar className="h-6 w-6 text-gcs-blue mr-3" />}
        events={upcomingEvents}
        withButtons={true}
      />
      
      {/* Programs Overview */}
      <ProgramsSection programCategories={programCategories} />
      
      {/* Past Events Section */}
      <EventsList 
        title="Past Events"
        iconClass={<MessageCircle className="h-6 w-6 text-gcs-blue mr-3" />}
        events={pastEvents}
        withButtons={false}
      />
      
      {/* Call to Action */}
      <div className="bg-gcs-blue/10 p-8 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-3">Stay Updated on GCS Events</h3>
        <p className="mb-6">Join our mailing list to receive announcements about upcoming events and programs.</p>
        <a href="#contact" className="btn-primary">Subscribe to Updates</a>
      </div>
    </div>
  );
};

export default EventsProgramsContent;
