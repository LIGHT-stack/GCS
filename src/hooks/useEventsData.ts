
import { useState } from 'react';

/**
 * Interface for Event object
 */
export interface Event {
  id: string;
  name: string;
  location: string;
  date: Date;
  description: string;
  attendees: number;
  image: string;
}

/**
 * Hook for providing event data and carousel logic
 * 
 * @returns {Object} Event data and carousel controls
 */
export const useEventsData = () => {
  // Current date to calculate future event dates
  const currentDate = new Date();
  
  // Sample upcoming events
  const upcomingEvents: Event[] = [
    {
      id: "event1",
      name: "Annual Chemistry Conference 2025",
      location: "KNUST, Kumasi",
      date: new Date(2025, 8, 22), // September 22, 2025
      description: "Join us for the premier chemistry event in Ghana, featuring keynote speeches, research presentations, and networking opportunities.",
      attendees: 400,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "event2",
      name: "Workshop on Green Chemistry Practices",
      location: "KNUST, Kumasi",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 8),
      description: "Learn about sustainable chemical processes and environmentally friendly laboratory practices.",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "event3",
      name: "Chemistry Education Symposium",
      location: "Cape Coast University",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 20),
      description: "A symposium focused on improving chemistry education at all levels across Ghana.",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "event4",
      name: "Industrial Chemistry Forum",
      location: "University of Ghana, Legon",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 4, 5),
      description: "Connect with industry professionals and explore career opportunities in industrial chemistry.",
      attendees: 180,
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "event5",
      name: "Environmental Chemistry Workshop",
      location: "University of Education Winneba",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 5, 12),
      description: "Focus on environmental monitoring and remediation techniques for chemical professionals.",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1516382799247-87df95d790b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "event6",
      name: "Chemistry Careers Fair",
      location: "University of Cape Coast",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 6, 18),
      description: "Meet potential employers and discover career paths in chemistry and related fields.",
      attendees: 250,
      image: "https://images.unsplash.com/photo-1559215385-56c1c6f31c2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "event7",
      name: "Analytical Chemistry Workshop",
      location: "Ghana Standards Authority, Accra",
      date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 7, 3),
      description: "Hands-on training on advanced analytical techniques and instrumentation for chemistry professionals.",
      attendees: 100,
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return { upcomingEvents };
};
