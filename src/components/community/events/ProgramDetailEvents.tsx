
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

/**
 * ProgramDetailEvents Component
 * 
 * Displays the Events tab content for a program
 * 
 * @param {object} props - Component props
 * @param {Array} props.events - List of program events
 * @returns {JSX.Element} The rendered events section
 */
interface ProgramDetailEventsProps {
  events: Array<{
    title: string;
    date: string;
    location: string;
    description: string;
  }>;
}

const ProgramDetailEvents: React.FC<ProgramDetailEventsProps> = ({ events }) => {
  // Get the current date for checking upcoming events
  const currentDate = new Date();

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h2>
      
      {events.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No upcoming events scheduled at this time.</p>
          <Button variant="outline" className="mt-4">
            Subscribe to Updates
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {events.map((event, index) => {
            const eventDate = new Date(event.date);
            const isUpcoming = eventDate >= currentDate;
            
            return (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative p-6">
                  {isUpcoming && (
                    <Badge className="absolute top-6 right-6 bg-green-500">Upcoming</Badge>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gcs-blue transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4 text-gcs-blue" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="hidden md:block text-gray-300">|</div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-gcs-blue" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <Button variant="outline">Register for Event</Button>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      <div className="mt-10 p-4 border border-gray-200 rounded-lg bg-gray-50/50">
        <p className="text-center text-gray-600">
          Want to stay updated with our events? <a href="#" className="text-gcs-blue hover:underline">Subscribe to our newsletter</a>
        </p>
      </div>
    </>
  );
};

export default ProgramDetailEvents;
