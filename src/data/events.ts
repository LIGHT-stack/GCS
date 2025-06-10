import { Event } from '../types/event';

export const upcomingEvents: Event[] = [
  {
    name: '21st Ghana Chemical Society Conference',
    description: 'Join us for the 21st Ghana Chemical Society Conference, featuring keynote speeches, research presentations, and networking opportunities. Theme: Chemistry for a Sustainable Future',
    date: '2025-09-29T09:00:00',
    endDate: '2025-10-03T17:00:00',
    location: 'KNUST, Kumasi',
    time: '09:00 AM - 05:00 PM',
    type: 'Conference',
    attendees: 500,
    organizers: 'Ghana Chemical Society',
    image: '/src/assets/GCS Conference/Wide conference flyer.jpg',
    registrationLink: 'https://forms.gle/your-registration-form'
  },
  {
    name: 'Workshop on Green Chemistry',
    description: 'Learn about sustainable practices in chemical research and industry.',
    date: '2023-12-20T10:00:00',
    location: 'Kwame Nkrumah University of Science and Technology',
    time: '10:00 AM - 04:00 PM',
    type: 'Workshop',
    attendees: 80,
    organizers: 'Ghana Chemical Society',
    image: '/src/assets/03.jpg'
  },
  {
    name: 'Networking Mixer',
    description: 'Connect with fellow chemists and industry professionals in a relaxed setting.',
    date: '2023-12-25T18:00:00',
    location: 'Labadi Beach Hotel',
    time: '06:00 PM - 09:00 PM',
    type: 'Networking',
    attendees: 120,
    organizers: 'Ghana Chemical Society',
    image: '/src/assets/06.jpg'
  },
  {
    name: 'Chemistry Career Fair',
    description: 'Explore career opportunities in chemistry and meet potential employers.',
    date: '2024-01-10T11:00:00',
    location: 'Accra International Conference Centre',
    time: '11:00 AM - 04:00 PM',
    type: 'Career Fair',
    attendees: 200,
    organizers: 'Ghana Chemical Society',
    image: '/src/assets/04.png'
  },
  {
    name: 'Research Showcase',
    description: 'Present your research and get feedback from peers and experts.',
    date: '2024-01-15T13:00:00',
    location: 'University of Cape Coast',
    time: '01:00 PM - 05:00 PM',
    type: 'Research',
    attendees: 100,
    organizers: 'Ghana Chemical Society',
    image: '/src/assets/05.png'
  },
  {
    name: 'Chemistry Quiz Competition',
    description: 'Test your knowledge and win exciting prizes in our annual quiz competition.',
    date: '2024-01-20T15:00:00',
    location: 'Ghana Academy of Arts and Sciences',
    time: '03:00 PM - 06:00 PM',
    type: 'Competition',
    attendees: 50,
    organizers: 'Ghana Chemical Society',
    image: '/src/assets/08.png'
  }
];

// Default event image to use as fallback
export const DEFAULT_EVENT_IMAGE = '/src/assets/07.jpg'; 