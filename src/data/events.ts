export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  attendees: number;
  image?: string;
}

// Default event image to use as fallback
export const DEFAULT_EVENT_IMAGE = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop';

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Chemistry Symposium',
    description: 'Join us for a day of presentations and networking with leading chemists.',
    date: '2023-12-15T09:00:00',
    location: 'University of Ghana, Legon',
    attendees: 150,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Workshop on Green Chemistry',
    description: 'Learn about sustainable practices in chemical research and industry.',
    date: '2023-12-20T10:00:00',
    location: 'Kwame Nkrumah University of Science and Technology',
    attendees: 80,
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Networking Mixer',
    description: 'Connect with fellow chemists and industry professionals in a relaxed setting.',
    date: '2023-12-25T18:00:00',
    location: 'Labadi Beach Hotel',
    attendees: 120,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Chemistry Career Fair',
    description: 'Explore career opportunities in chemistry and meet potential employers.',
    date: '2024-01-10T11:00:00',
    location: 'Accra International Conference Centre',
    attendees: 200,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Research Showcase',
    description: 'Present your research and get feedback from peers and experts.',
    date: '2024-01-15T13:00:00',
    location: 'University of Cape Coast',
    attendees: 100,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Chemistry Quiz Competition',
    description: 'Test your knowledge and win exciting prizes in our annual quiz competition.',
    date: '2024-01-20T15:00:00',
    location: 'Ghana Academy of Arts and Sciences',
    attendees: 50,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop'
  }
]; 