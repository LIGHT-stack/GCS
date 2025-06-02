import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Programs data
const programs = [
  {
    id: 'instrument-connect',
    title: 'Instrument Connect',
    description: 'A program connecting researchers with analytical instruments across institutions in Ghana, promoting resource sharing and collaborative research.',
    image: '/src/assets/01.png',
    color: 'bg-blue-500'
  },
  {
    id: 'expert-view-podcast',
    title: 'Expert View Podcast',
    description: 'A podcast series featuring interviews with leading experts in chemistry and related fields from Ghana and around the world.',
    image: '/src/assets/02.png',
    color: 'bg-orange-500'
  },
  {
    id: 'time-with-researcher',
    title: 'Time with the Researcher',
    description: 'Interactive sessions connecting students with established researchers to provide mentorship and career guidance.',
    image: '/src/assets/03.jpg',
    color: 'bg-green-500'
  },
  {
    id: 'analytical-instrument-workshop',
    title: 'Analytical Instrument Workshop',
    description: 'Hands-on training on modern analytical chemistry instruments.',
    image: '/src/assets/01.png',
    color: 'bg-purple-500'
  },
  {
    id: 'annual-conference',
    title: 'Annual Conference',
    description: 'The flagship annual gathering of chemists from Ghana and beyond, featuring presentations, posters, and networking opportunities.',
    image: '/src/assets/04.png',
    color: 'bg-red-500'
  },
  {
    id: 'internship-opportunities',
    title: 'Internship Opportunities',
    description: 'Connecting students with industry partners for practical experience and professional development.',
    image: '/src/assets/05.png',
    color: 'bg-teal-500'
  },
  {
    id: 'gcs-poster-festival',
    title: 'GCS Poster Festival',
    description: 'A showcase of research posters from students and early-career researchers across Ghana.',
    image: '/src/assets/02.png',
    color: 'bg-indigo-500'
  }
];

const EventsPrograms = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Events & Programs | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img 
          src="/src/assets/06.jpg" 
          alt="Events and Programs" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20">
          <Navbar />
          <div className="container mx-auto px-4 h-full flex items-center pt-16">
            <div className="max-w-3xl">
              <div className="mb-8">
                <Link to="/community">
                  <Button variant="ghost" className="flex items-center gap-2 bg-white/10 text-white hover:bg-white/20">
                    <ChevronLeft className="h-5 w-5" /> Back to Community
                  </Button>
                </Link>
              </div>
              
              <h1 className="text-5xl font-bold text-white mb-6">Events & Programs</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Discover our diverse range of events, workshops, conferences, and educational programs 
                designed to foster learning, networking, and professional growth in chemistry.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Ghana Chemical Society offers a wide range of programs designed to support 
              chemists at all stages of their careers. Explore our offerings below.
            </p>
          </div>
          
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden group hover:shadow-xl transition-all bg-white rounded-xl">
                <div className="relative h-48">
                  <div className={`absolute bottom-0 left-0 ${program.color} text-white px-4 py-2 text-sm font-medium z-10`}>
                    GCS Program
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[5]"></div>
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gcs-blue transition-colors">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button asChild className="w-full">
                    <Link to={`/community/events-programs/${program.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Events Calendar Teaser */}
          <div className="bg-gradient-to-r from-gcs-blue/10 to-gcs-blue/5 rounded-xl p-8 border border-gcs-blue/20 text-center">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-12 w-12 text-gcs-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Upcoming Events Calendar</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Stay up to date with our events schedule. From conferences to workshops, 
              there's always something happening at the Ghana Chemical Society.
            </p>
            <Button size="lg" className="bg-gcs-blue hover:bg-gcs-blue/90">
              View Full Calendar
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventsPrograms;
