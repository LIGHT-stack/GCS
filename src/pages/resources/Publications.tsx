
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import PublicationsContent from '../../components/resources/PublicationsContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft, FileText, Search, Filter } from 'lucide-react';

const Publications = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Publications | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/resources">
              <Button variant="ghost" className="flex items-center gap-2">
                <ChevronLeft className="h-5 w-5" /> Back to Resources
              </Button>
            </Link>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-gcs-blue/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-gcs-blue" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Publications</h1>
                <p className="text-lg text-gray-600">
                  Research papers, reports, and other publications by GCS and its members
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Explore publications by the Ghana Chemical Society, its members, and affiliated organizations,
                including research papers, conference proceedings, reports, and educational materials. These 
                publications showcase the research output and intellectual contributions of our community to 
                the advancement of chemical sciences.
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-3 relative">
                <input
                  type="text"
                  placeholder="Search publications..."
                  className="w-full px-5 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gcs-blue/50"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <div className="relative">
                <select className="w-full px-5 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 appearance-none">
                  <option>All Categories</option>
                  <option>Research Papers</option>
                  <option>Conference Papers</option>
                  <option>Reports</option>
                  <option>Books</option>
                </select>
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            <PublicationsContent />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Publications;
