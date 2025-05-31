import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEventDetail } from '../hooks/useEventDetail';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import EventSponsors from './EventSponsors';
import { EventHero } from './events/EventHero';
import { EventSchedule } from './events/EventSchedule';
import { EventSpeakers } from './events/EventSpeakers';
import { EventDetails } from './events/EventDetails';

const EventDetailPage = () => {
  const eventData = useEventDetail();
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();

  useEffect(() => {
    if (eventData) {
      document.title = `${eventData.name} | Ghana Chemical Society`;
    } else {
      document.title = 'Event | Ghana Chemical Society';
    }
  }, [eventData]);

  if (!eventData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <p className="text-gray-600 mb-6">The event you're looking for doesn't seem to exist.</p>
            <Button onClick={() => navigate('/community/events-programs')}>
              Return to Events
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <EventHero
        name={eventData.name}
        description={eventData.description}
        image={eventData.image}
        type={eventData.type}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Information */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
              <h2 className="text-2xl font-bold mb-6">About This Event</h2>
              <p className="text-gray-700 whitespace-pre-line">
                {eventData.longDescription || eventData.description}
              </p>
            </div>
            
            <EventSchedule schedule={eventData.schedule} />
            <EventSpeakers speakers={eventData.speakers} />
            <EventSponsors sponsors={eventData.partners} />
          </div>

          {/* Sidebar Information */}
          <EventDetails
            date={eventData.date}
            endDate={eventData.endDate}
            location={eventData.location}
            attendees={eventData.attendees}
            organizers={eventData.organizers}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetailPage;
