
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import JournalsContent from '../../components/resources/JournalsContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft, BookOpen, Search } from 'lucide-react';

const Journals = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Journals | Ghana Chemical Society - GCS';
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
                <BookOpen className="h-8 w-8 text-gcs-blue" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">GCS Journals</h1>
                <p className="text-lg text-gray-600">
                  Scientific journals published by the Ghana Chemical Society and affiliated organizations
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Access peer-reviewed journals published by the Ghana Chemical Society and our affiliated 
                international partners. These publications feature cutting-edge research in chemistry and 
                related fields, providing valuable resources for researchers, academics, and industry professionals.
              </p>
              <p>
                GCS members receive privileged access to these journals as part of their membership benefits.
              </p>
            </div>
            
            {/* Search Section */}
            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search journals..."
                  className="w-full px-5 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gcs-blue/50"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200">Organic Chemistry</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200">Analytical Methods</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200">Materials Science</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200">Environmental Chemistry</span>
                </div>
              </div>
            </div>
            
            <JournalsContent />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Journals;
