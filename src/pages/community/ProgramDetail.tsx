import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, MapPin, Users, Image as ImageIcon, Award, Check, User, Info, ExternalLink, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

/**
 * Type definitions for the component
 */
interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
}

interface Coordinator {
  name: string;
  title: string;
  institution: string;
}

interface Program {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  events: Event[];
  coordinators: Coordinator[];
}

// Mock data for programs - in a real app this would come from an API
const programsData: Record<string, Program> = {
  'instrument-connect': {
    title: 'Instrument Connect',
    description: 'A program connecting researchers with analytical instruments across institutions in Ghana, promoting resource sharing and collaborative research.',
    longDescription: 'Instrument Connect is a flagship program of the Ghana Chemical Society that addresses the challenge of limited access to sophisticated analytical instruments in research institutions across Ghana. By creating a network of shared instrumentation resources, we enable researchers to conduct advanced analytical work without the need for every institution to acquire expensive equipment. This program promotes collaboration, optimizes resource utilization, and accelerates scientific discovery.',
    image: '/src/assets/07.jpg',
    color: 'blue',
    events: [
      {
        title: 'Instrument Connect Workshop',
        date: '2025-06-15',
        location: 'University of Ghana, Legon',
        description: 'A workshop on accessing and utilizing shared analytical instruments.'
      },
      {
        title: 'Analytical Equipment Training',
        date: '2025-07-22',
        location: 'Kwame Nkrumah University of Science and Technology',
        description: 'Hands-on training session for researchers on advanced analytical instruments.'
      }
    ],
    coordinators: [
      { name: 'Dr. Kwame Asante', title: 'Program Director', institution: 'University of Ghana' },
      { name: 'Prof. Abena Mensah', title: 'Technical Advisor', institution: 'KNUST' }
    ]
  },
  'expert-view-podcast': {
    title: 'Expert View Podcast',
    description: 'A podcast series featuring interviews with leading experts in chemistry and related fields from Ghana and around the world.',
    longDescription: 'The Expert View Podcast is a digital initiative that brings the insights and experiences of leading chemistry experts to a wider audience. Through in-depth interviews, we explore cutting-edge research, career journeys, educational pathways, and the societal impact of chemistry. The podcast serves as both an educational resource and a way to highlight the achievements of chemists from Ghana and beyond, inspiring the next generation of scientific talent.',
    image: '/src/assets/08.png',
    color: 'orange',
    events: [
      {
        title: 'Podcast Live Recording: Green Chemistry',
        date: '2025-05-18',
        location: 'Virtual Event',
        description: 'Live recording with international experts in green chemistry.'
      },
      {
        title: 'Podcast Launch Event',
        date: '2025-04-30',
        location: 'Ghana Academy of Arts and Sciences, Accra',
        description: 'Official launch of Season 3 of the Expert View Podcast.'
      }
    ],
    coordinators: [
      { name: 'Dr. Esi Darko', title: 'Host & Producer', institution: 'Ghana Chemical Society' },
      { name: 'Mr. Kofi Amoah', title: 'Technical Director', institution: 'Media Division, GCS' }
    ]
  },
  'time-with-researcher': {
    title: 'Time with the Researcher',
    description: 'Interactive sessions connecting students with established researchers to provide mentorship and career guidance.',
    longDescription: 'Time with the Researcher is a mentorship program designed to bridge the gap between established researchers and students. Through scheduled sessions, students gain insights into research methodologies, career pathways, and the day-to-day realities of a scientific career. The program helps demystify the research process, provides valuable networking opportunities, and inspires students to pursue careers in chemical sciences.',
    image: '/src/assets/08.png',
    color: 'green',
    events: [
      {
        title: 'Meet a Pharmaceutical Researcher',
        date: '2025-06-05',
        location: 'University of Ghana, School of Pharmacy',
        description: 'Q&A session with leading pharmaceutical researchers.'
      },
      {
        title: 'Research Career Pathways',
        date: '2025-08-12',
        location: 'CSIR-Food Research Institute, Accra',
        description: 'Panel discussion on diverse career paths in chemical research.'
      }
    ],
    coordinators: [
      { name: 'Prof. Joseph Akwasi', title: 'Program Chair', institution: 'University of Cape Coast' },
      { name: 'Dr. Mercy Owusu', title: 'Student Liaison', institution: 'Ghana Chemical Society' }
    ]
  },
  'analytical-instrument-workshop': {
    title: 'Analytical Instrument Workshop',
    description: 'Hands-on training on modern analytical chemistry instruments.',
    longDescription: 'The Analytical Instrument Workshop provides hands-on training on modern analytical chemistry instruments. Participants learn operational principles, sample preparation, data acquisition, and interpretation techniques for various instruments including HPLC, GC-MS, NMR, and more. These workshops equip chemists with practical skills essential for academic research and industrial applications.',
    image: '/src/assets/07.jpg',
    color: 'purple',
    events: [
      {
        title: 'HPLC Training Workshop',
        date: '2025-09-10',
        location: 'KNUST Analytical Laboratory',
        description: 'Comprehensive training on High Performance Liquid Chromatography techniques.'
      },
      {
        title: 'GC-MS Applications Workshop',
        date: '2025-10-15',
        location: 'University of Ghana',
        description: 'Workshop focusing on Gas Chromatography-Mass Spectrometry applications in research.'
      }
    ],
    coordinators: [
      { name: 'Dr. Francis Osei', title: 'Workshop Director', institution: 'KNUST' },
      { name: 'Ms. Rachel Appiah', title: 'Lab Coordinator', institution: 'Ghana Standards Authority' }
    ]
  },
  'annual-conference': {
    title: 'Annual Conference',
    description: 'The flagship annual gathering of chemists from Ghana and beyond, featuring presentations, posters, and networking opportunities.',
    longDescription: 'The Ghana Chemical Society Annual Conference is our premier event that brings together chemists, researchers, educators, and industry professionals from across Ghana and beyond. This multi-day conference features keynote presentations from leading experts, parallel sessions for research presentations, poster exhibitions, workshops, and ample networking opportunities. The conference serves as a platform for sharing cutting-edge research, discussing emerging trends in chemistry, and fostering collaborations that advance the chemical sciences in Ghana.',
    image: '/src/assets/08.png',
    color: 'red',
    events: [
      {
        title: 'GCS Annual Conference 2025',
        date: '2025-11-15',
        location: 'Kempinski Hotel Gold Coast City, Accra',
        description: 'The 2025 edition of our flagship conference featuring international speakers and workshops.'
      },
      {
        title: 'Pre-Conference Workshop: Scientific Writing',
        date: '2025-11-14',
        location: 'University of Ghana, Legon',
        description: 'A workshop on effective scientific writing and publication strategies.'
      }
    ],
    coordinators: [
      { name: 'Prof. Kwame Mensah', title: 'Conference Chair', institution: 'University of Ghana' },
      { name: 'Dr. Sarah Addo', title: 'Program Director', institution: 'Ghana Chemical Society' }
    ]
  },
  'chemistry-olympiad': {
    title: 'Chemistry Olympiad',
    description: 'A national competition for high school students to showcase their chemistry knowledge and skills.',
    longDescription: 'The Ghana Chemistry Olympiad is an annual competition designed to identify, nurture, and celebrate exceptional chemistry talent among high school students. The program includes regional competitions leading to a national final, where students demonstrate their theoretical knowledge and practical skills in chemistry. Winners have the opportunity to represent Ghana at the International Chemistry Olympiad. The program aims to inspire young minds, promote excellence in chemistry education, and build a pipeline of future chemistry leaders.',
    image: '/src/assets/07.jpg',
    color: 'yellow',
    events: [
      {
        title: 'National Chemistry Olympiad Finals',
        date: '2025-07-20',
        location: 'KNUST, Kumasi',
        description: 'The final round of the national chemistry competition for high school students.'
      }
    ],
    coordinators: [
      { name: 'Dr. Kwame Mensah', title: 'Program Director', institution: 'Ghana Chemical Society' },
      { name: 'Prof. Abena Osei', title: 'Technical Advisor', institution: 'University of Ghana' }
    ]
  },
  'industry-academia-bridge': {
    title: 'Industry-Academia Bridge',
    description: 'A program fostering collaboration between academic institutions and chemical industries in Ghana.',
    longDescription: 'The Industry-Academia Bridge program facilitates meaningful collaboration between academic institutions and chemical industries in Ghana. Through structured partnerships, joint research projects, and knowledge exchange initiatives, we aim to bridge the gap between theoretical knowledge and practical industrial applications. The program includes industry visits, collaborative research projects, internship opportunities, and joint workshops. By strengthening these connections, we enhance the relevance of academic research and support the growth of Ghana\'s chemical industry.',
    image: '/src/assets/08.png',
    color: 'indigo',
    events: [
      {
        title: 'Industry-Academia Partnership Forum',
        date: '2025-09-25',
        location: 'Ghana Chamber of Commerce, Accra',
        description: 'A forum for academic and industry leaders to discuss collaboration opportunities.'
      },
      {
        title: 'Industrial Internship Program Launch',
        date: '2025-10-10',
        location: 'Virtual Event',
        description: 'Launch of the 2025-2026 industrial internship program for chemistry students.'
      }
    ],
    coordinators: [
      { name: 'Dr. Kwesi Addo', title: 'Program Director', institution: 'Ghana Chemical Society' },
      { name: 'Mr. Joseph Mensah', title: 'Industry Liaison', institution: 'Ghana Chamber of Commerce' }
    ]
  },
  'internship-opportunities': {
    title: 'Internship Opportunities',
    description: 'A program connecting chemistry students and graduates with valuable internship opportunities in research institutions and industries.',
    longDescription: 'The GCS Internship Opportunities program serves as a bridge between talented chemistry students/graduates and leading research institutions, chemical industries, and laboratories across Ghana. Through strategic partnerships with academic institutions and industry leaders, we facilitate meaningful internship placements that provide hands-on experience, professional development, and potential career pathways. The program aims to enhance practical skills, build professional networks, and prepare the next generation of chemists for successful careers in both academia and industry.',
    image: '/src/assets/07.jpg',
    color: 'teal',
    events: [
      {
        title: 'Internship Fair 2025',
        date: '2025-08-05',
        location: 'University of Ghana, Legon',
        description: 'Annual internship fair connecting students with potential employers and research institutions.'
      },
      {
        title: 'Internship Preparation Workshop',
        date: '2025-07-20',
        location: 'Virtual Event',
        description: 'Workshop on resume building, interview skills, and professional development for internship seekers.'
      }
    ],
    coordinators: [
      { name: 'Dr. Ama Kufuor', title: 'Internship Coordinator', institution: 'Ghana Chemical Society' },
      { name: 'Mr. Kwame Osei', title: 'Industry Relations Manager', institution: 'Ghana Chemical Society' }
    ]
  },
  'gcs-poster-festival': {
    title: 'GCS Poster Festival',
    description: 'An annual showcase of research posters from chemistry students and researchers across Ghana.',
    longDescription: 'The GCS Poster Festival is a vibrant celebration of chemical research and innovation in Ghana. This annual event provides a platform for undergraduate and graduate students, as well as early-career researchers, to present their work through poster presentations. The festival fosters scientific communication skills, encourages networking among researchers, and showcases the diverse research being conducted in Ghana\'s chemistry community. Participants receive valuable feedback from established researchers and have the opportunity to win awards for outstanding presentations.',
    image: '/src/assets/08.png',
    color: 'pink',
    events: [
      {
        title: 'GCS Poster Festival 2025',
        date: '2025-09-15',
        location: 'KNUST, Kumasi',
        description: 'Annual poster presentation festival featuring research from chemistry students and researchers.'
      },
      {
        title: 'Poster Design Workshop',
        date: '2025-08-30',
        location: 'University of Ghana, Legon',
        description: 'Workshop on effective scientific poster design and presentation techniques.'
      }
    ],
    coordinators: [
      { name: 'Prof. Efua Mensah', title: 'Festival Director', institution: 'KNUST' },
      { name: 'Dr. Kofi Addo', title: 'Academic Coordinator', institution: 'Ghana Chemical Society' }
    ]
  }
};

