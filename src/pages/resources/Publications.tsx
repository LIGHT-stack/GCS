import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
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
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gcs-blue/10 flex items-center justify-center">
              <FileText className="h-8 w-8 text-gcs-blue" />
            </div>
            <h1 className="text-4xl font-bold">Publications</h1>
          </div>
          
          <PublicationsContent />
        </div>
      </div>
    </div>
  );
};

export default Publications;
