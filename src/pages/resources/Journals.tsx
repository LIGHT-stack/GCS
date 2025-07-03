import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
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
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gcs-blue/10 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-gcs-blue" />
            </div>
            <h1 className="text-4xl font-bold">Journals</h1>
          </div>
          
          <JournalsContent />
        </div>
      </div>
    </div>
  );
};

export default Journals;