/**
 * ProgramDetail Component
 * 
 * Displays detailed information about a specific GCS program using sections
 * instead of tabs for better organization and user experience
 * 
 * @returns {JSX.Element} The rendered ProgramDetail page
 */
const ProgramDetail = () => {
  const { programId } = useParams<{ programId: string }>();
  const [program, setProgram] = useState<Program | null>(null);
  
  useEffect(() => {
    if (programId && programId in programsData) {
      setProgram(programsData[programId]);
      document.title = `${programsData[programId].title} | Ghana Chemical Society`;
    } else {
      document.title = 'Program | Ghana Chemical Society';
    }
  }, [programId]);
  
  // Check for active section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.program-section');
      let currentSectionId = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          currentSectionId = section.id;
        }
      });
      
      // Update active menu item if needed
      if (currentSectionId) {
        const menuItems = document.querySelectorAll('.section-nav-item');
        menuItems.forEach((item) => {
          if ((item as HTMLElement).dataset.section === currentSectionId) {
            item.classList.add('text-gcs-blue', 'border-gcs-blue');
            item.classList.remove('text-gray-600', 'border-transparent');
          } else {
            item.classList.remove('text-gcs-blue', 'border-gcs-blue');
            item.classList.add('text-gray-600', 'border-transparent');
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };
  
  if (!program) {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        <AnimatedBackground />
        <Navbar />
        <div className="pt-40 pb-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Program Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The program you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/community/events-programs">
              Return to Events & Programs
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'orange': return 'bg-orange-500';
      case 'green': return 'bg-green-500';
      case 'purple': return 'bg-purple-500';
      case 'red': return 'bg-red-500';
      case 'yellow': return 'bg-yellow-500';
      case 'indigo': return 'bg-indigo-500';
      case 'teal': return 'bg-teal-500';
      case 'pink': return 'bg-pink-500';
      default: return 'bg-blue-500';
    }
  };
  
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-6 md:pt-40 md:pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link to="/community/events-programs">
              <Button variant="ghost" className="flex items-center gap-2">
                <ChevronLeft className="h-5 w-5" /> Back to Events & Programs
              </Button>
            </Link>
          </div>
          
          {/* Program Header */}
          <div className="relative h-60 md:h-80 rounded-xl overflow-hidden mb-8 shadow-lg group">
            <img 
              src={program.image} 
              alt={program.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 w-full">
                <div className="flex items-center mb-2">
                  <Badge className={`${getBadgeColor(program.color)} mr-2`}>
                    GCS Program
                  </Badge>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>Ongoing Program</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{program.title}</h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl">{program.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section Navigation */}
      <div className="sticky top-16 z-10 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex overflow-x-auto scrollbar-none">
            <button 
              className="section-nav-item text-gcs-blue border-b-2 border-gcs-blue px-4 py-3 font-medium whitespace-nowrap" 
              onClick={() => scrollToSection('about')}
              data-section="about"
            >
              About
            </button>
            <button 
              className="section-nav-item text-gray-600 border-b-2 border-transparent px-4 py-3 font-medium whitespace-nowrap" 
              onClick={() => scrollToSection('objectives')}
              data-section="objectives"
            >
              Objectives
            </button>
            <button 
              className="section-nav-item text-gray-600 border-b-2 border-transparent px-4 py-3 font-medium whitespace-nowrap" 
              onClick={() => scrollToSection('events')}
              data-section="events"
            >
              Events
            </button>
            <button 
              className="section-nav-item text-gray-600 border-b-2 border-transparent px-4 py-3 font-medium whitespace-nowrap" 
              onClick={() => scrollToSection('coordinators')}
              data-section="coordinators"
            >
              Coordinators
            </button>
            <button 
              className="section-nav-item text-gray-600 border-b-2 border-transparent px-4 py-3 font-medium whitespace-nowrap" 
              onClick={() => scrollToSection('gallery')}
              data-section="gallery"
            >
              Gallery
            </button>
            <button 
              className="section-nav-item text-gray-600 border-b-2 border-transparent px-4 py-3 font-medium whitespace-nowrap" 
              onClick={() => scrollToSection('contact')}
              data-section="contact"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
      
      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
          {/* About Section */}
          <section id="about" className="program-section p-8 md:p-10 border-b border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Info className="h-5 w-5 text-gcs-blue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">About the Program</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>{program.longDescription}</p>
            </div>
          </section>
          
          {/* Objectives Section */}
          <section id="objectives" className="program-section p-8 md:p-10 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
                <Award className="h-5 w-5 text-gcs-blue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Program Objectives</h2>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Facilitate knowledge exchange and collaboration between researchers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Develop skills and expertise in chemical sciences</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Build a strong community of chemists and chemistry enthusiasts in Ghana</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Promote the application of chemistry in addressing societal challenges</span>
                </li>
              </ul>
            </div>
          </section>
          
          {/* Events Section */}
          <section id="events" className="program-section p-8 md:p-10 border-b border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Calendar className="h-5 w-5 text-gcs-blue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
            </div>
            
            <div className="space-y-6">
              {program.events.map((event, index) => {
                const eventDate = new Date(event.date);
                const isUpcoming = eventDate >= new Date();
                
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
            
            <div className="mt-10 p-4 border border-gray-200 rounded-lg bg-gray-50/50">
              <p className="text-center text-gray-600">
                Want to stay updated with our events? <a href="#" className="text-gcs-blue hover:underline">Subscribe to our newsletter</a>
              </p>
            </div>
          </section>
          
          {/* Coordinators Section */}
          <section id="coordinators" className="program-section p-8 md:p-10 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4">
                <Users className="h-5 w-5 text-gcs-blue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Program Coordinators</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {program.coordinators.map((coordinator, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-gcs-blue/30 hover:shadow-md transition-all"
                >
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gcs-blue/20 to-gcs-blue/5 flex items-center justify-center border border-gcs-blue/20">
                    <User className="h-8 w-8 text-gcs-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{coordinator.name}</h3>
                    <p className="text-gcs-blue font-medium">{coordinator.title}</p>
                    <p className="text-gray-500 text-sm">{coordinator.institution}</p>
                    <Button variant="ghost" size="sm" className="mt-2 text-xs px-0 h-auto flex items-center">
                      View Profile <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-white rounded-lg p-6 text-center shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Interested in Contributing?</h3>
              <p className="text-gray-600 mb-4">
                We're always looking for experts to contribute to our programs. 
                If you're interested in joining our team, please get in touch.
              </p>
              <Button>Contact Program Leads</Button>
            </div>
          </section>
          
          {/* Gallery Section */}
          <section id="gallery" className="program-section p-8 md:p-10 border-b border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <ImageIcon className="h-5 w-5 text-gcs-blue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Program Gallery</h2>
            </div>
            
            <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-200 rounded-lg text-center bg-gray-50">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <ImageIcon className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">Gallery Coming Soon</h3>
              <p className="text-gray-500 mt-2 max-w-md">
                We're currently gathering photos and videos from our recent events.
                Check back soon to see highlights from this program's activities.
              </p>
              
              <div className="mt-8 grid grid-cols-3 gap-3 opacity-30">
                <div className="aspect-square bg-gray-200 rounded-md"></div>
                <div className="aspect-square bg-gray-200 rounded-md"></div>
                <div className="aspect-square bg-gray-200 rounded-md"></div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="program-section p-8 md:p-10">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-gcs-blue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Contact Program Team</h2>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 md:p-8">
              <p className="text-gray-700 mb-6">
                Have questions about {program.title}? Want to get involved or receive updates about future events?
                Fill out the form below and a member of our team will get back to you.
              </p>
              
              <form className="space-y-4 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gcs-blue focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gcs-blue focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gcs-blue focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gcs-blue focus:border-transparent"></textarea>
                </div>
                
                <div className="flex justify-center">
                  <Button type="submit" className="px-6">Send Message</Button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProgramDetail;
