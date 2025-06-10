// eventsData.ts - Centralized events data

export interface EventData {
  name: string;
  date: Date;
  endDate: Date;
  location: string;
  description: string;
  longDescription?: string;
  attendees: number;
  organizers: string;
  schedule: {
    day: string;
    items: {
      time: string;
      activity: string;
    }[];
  }[];
  image: string;
  speakers: {
    name: string;
    title: string;
    institution: string;
    topic: string;
  }[];
  partners: {
    name: string;
    logo: string;
  }[];
  type: string;
  registrationLink?: string;
}

// Map of event IDs to event data
const eventsData: Record<string, EventData> = {
  "annual-chemistry-conference-2025": {
    name: "21st Ghana Chemical Society Conference",
    description: "Join us for the premier event in chemical sciences in Ghana, featuring keynote speeches, research presentations, and networking opportunities.",
    longDescription: "The 21st Ghana Chemical Society Conference is the premier event for chemists, researchers, and industry professionals in Ghana. This year's conference, themed 'Chemistry for a Sustainable Future', will bring together experts from academia, industry, and government to discuss the latest advancements in chemistry and their applications in addressing global challenges.\n\nKey topics include:\n• Green Chemistry and Sustainability\n• Materials Science and Nanotechnology\n• Pharmaceutical Chemistry\n• Environmental Chemistry\n• Chemical Education\n• Industrial Applications\n\nThe conference will feature keynote speeches, parallel sessions, poster presentations, and networking opportunities. Don't miss this chance to connect with leading experts and contribute to the advancement of chemical sciences in Ghana.",
    date: "2025-09-29",
    endDate: "2025-10-03",
    location: "KNUST, Kumasi",
    time: "9:00 AM - 5:00 PM",
    image: "/src/assets/GCS Conference/Wide conference flyer.jpg",
    type: "conference",
    attendees: 500,
    organizers: "Ghana Chemical Society",
    registrationLink: "https://shorturl.at/IW9FD",
    schedule: [
      {
        day: "Day 1 - September 29",
        items: [
          { time: "08:00 AM", activity: "Registration" },
          { time: "09:00 AM", activity: "Opening Ceremony" },
          { time: "10:30 AM", activity: "Keynote Address: Chemistry for a Sustainable Future" },
          { time: "12:00 PM", activity: "Lunch Break" },
          { time: "01:30 PM", activity: "Panel Discussion: Sustainable Chemistry in Africa" },
          { time: "03:30 PM", activity: "Coffee Break" },
          { time: "04:00 PM", activity: "Research Presentation Session 1" },
          { time: "06:00 PM", activity: "Welcome Reception" }
        ]
      },
      {
        day: "Day 2 - September 30",
        items: [
          { time: "09:00 AM", activity: "Plenary Session: Green Chemistry" },
          { time: "10:30 AM", activity: "Coffee Break" },
          { time: "11:00 AM", activity: "Parallel Sessions: Materials Science" },
          { time: "12:30 PM", activity: "Lunch Break" },
          { time: "02:00 PM", activity: "Parallel Sessions: Pharmaceutical Chemistry" },
          { time: "03:30 PM", activity: "Coffee Break" },
          { time: "04:00 PM", activity: "Poster Session" }
        ]
      },
      {
        day: "Day 3 - October 1",
        items: [
          { time: "09:00 AM", activity: "Plenary Session: Environmental Chemistry" },
          { time: "10:30 AM", activity: "Coffee Break" },
          { time: "11:00 AM", activity: "Parallel Sessions: Chemical Education" },
          { time: "12:30 PM", activity: "Lunch Break" },
          { time: "02:00 PM", activity: "Parallel Sessions: Industrial Applications" },
          { time: "03:30 PM", activity: "Coffee Break" },
          { time: "04:00 PM", activity: "Panel Discussion: Future of Chemistry in Ghana" }
        ]
      },
      {
        day: "Day 4 - October 2",
        items: [
          { time: "09:00 AM", activity: "Workshop: Research Methodology" },
          { time: "10:30 AM", activity: "Coffee Break" },
          { time: "11:00 AM", activity: "Workshop: Scientific Writing" },
          { time: "12:30 PM", activity: "Lunch Break" },
          { time: "02:00 PM", activity: "Workshop: Grant Writing" },
          { time: "03:30 PM", activity: "Coffee Break" },
          { time: "04:00 PM", activity: "Networking Session" }
        ]
      },
      {
        day: "Day 5 - October 3",
        items: [
          { time: "09:00 AM", activity: "Plenary Session: Future Directions" },
          { time: "10:30 AM", activity: "Coffee Break" },
          { time: "11:00 AM", activity: "Awards Ceremony" },
          { time: "12:30 PM", activity: "Lunch Break" },
          { time: "02:00 PM", activity: "Closing Ceremony" },
          { time: "03:30 PM", activity: "Farewell Reception" }
        ]
      }
    ],
    speakers: [
      { name: "Dr. Kofi Mensah", title: "Professor of Chemistry", institution: "University of Ghana", topic: "Principles of Green Chemistry" },
      { name: "Prof. Abena Doku", title: "Research Scientist", institution: "CSIR-Environmental Division", topic: "Sustainable Solvents" },
      { name: "Dr. James Takyi", title: "Industrial Chemist", institution: "Ghana Industrial Chemicals Ltd", topic: "Green Chemistry in Industry" },
      { name: "Prof. Sarah Owusu", title: "Department Chair", institution: "KNUST", topic: "Catalysis and Energy Efficiency" }
    ],
    partners: [
      { name: "Ghana Standard Authority", logo: "/src/assets/GCS Conference/Sponsors/Ghana Standard Authority.png" },
      { name: "Environmental Protection Agency", logo: "/src/assets/GCS Conference/Sponsors/Environmental Protection Agency - EPA.png" },
      { name: "University of Energy and Natural Resources", logo: "/src/assets/GCS Conference/Sponsors/University of Energy and Natural Resources - UENR.webp" },
      { name: "University of Health and Allied Science", logo: "/src/assets/GCS Conference/Sponsors/University of Health and Allied Science - UHAS.png" },
      { name: "Food and Drugs Authority", logo: "/src/assets/GCS Conference/Sponsors/Food and Drugs Authority - FDA.png" },
      { name: "Ghana Students Chemical Society", logo: "/src/assets/GCS Conference/Sponsors/Ghana Students Chemical Society.jpg" },
      { name: "Kwame Nkrumah University of Science and Technology", logo: "/src/assets/GCS Conference/Sponsors/Kwame Nkrumah University of Science and Technology - KNUST.jpg" },
      { name: "University of Cape Coast", logo: "/src/assets/GCS Conference/Sponsors/University of Cape Coast.jpg" },
      { name: "C K Tedam University of Technology & Applied Science", logo: "/src/assets/GCS Conference/Sponsors/C K Tedam University of Technology & Applied Science - CKTUTAS.jpg" },
      { name: "University of Ghana", logo: "/src/assets/GCS Conference/Sponsors/University of Ghana - UG.jpg" },
      { name: "Ghana Water Company Limited", logo: "/src/assets/GCS Conference/Sponsors/Ghana Water Company Limited - GWCL.jpg" },
      { name: "University of Winneba", logo: "/src/assets/GCS Conference/Sponsors/University of Winneba - UEW.jpg" },
      { name: "Koforidua Technical University", logo: "/src/assets/GCS Conference/Sponsors/Koforidua Technical University - KTU.png" }
    ]
  },
  "green-chemistry-workshop": {
    name: "Workshop on Green Chemistry Practices",
    date: new Date(2025, 6, 15), // July 15, 2025
    endDate: new Date(2025, 6, 16), // July 16, 2025
    location: "University of Ghana, Legon Campus",
    description: "Learn about sustainable chemical processes and environmentally friendly laboratory practices.",
    longDescription: "This intensive two-day workshop focuses on green chemistry principles and their practical applications in research and industry. Participants will learn how to design chemical products and processes that reduce or eliminate the generation of hazardous substances, conserve energy, and minimize waste production.\n\nThe workshop combines theoretical sessions with hands-on laboratory demonstrations to provide a comprehensive understanding of sustainable chemistry practices that can be implemented immediately in your work environment.",
    attendees: 150,
    organizers: "Ghana Chemical Society - Education Committee",
    schedule: [
      { day: "Day 1 - July 15", items: [
        { time: "08:30 AM", activity: "Registration" },
        { time: "09:00 AM", activity: "Welcome Address" },
        { time: "09:30 AM", activity: "Keynote: Principles of Green Chemistry" },
        { time: "11:00 AM", activity: "Coffee Break" },
        { time: "11:15 AM", activity: "Session 1: Designing Greener Chemical Processes" },
        { time: "01:00 PM", activity: "Lunch Break" },
        { time: "02:00 PM", activity: "Session 2: Sustainable Solvents and Reaction Media" },
        { time: "04:00 PM", activity: "Hands-on Workshop: Green Chemistry Metrics" },
        { time: "05:30 PM", activity: "Closing Remarks" }
      ]},
      { day: "Day 2 - July 16", items: [
        { time: "09:00 AM", activity: "Recap of Day 1" },
        { time: "09:30 AM", activity: "Session 3: Catalysis and Energy Efficiency" },
        { time: "11:00 AM", activity: "Coffee Break" },
        { time: "11:15 AM", activity: "Laboratory Demonstrations" },
        { time: "01:00 PM", activity: "Lunch Break" },
        { time: "02:00 PM", activity: "Session 4: Implementing Green Chemistry in Your Workplace" },
        { time: "03:30 PM", activity: "Panel Discussion: Challenges and Opportunities" },
        { time: "04:30 PM", activity: "Certificate Ceremony" },
        { time: "05:00 PM", activity: "Networking Reception" }
      ]}
    ],
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    speakers: [
      { name: "Dr. Kofi Mensah", title: "Professor of Chemistry", institution: "University of Ghana", topic: "Principles of Green Chemistry" },
      { name: "Prof. Abena Doku", title: "Research Scientist", institution: "CSIR-Environmental Division", topic: "Sustainable Solvents" },
      { name: "Dr. James Takyi", title: "Industrial Chemist", institution: "Ghana Industrial Chemicals Ltd", topic: "Green Chemistry in Industry" },
      { name: "Prof. Sarah Owusu", title: "Department Chair", institution: "KNUST", topic: "Catalysis and Energy Efficiency" }
    ],
    partners: [
      { name: "University of Ghana", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "CSIR-Environmental Division", logo: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "Ghana Industrial Chemicals Ltd", logo: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
    ],
    type: "workshop"
  },
  "analytical-chemistry-symposium": {
    name: "Analytical Chemistry Symposium",
    date: new Date(2025, 7, 8), // August 8, 2025
    endDate: new Date(2025, 7, 10), // August 10, 2025
    location: "University of Cape Coast, Cape Coast",
    description: "A focused symposium on advances in analytical chemistry techniques and applications in research and industry.",
    longDescription: "The Analytical Chemistry Symposium brings together experts from academia, industry, and regulatory bodies to discuss the latest advances in analytical techniques, instrumentation, and applications. The symposium will cover a wide range of topics including chromatography, spectroscopy, mass spectrometry, electrochemistry, and the application of these techniques in environmental monitoring, food safety, pharmaceutical analysis, and materials characterization.\n\nThis three-day event offers excellent opportunities for professionals, researchers, and students to learn about cutting-edge analytical methods, share their research findings, and build collaborative networks within the analytical chemistry community in Ghana and across Africa.",
    attendees: 200,
    organizers: "Ghana Chemical Society - Analytical Chemistry Division",
    schedule: [
      { day: "Day 1 - August 8", items: [
        { time: "08:30 AM", activity: "Registration" },
        { time: "09:30 AM", activity: "Opening Ceremony" },
        { time: "10:30 AM", activity: "Plenary Lecture: Recent Advances in Analytical Instrumentation" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "01:30 PM", activity: "Session 1: Chromatographic Methods" },
        { time: "03:30 PM", activity: "Coffee Break" },
        { time: "04:00 PM", activity: "Poster Session" },
        { time: "06:00 PM", activity: "Welcome Reception" }
      ]},
      { day: "Day 2 - August 9", items: [
        { time: "09:00 AM", activity: "Plenary Lecture: Analytical Chemistry in Environmental Monitoring" },
        { time: "10:30 AM", activity: "Coffee Break" },
        { time: "10:45 AM", activity: "Session 2: Spectroscopy and Mass Spectrometry" },
        { time: "12:30 PM", activity: "Lunch Break" },
        { time: "02:00 PM", activity: "Session 3: Electrochemical Methods" },
        { time: "04:00 PM", activity: "Panel Discussion: Challenges in Analytical Method Development" },
        { time: "05:30 PM", activity: "Laboratory Tour" }
      ]},
      { day: "Day 3 - August 10", items: [
        { time: "09:00 AM", activity: "Plenary Lecture: Analytical Chemistry in Food Safety" },
        { time: "10:30 AM", activity: "Coffee Break" },
        { time: "10:45 AM", activity: "Session 4: Applications in Pharmaceutical Analysis" },
        { time: "12:30 PM", activity: "Lunch Break" },
        { time: "02:00 PM", activity: "Workshop: Quality Assurance in Analytical Laboratories" },
        { time: "04:00 PM", activity: "Closing Ceremony and Awards" },
        { time: "05:00 PM", activity: "Farewell Reception" }
      ]}
    ],
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    speakers: [
      { name: "Prof. David Nkansah", title: "Director", institution: "National Analytical Laboratory", topic: "Recent Advances in Analytical Instrumentation" },
      { name: "Dr. Esther Amankwah", title: "Senior Scientist", institution: "Food Research Institute", topic: "Analytical Chemistry in Food Safety" },
      { name: "Prof. Benjamin Tetteh", title: "Professor of Chemistry", institution: "University of Cape Coast", topic: "Chromatographic Methods" },
      { name: "Dr. Mercy Addo", title: "Quality Assurance Manager", institution: "Ghana Standards Authority", topic: "Quality Assurance in Analytical Laboratories" },
      { name: "Dr. Francis Oduro", title: "Research Scientist", institution: "Environmental Protection Agency", topic: "Analytical Chemistry in Environmental Monitoring" }
    ],
    partners: [
      { name: "University of Cape Coast", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "Ghana Standards Authority", logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "Food Research Institute", logo: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "National Analytical Laboratory", logo: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
    ],
    type: "symposium"
  },
  "chemistry-education-conference": {
    name: "Chemistry Education Conference",
    date: new Date(2025, 5, 12), // June 12, 2025
    endDate: new Date(2025, 5, 14), // June 14, 2025
    location: "University of Education, Winneba",
    description: "A conference focused on improving chemistry education at all levels in Ghana.",
    longDescription: "The Chemistry Education Conference is dedicated to advancing the teaching and learning of chemistry in Ghana from primary schools through universities. This conference brings together teachers, curriculum developers, education researchers, and policy makers to share innovative teaching methods, curriculum enhancements, and research findings that can improve how chemistry is taught and learned.\n\nThe conference features presentations, workshops, and discussions on topics such as incorporating practical work, addressing misconceptions, using digital resources, making chemistry relevant to students' lives, and preparing students for careers in chemistry-related fields. Attendees will gain valuable insights and practical strategies they can implement in their own teaching contexts.",
    attendees: 250,
    organizers: "Ghana Chemical Society - Education Division",
    schedule: [
      { day: "Day 1 - June 12", items: [
        { time: "08:00 AM", activity: "Registration" },
        { time: "09:00 AM", activity: "Opening Ceremony" },
        { time: "10:00 AM", activity: "Keynote Address: Transforming Chemistry Education in Ghana" },
        { time: "11:30 AM", activity: "Coffee Break" },
        { time: "12:00 PM", activity: "Session 1: Innovative Teaching Methods" },
        { time: "01:30 PM", activity: "Lunch Break" },
        { time: "02:30 PM", activity: "Workshop: Developing Effective Laboratory Activities" },
        { time: "04:30 PM", activity: "Poster Session" },
        { time: "06:00 PM", activity: "Welcome Reception" }
      ]},
      { day: "Day 2 - June 13", items: [
        { time: "09:00 AM", activity: "Plenary Session: Technology in Chemistry Education" },
        { time: "10:30 AM", activity: "Coffee Break" },
        { time: "11:00 AM", activity: "Session 2: Assessment Strategies" },
        { time: "01:00 PM", activity: "Lunch Break" },
        { time: "02:00 PM", activity: "Workshop: Creating Virtual Chemistry Experiments" },
        { time: "04:00 PM", activity: "Panel Discussion: Challenges in Chemistry Education" },
        { time: "05:30 PM", activity: "Social Event" }
      ]},
      { day: "Day 3 - June 14", items: [
        { time: "09:00 AM", activity: "Plenary Session: Inclusive Chemistry Education" },
        { time: "10:30 AM", activity: "Coffee Break" },
        { time: "11:00 AM", activity: "Session 3: Curriculum Development" },
        { time: "01:00 PM", activity: "Lunch Break" },
        { time: "02:00 PM", activity: "Workshop: Chemistry Education Research Methods" },
        { time: "04:00 PM", activity: "Closing Ceremony and Awards" },
        { time: "05:30 PM", activity: "Farewell Reception" }
      ]}
    ],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    speakers: [
      { name: "Prof. Grace Ofori", title: "Professor of Chemistry Education", institution: "University of Education, Winneba", topic: "Transforming Chemistry Education in Ghana" },
      { name: "Dr. Michael Boateng", title: "Curriculum Developer", institution: "Ghana Education Service", topic: "Curriculum Development" },
      { name: "Prof. Hannah Acquah", title: "Director", institution: "Center for Science Education", topic: "Technology in Chemistry Education" },
      { name: "Dr. Samuel Kojo", title: "Senior Lecturer", institution: "KNUST", topic: "Assessment Strategies" },
      { name: "Prof. Elizabeth Ansah", title: "Professor of Science Education", institution: "University of Cape Coast", topic: "Inclusive Chemistry Education" }
    ],
    partners: [
      { name: "University of Education, Winneba", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "Ghana Education Service", logo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "Center for Science Education", logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "Ministry of Education", logo: "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
    ],
    type: "conference"
  },
  "chemical-industry-networking": {
    name: "Chemical Industry Networking Summit",
    date: new Date(2025, 9, 5), // October 5, 2025
    endDate: new Date(2025, 9, 6), // October 6, 2025
    location: "Accra International Conference Centre",
    description: "Connect with industry leaders, explore career opportunities, and learn about the latest trends in the chemical industry.",
    longDescription: "The Chemical Industry Networking Summit is Ghana's premier event for connecting chemistry professionals with industry leaders, employers, and innovators. This two-day summit offers a unique platform for networking, career development, and knowledge exchange focused on the chemical industry, its challenges, and opportunities in Ghana and the broader African context.\n\nParticipants will engage with representatives from manufacturing, pharmaceuticals, petrochemicals, agrochemicals, environmental services, research organizations, and educational institutions. The summit includes panel discussions, company presentations, career workshops, and numerous networking opportunities designed to foster meaningful connections between chemistry professionals and industry stakeholders.",
    attendees: 300,
    organizers: "Ghana Chemical Society - Industry Relations Committee",
    schedule: [
      { day: "Day 1 - October 5", items: [
        { time: "08:00 AM", activity: "Registration" },
        { time: "09:00 AM", activity: "Opening Ceremony" },
        { time: "10:00 AM", activity: "Keynote Address: The Future of the Chemical Industry in Ghana" },
        { time: "11:30 AM", activity: "Coffee Break" },
        { time: "12:00 PM", activity: "Industry Panel: Current Challenges and Opportunities" },
        { time: "01:30 PM", activity: "Lunch Break & Networking" },
        { time: "02:30 PM", activity: "Company Presentations (Session 1)" },
        { time: "04:00 PM", activity: "Coffee Break" },
        { time: "04:30 PM", activity: "Workshop: Career Development in the Chemical Industry" },
        { time: "06:00 PM", activity: "Networking Reception" }
      ]},
      { day: "Day 2 - October 6", items: [
        { time: "09:00 AM", activity: "Panel: Innovation and Sustainability in the Chemical Industry" },
        { time: "10:30 AM", activity: "Coffee Break" },
        { time: "11:00 AM", activity: "Company Presentations (Session 2)" },
        { time: "12:30 PM", activity: "Lunch Break & Networking" },
        { time: "01:30 PM", activity: "Career Fair Opens" },
        { time: "03:30 PM", activity: "Workshop: Entrepreneurship in Chemistry" },
        { time: "05:00 PM", activity: "Closing Ceremony" },
        { time: "06:00 PM", activity: "Farewell Networking Event" }
      ]}
    ],
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    speakers: [
      { name: "Dr. Ibrahim Mensah", title: "CEO", institution: "Ghana Chemical Industries Association", topic: "The Future of the Chemical Industry in Ghana" },
      { name: "Mrs. Fatima Alhassan", title: "HR Director", institution: "Unilever Ghana", topic: "Career Development in the Chemical Industry" },
      { name: "Mr. Joseph Tetteh", title: "Managing Director", institution: "Tema Oil Refinery", topic: "Current Challenges and Opportunities" },
      { name: "Dr. Patricia Nyarko", title: "Innovation Director", institution: "Ghana Innovation Hub", topic: "Innovation and Sustainability in the Chemical Industry" },
      { name: "Mr. Emmanuel Darko", title: "Founder", institution: "EcoChem Ghana", topic: "Entrepreneurship in Chemistry" }
    ],
    partners: [
      { name: "Ghana Chemical Industries Association", logo: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "Unilever Ghana", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "Tema Oil Refinery", logo: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "Ghana Innovation Hub", logo: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
      { name: "EcoChem Ghana", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
    ],
    type: "summit"
  }
};

export default eventsData;
