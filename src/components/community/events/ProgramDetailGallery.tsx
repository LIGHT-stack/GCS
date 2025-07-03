
import React from 'react';
import { Image } from 'lucide-react';

/**
 * ProgramDetailGallery Component
 * 
 * Displays the gallery tab content for a program
 * 
 * @returns {JSX.Element} The rendered gallery section
 */
const ProgramDetailGallery: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Program Gallery</h2>
      
      <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-200 rounded-lg text-center bg-gray-50">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <Image className="h-10 w-10 text-gray-400" />
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
    </>
  );
};

export default ProgramDetailGallery;
