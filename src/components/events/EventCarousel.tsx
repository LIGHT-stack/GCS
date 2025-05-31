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
}

const EventCarousel = memo(({
  events,
  currentPage,
  eventsPerPage,
  totalPages,
  handlePrevious,
  handleNext,
  direction
}: EventCarouselProps) => {
  const startIndex = currentPage * eventsPerPage;
  const visibleEvents = events.slice(startIndex, startIndex + eventsPerPage);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
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
        <div className="flex items-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentPage ? 1 : -1);
                setCurrentPage(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? 'bg-gcs-blue' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
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
