import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';
import { DEFAULT_EVENT_IMAGE } from '@/data/events';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    attendees: number;
    image?: string;
  };
  index: number;
}

const EventCard = memo(({ event, index }: EventCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const handleRegister = () => {
    navigate(`/events/${event.id}`, {
      state: { from: location.pathname }
    });
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1"
      )}
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={event.image || DEFAULT_EVENT_IMAGE}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = DEFAULT_EVENT_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Event Content */}
      <div className="p-6">
        <motion.h3 
          className="mb-2 text-xl font-semibold text-gray-900"
          whileHover={{ scale: 1.02 }}
        >
          {event.title}
        </motion.h3>
        
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="mr-2 h-4 w-4 text-gcs-blue" />
            <span>{format(new Date(event.date), 'MMM d, yyyy • h:mm a')}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="mr-2 h-4 w-4 text-gcs-blue" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Users className="mr-2 h-4 w-4 text-gcs-blue" />
            <span>{event.attendees} attendees</span>
          </div>
        </div>

        {/* Register Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRegister}
          className="mt-4 w-full rounded-md bg-gcs-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gcs-blue/90"
        >
          Register Now
        </motion.button>
      </div>
    </motion.div>
  );
});

EventCard.displayName = 'EventCard';

export default EventCard;
