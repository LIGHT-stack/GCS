
import React from 'react';
import { Book, ArrowRight, Search } from 'lucide-react';

const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="section-title">Publications</h2>
            <p className="text-gray-600 max-w-2xl">Discover the latest research, journals, and reports from our community of scientists and researchers.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search publications..." 
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gcs-blue focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicationData.map((pub, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-3 ${pub.category === 'Journal' ? 'bg-gcs-blue' : pub.category === 'Report' ? 'bg-gcs-orange' : 'bg-green-500'}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    pub.category === 'Journal' ? 'bg-gcs-blue/10 text-gcs-blue' : 
                    pub.category === 'Report' ? 'bg-gcs-orange/10 text-gcs-orange' : 
                    'bg-green-100 text-green-600'
                  }`}>
                    {pub.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">{pub.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{pub.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{pub.authors}</p>
                
                <a 
                  href={pub.link} 
                  className="inline-flex items-center text-gcs-blue hover:text-gcs-blue/80 text-sm font-medium"
                >
                  Read Full Paper
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-primary inline-flex items-center">
            View All Publications
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Sample publication data
const publicationData = [
  {
    title: "Sustainable Chemical Processes for Cocoa Processing in Ghana",
    authors: "Kwame Ansah, Elizabeth Owusu, James Mensah",
    category: "Journal",
    date: "May 2023",
    link: "#"
  },
  {
    title: "Evaluation of Water Quality in the Volta River Basin",
    authors: "Abena Mensah, David Agyei",
    category: "Report",
    date: "March 2023",
    link: "#"
  },
  {
    title: "Green Chemistry Approaches to Plastic Waste Management",
    authors: "John Osei, Fatima Ibrahim",
    category: "Research",
    date: "January 2023",
    link: "#"
  },
  {
    title: "Analysis of Heavy Metal Contamination in Urban Soils",
    authors: "Grace Adu, Michael Tetteh, Samuel Boateng",
    category: "Journal",
    date: "November 2022",
    link: "#"
  },
  {
    title: "Chemical Innovations in Ghana's Agricultural Sector",
    authors: "Patricia Nyame, Emmanuel Darko",
    category: "Report",
    date: "October 2022",
    link: "#"
  },
  {
    title: "Pharmaceutical Compounds from Indigenous Ghanaian Plants",
    authors: "Victoria Asare, Daniel Mensah",
    category: "Research",
    date: "August 2022",
    link: "#"
  }
];

export default PublicationsSection;
