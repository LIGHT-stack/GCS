
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

/**
 * Event interface defining the structure of event data
 */
export interface Event {
  title: string;
  date: Date;
  location: string;
  description: string;
  type: string;
  id?: string;
}

/**
 * Helper function to format date into a human-readable string
 * 
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

/**
 * Helper function to get event badge color based on event type
 * 
 * @param {string} type - Event type
 * @returns {string} CSS class name for the badge color
 */
export const getEventBadgeColor = (type: string): string => {
  switch(type) {
    case "conference": return "bg-gcs-blue text-white";
    case "workshop": return "bg-gcs-orange text-white";
    case "symposium": return "bg-green-600 text-white";
    case "competition": return "bg-purple-600 text-white";
    case "summit": return "bg-pink-600 text-white";
    case "webinar": return "bg-indigo-600 text-white";
    default: return "bg-gray-600 text-white";
  }
};

/**
 * Generate an event ID from its title
 * 
 * @param {string} title - Event title
 * @param {number} index - Event index as fallback
 * @returns {string} URL-friendly event ID
 */
export const generateEventId = (title: string, index: number): string => {
  if (!title) return `event${index}`;
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || `event${index}`;
};

/**
 * EventCard Component
 * 
 * Displays a single event card with title, date, location, and description
 * 
 * @param {Event} event - The event data to display
 * @param {boolean} withButton - Whether to show a Learn More button
 * @param {number} eventIndex - Index of the event in the list
 * @returns {JSX.Element} The rendered EventCard component
 */
interface EventCardProps {
  event: Event;
  withButton?: boolean;
  eventIndex?: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, withButton = false, eventIndex = 0 }) => {
  const eventId = event.id || generateEventId(event.title, eventIndex);
  
  return (
    <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
          <span className={`text-xs px-2 py-1 rounded-full ${getEventBadgeColor(event.type)}`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
        </div>
        <CardDescription className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-1" />
          {formatDate(event.date)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-start mb-2">
          <MapPin className="h-4 w-4 mr-1 mt-1 text-gray-500" />
          <p className="text-sm text-gray-700">{event.location}</p>
        </div>
        <p className="text-sm text-gray-600 mt-2">{event.description}</p>
        
        {(withButton || true) && (
          <Link to={`/events/${eventId}`} className="mt-4 text-gcs-blue hover:text-gcs-blue/80 text-sm font-medium flex items-center">
            Learn More
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;
