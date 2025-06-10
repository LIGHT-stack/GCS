import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventCard from './EventCard';
import CarouselIndicators from './CarouselIndicators';

/**
 * EventCarousel Component
 * 
 * Displays events in a carousel with navigation controls
 * 
 * @param {object} props - Component props
 * @param {Array} props.events - List of events to display
 * @param {number} props.currentPage - Current page index
 * @param {number} props.eventsPerPage - Number of events per page
 * @param {number} props.totalPages - Total number of pages
 * @param {Function} props.handlePrevious - Handler for previous button
 * @param {Function} props.handleNext - Handler for next button
 * @param {number} props.direction - Direction of animation (1: next, -1: prev)
 * @param {Function} props.handlePageChange - Handler for page change
 * @returns {JSX.Element} The rendered EventCarousel component
 */
interface EventCarouselProps {
  events: any[];
  currentPage: number;
  eventsPerPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
  direction: number;
  handlePageChange: (page: number) => void;
}

const EventCarousel = memo(({
  events,
  currentPage,
  eventsPerPage,
  totalPages,
  handlePrevious,
  handleNext,
  direction,
  handlePageChange
}: EventCarouselProps) => {
  const startIndex = currentPage * eventsPerPage;
  const visibleEvents = events.slice(startIndex, startIndex + eventsPerPage);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 20 },
              opacity: { duration: 0.15 }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visibleEvents.map((event, index) => (
              <EventCard 
                key={event.id} 
                event={event} 
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          className="rounded-full"
          disabled={currentPage === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <CarouselIndicators
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full"
          disabled={currentPage === totalPages - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
});

EventCarousel.displayName = 'EventCarousel';

export default EventCarousel;
