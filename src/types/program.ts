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
  schedule?: {
    day: string;
    items: {
      time: string;
      activity: string;
    }[];
  }[];
}

export interface Coordinator {
  name: string;
  role: string;
  image: string;
}

export interface Sponsor {
  name: string;
  logo: string;
}

export interface Program {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  events: Event[];
  coordinators: Coordinator[];
  sponsors?: Sponsor[];
} 