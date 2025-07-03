import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useCarousel } from '@/hooks/useCarousel';
import EventCarousel from './events/EventCarousel';
import { Skeleton } from './ui/skeleton';

interface Event {
  name: string;
  date: string;
  endDate?: string;
  location: string;
  time: string;
  description: string;
  image: string;
  type: string;
  attendees: number;
  organizers: string;
  registrationLink?: string;
}

interface EventsSectionProps {
  events?: Event[];
  loading?: boolean;
}

const EventsSection = memo(({ events = [], loading = false }: EventsSectionProps) => {
  const {
    currentPage,
    direction,
    totalPages,
    handlePrevious,
    handleNext,
    handlePageChange
  } = useCarousel({
    items: events,
    itemsPerPage: 3,
    autoPlay: true,
    autoPlayInterval: 10000
  });

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!events?.length) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            No Upcoming Events
          </h2>
          <p className="text-gray-600">
            Check back soon for new events and opportunities to get involved!
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for exciting events, workshops, and networking opportunities.
            Stay updated with our latest activities and be part of our growing community.
          </p>
        </motion.div>

        <EventCarousel
          events={events}
          currentPage={currentPage}
          eventsPerPage={3}
          totalPages={totalPages}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          direction={direction}
          handlePageChange={handlePageChange}
        />
      </div>
    </section>
  );
});

EventsSection.displayName = 'EventsSection';

export default EventsSection;
