import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

interface EventDetailsProps {
  date: Date;
  endDate: Date;
  location: string;
  attendees: number;
  organizers: string;
}

export const EventDetails: React.FC<EventDetailsProps> = ({
  date,
  endDate,
  location,
  attendees,
  organizers,
}) => {
  const formattedStartDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedEndDate = new Date(endDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-6">
      {/* Event Details Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <Calendar className="h-5 w-5 text-gcs-blue mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Date & Time</p>
              <p className="text-gray-600">{formattedStartDate}</p>
              {formattedStartDate !== formattedEndDate && (
                <p className="text-gray-600">to {formattedEndDate}</p>
              )}
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-gcs-blue mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-600">{location}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Users className="h-5 w-5 text-gcs-blue mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Expected Attendees</p>
              <p className="text-gray-600">{attendees}+ professionals</p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-gcs-blue mr-3 mt-0.5" />
            <div>
              <p className="font-medium">Organized by</p>
              <p className="text-gray-600">{organizers}</p>
            </div>
          </div>
        </div>
        <Button className="w-full mt-6">Register for this Event</Button>
      </div>
      
      {/* Add to Calendar Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
        <h2 className="text-xl font-bold mb-4">Add to Calendar</h2>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            <img src="/google-calendar.svg" alt="Google Calendar" className="w-5 h-5 mr-2" />
            Google Calendar
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <img src="/outlook.svg" alt="Outlook" className="w-5 h-5 mr-2" />
            Outlook
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <img src="/ical.svg" alt="iCal" className="w-5 h-5 mr-2" />
            Apple Calendar
          </Button>
        </div>
      </div>
    </div>
  );
}; 