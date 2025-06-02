
import React from 'react';
import { Book, Search, Microscope } from 'lucide-react';

const ResourcesHeader = () => {
  return (
    <div className="max-w-6xl mx-auto text-center mb-12">
      <div className="inline-flex items-center justify-center p-3 bg-gcs-blue/15 rounded-full mb-6">
        <Book className="w-8 h-8 text-gcs-blue" />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 heading-contrast">GCS Resources</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
        Access our comprehensive collection of scientific journals, publications, news, and articles from the Ghana Chemical Society.
      </p>
      
      <div className="max-w-3xl mx-auto relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Search all resources..."
            className="w-full px-5 py-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gcs-blue/50 text-lg"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-lg hover:bg-gray-200 cursor-pointer">Chemistry Research</span>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-lg hover:bg-gray-200 cursor-pointer">Academic Journals</span>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-lg hover:bg-gray-200 cursor-pointer">Publications</span>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-lg hover:bg-gray-200 cursor-pointer">Newsletters</span>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHeader;
