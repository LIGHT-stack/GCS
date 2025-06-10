import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Building, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Community = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Community | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Hero Section with Full Background Image */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img 
          src="/src/assets/community network.png" 
          alt="Community Network" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20">
          <Navbar />
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                GCS Community Network
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-gcs-orange to-gcs-blue mb-8"></div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 animate-fade-in">
                Connect with chemists, educators, researchers, and industry professionals through our 
                global network of partnerships, events, and outreach initiatives. Together, we're 
                advancing chemical sciences and creating positive change in Ghana and beyond.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Button asChild size="lg" className="bg-gcs-blue hover:bg-gcs-blue/90">
                  <Link to="/community/events-programs">
                    Explore Our Programs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Link to="/membership">
                    Join Our Community
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Network Content Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Community Network</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The Ghana Chemical Society connects professionals, academics, students, and enthusiasts
              through our extensive network of partnerships and programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white rounded-xl border-l-4 border-gcs-blue shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div className="w-14 h-14 rounded-full bg-gcs-blue/10 flex items-center justify-center group-hover:bg-gcs-blue/20 transition-colors">
                  <Globe className="h-8 w-8 text-gcs-blue" />
                </div>
                <CardTitle className="text-2xl">International Partnerships</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Explore our global network of partnerships with international chemical societies, research institutions,
                  and industry organizations around the world.
                </p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button asChild className="bg-gcs-blue hover:bg-gcs-blue/80 w-full">
                  <Link to="/community/international-partners">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
            
            <Card className="bg-white rounded-xl border-l-4 border-gcs-orange shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div className="w-14 h-14 rounded-full bg-gcs-orange/10 flex items-center justify-center group-hover:bg-gcs-orange/20 transition-colors">
                  <Building className="h-8 w-8 text-gcs-orange" />
                </div>
                <CardTitle className="text-2xl">Local Partnerships</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Discover our collaborations with Ghanaian universities, research centers, government institutions,
                  and industry partners to advance chemical sciences nationally.
                </p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button asChild className="bg-gcs-orange hover:bg-gcs-orange/80 w-full">
                  <Link to="/community/local-partners">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white rounded-xl border-l-4 border-green-600 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Events & Programs</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Participate in our diverse range of events, workshops, conferences, and educational
                  programs designed to foster learning and professional growth.
                </p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button asChild className="bg-green-600 hover:bg-green-700 w-full">
                  <Link to="/community/events-programs">
                    View Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
            
            <Card className="bg-white rounded-xl border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Outreach & Non-Profits</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Learn about our outreach initiatives with schools, communities, and non-profit
                  organizations to promote chemistry education and awareness.
                </p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 w-full">
                  <Link to="/community/outreach">
                    Explore Initiatives <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Become a part of the Ghana Chemical Society and contribute to the advancement of 
              chemical sciences in Ghana and beyond.
            </p>
            <Button asChild size="lg" className="bg-gcs-blue hover:bg-gcs-blue/90">
              <Link to="/membership/register">
                Become a Member
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
