import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Event } from '@/types/event';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/events/${encodeURIComponent(event.name)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 right-4 bg-gcs-blue text-white px-3 py-1 rounded-full text-sm font-medium">
          {event.type}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {event.name}
        </h3>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>
              {format(new Date(event.date), 'MMM d, yyyy')}
              {event.endDate && ` - ${format(new Date(event.endDate), 'MMM d, yyyy')}`}
            </span>
          </div>

          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="line-clamp-1">{event.location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2" />
            <span>{event.attendees} attendees</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-3">
          {event.description}
        </p>

        <button
          onClick={handleViewDetails}
          className="w-full bg-gcs-blue text-white py-2 px-4 rounded-md hover:bg-gcs-blue/90 transition-colors duration-300"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;

