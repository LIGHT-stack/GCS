import { Program } from '@/types/program';

export const programsData: Record<string, Program> = {
  'annual-conference': {
    title: 'Annual Chemistry Conference',
    description: 'Our flagship event bringing together chemists from across Ghana',
    longDescription: 'The Annual Chemistry Conference is our premier event that brings together chemists, researchers, and industry professionals from across Ghana and beyond. This conference serves as a platform for sharing cutting-edge research, discussing industry trends, and fostering collaborations that advance the field of chemistry in Ghana.',
    image: '/images/programs/annual-conference.jpg',
    color: 'blue',
    events: [
      {
        name: 'Annual Chemistry Conference 2025',
        date: '2025-03-15',
        endDate: '2025-03-17',
        location: 'Accra International Conference Centre',
        time: '9:00 AM - 5:00 PM',
        description: 'Join us for the 2025 Annual Chemistry Conference featuring keynote speakers, research presentations, and networking opportunities.',
        image: '/images/events/annual-conference-2025.jpg',
        type: 'Conference',
        attendees: 500,
        organizers: 'Ghana Chemical Society',
        registrationLink: 'https://forms.gle/example',
        schedule: [
          {
            day: 'Day 1 - March 15, 2025',
            items: [
              { time: '9:00 AM - 10:00 AM', activity: 'Registration and Welcome Coffee' },
              { time: '10:00 AM - 11:00 AM', activity: 'Opening Ceremony and Keynote Address' },
              { time: '11:00 AM - 12:30 PM', activity: 'Plenary Session: Advances in Chemical Research' },
              { time: '12:30 PM - 2:00 PM', activity: 'Lunch Break and Networking' },
              { time: '2:00 PM - 4:00 PM', activity: 'Parallel Sessions: Research Presentations' },
              { time: '4:00 PM - 5:00 PM', activity: 'Poster Session and Tea Break' }
            ]
          },
          {
            day: 'Day 2 - March 16, 2025',
            items: [
              { time: '9:00 AM - 10:30 AM', activity: 'Industry Panel: Chemical Innovation in Ghana' },
              { time: '10:30 AM - 12:00 PM', activity: 'Workshop: Laboratory Safety and Best Practices' },
              { time: '12:00 PM - 1:30 PM', activity: 'Lunch Break' },
              { time: '1:30 PM - 3:30 PM', activity: 'Student Research Competition' },
              { time: '3:30 PM - 5:00 PM', activity: 'Networking Session and Exhibition' }
            ]
          },
          {
            day: 'Day 3 - March 17, 2025',
            items: [
              { time: '9:00 AM - 11:00 AM', activity: 'Roundtable: Future of Chemistry Education' },
              { time: '11:00 AM - 12:30 PM', activity: 'Award Ceremony and Recognition' },
              { time: '12:30 PM - 2:00 PM', activity: 'Closing Lunch' },
              { time: '2:00 PM - 3:00 PM', activity: 'Closing Remarks and Next Steps' }
            ]
          }
        ]
      }
    ],
    coordinators: [
      {
        name: 'Dr. Kwame Mensah',
        role: 'Conference Chair',
        image: '/images/team/coordinator1.jpg'
      },
      {
        name: 'Prof. Ama Osei',
        role: 'Scientific Committee Chair',
        image: '/images/team/coordinator2.jpg'
      }
    ],
    sponsors: [
      {
        name: 'Ghana Standard Authority',
        logo: '/images/sponsors/gsa.png'
      },
      {
        name: 'Environmental Protection Agency',
        logo: '/images/sponsors/epa.png'
      },
      {
        name: 'University of Ghana',
        logo: '/images/sponsors/ug.png'
      },
      {
        name: 'Kwame Nkrumah University of Science and Technology',
        logo: '/images/sponsors/knust.png'
      },
      {
        name: 'University of Cape Coast',
        logo: '/images/sponsors/ucc.png'
      },
      {
        name: 'Ghana Atomic Energy Commission',
        logo: '/images/sponsors/gaec.png'
      },
      {
        name: 'Council for Scientific and Industrial Research',
        logo: '/images/sponsors/csir.png'
      },
      {
        name: 'Ghana Academy of Arts and Sciences',
        logo: '/images/sponsors/gaas.png'
      }
    ]
  }
}; 