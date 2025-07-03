
import React from 'react';
import EventCard, { Event } from './EventCard';

/**
 * EventsList Component
 * 
 * Displays a grid of events with a title and modernized styling
 * 
 * @param {string} title - The section title
 * @param {string} iconClass - The icon to display with the title
 * @param {Event[]} events - List of events to display
 * @param {boolean} withButtons - Whether to show buttons on event cards
 * @returns {JSX.Element} The rendered EventsList component
 */
interface EventsListProps {
  title: string;
  iconClass: React.ReactNode;
  events: Event[];
  withButtons?: boolean;
}

const EventsList: React.FC<EventsListProps> = ({ title, iconClass, events, withButtons = false }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-8">
        <div className="bg-gray-50 p-2 rounded-lg shadow-sm mr-3">
          {iconClass}
        </div>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="transform transition-transform hover:-translate-y-1 duration-300">
            <EventCard event={event} withButton={withButtons} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
