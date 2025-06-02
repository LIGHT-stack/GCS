
/**
 * Events and Programs Data
 * 
 * This file contains the data for events and program items used in the
 * EventsProgramsContent component. Separating the data from the UI components
 * improves maintainability and readability.
 */

// Current date for upcoming events calculation
const currentDate = new Date();

/**
 * Event interface defining the structure of event data
 */
export interface Event {
  title: string;
  date: Date;
  location: string;
  description: string;
  type: string;
}

/**
 * Program category interface defining the structure of program categories
 */
export interface ProgramCategory {
  title: string;
  items: {
    name: string;
    colorClass: string;
  }[];
}

/**
 * Sample upcoming events data
 */
export const upcomingEvents: Event[] = [
  {
    title: "Annual GCS Conference 2023",
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 15),
    location: "Accra International Conference Center",
    description: "The flagship event featuring research presentations, keynotes, and networking opportunities.",
    type: "conference"
  },
  {
    title: "Chemistry Education Workshop",
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 5),
    location: "University of Ghana",
    description: "Professional development for chemistry educators with hands-on demonstrations.",
    type: "workshop"
  },
  {
    title: "Industrial Chemistry Symposium",
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 10),
    location: "KNUST, Kumasi",
    description: "Exploring innovations in industrial chemical processes and manufacturing.",
    type: "symposium"
  }
];

/**
 * Sample past events data
 */
export const pastEvents: Event[] = [
  {
    title: "Ghana Chemistry Olympiad",
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 20),
    location: "Various Schools Nationwide",
    description: "National competition for secondary school students to promote chemistry education.",
    type: "competition"
  },
  {
    title: "Women in Chemistry Summit",
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 8),
    location: "Cape Coast University",
    description: "Celebrating and supporting female chemists and researchers in Ghana.",
    type: "summit"
  },
  {
    title: "Environmental Chemistry Webinar",
    date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 22),
    location: "Virtual Event",
    description: "Online discussion about chemical aspects of environmental protection in Ghana.",
    type: "webinar"
  }
];

/**
 * Program categories data
 */
export const programCategories: ProgramCategory[] = [
  {
    title: "Professional Development",
    items: [
      { name: "Continuing Education Courses", colorClass: "bg-gcs-blue/10" },
      { name: "Career Development Workshops", colorClass: "bg-gcs-blue/10" },
      { name: "Leadership Training for Chemists", colorClass: "bg-gcs-blue/10" }
    ]
  },
  {
    title: "Student Programs",
    items: [
      { name: "Chemistry Clubs Support", colorClass: "bg-gcs-orange/10" },
      { name: "Undergraduate Research Program", colorClass: "bg-gcs-orange/10" },
      { name: "Chemistry Competition Series", colorClass: "bg-gcs-orange/10" }
    ]
  },
  {
    title: "Research Initiatives",
    items: [
      { name: "Collaborative Research Groups", colorClass: "bg-green-100" },
      { name: "Grant Writing Workshops", colorClass: "bg-green-100" },
      { name: "Publication Support Services", colorClass: "bg-green-100" }
    ]
  },
  {
    title: "Public Engagement",
    items: [
      { name: "Chemistry Open Days", colorClass: "bg-purple-100" },
      { name: "Science Communication Training", colorClass: "bg-purple-100" },
      { name: "Public Lectures & Demonstrations", colorClass: "bg-purple-100" }
    ]
  }
];
