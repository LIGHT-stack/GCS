export interface Event {
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