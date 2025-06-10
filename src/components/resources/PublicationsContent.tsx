
import React from 'react';
import { Search, FileText, Download, BookOpen, ArrowRight } from 'lucide-react';

const PublicationsContent = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">GCS Publications</h2>
          <p className="text-gray-600">Browse our collection of newsletters, reports, academic papers, and official publications.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gcs-blue text-white rounded-md">All</button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-md">Newsletters</button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-md">Reports</button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-md">Papers</button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search publications..." 
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gcs-blue focus:border-transparent w-full md:w-auto"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicationData.map((pub, index) => (
            <div 
              key={index} 
              className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`h-2 ${getPublicationTypeColor(pub.type)}`}></div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${getPublicationTypeStyle(pub.type)}`}>
                    {pub.type}
                  </span>
                  <span className="text-xs text-gray-500">{pub.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{pub.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{pub.description}</p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={pub.link} 
                    className="inline-flex items-center text-gcs-blue hover:text-gcs-blue/80 text-sm font-medium"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-500 hover:text-gcs-blue">
                      <BookOpen size={18} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-gcs-blue">
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="btn-primary inline-flex items-center">
            View All Publications
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-gcs-blue mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Annual Reports</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Access our annual reports documenting GCS activities, achievements, and financial statements.
          </p>
          <ul className="space-y-3">
            {Array.from({length: 3}).map((_, index) => (
              <li key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md">
                <span className="font-medium text-gray-700">Annual Report {2024 - index}</span>
                <Download className="w-5 h-5 text-gcs-blue cursor-pointer" />
              </li>
            ))}
          </ul>
          <a 
            href="#" 
            className="mt-4 inline-flex items-center text-gcs-blue hover:text-gcs-blue/80 text-sm font-medium"
          >
            View all reports
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-gcs-orange mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">GCS Newsletters</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Stay updated with our quarterly newsletters featuring GCS news, events, and member achievements.
          </p>
          <ul className="space-y-3">
            {['Q2 2024 Newsletter', 'Q1 2024 Newsletter', 'Q4 2023 Newsletter'].map((item, index) => (
              <li key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md">
                <span className="font-medium text-gray-700">{item}</span>
                <Download className="w-5 h-5 text-gcs-orange cursor-pointer" />
              </li>
            ))}
          </ul>
          <a 
            href="#" 
            className="mt-4 inline-flex items-center text-gcs-orange hover:text-gcs-orange/80 text-sm font-medium"
          >
            View all newsletters
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

// Sample publication data
const publicationData = [
  {
    title: "Chemistry Education in Ghana: Current State and Future Directions",
    description: "A comprehensive report on the status of chemistry education in Ghanaian institutions with recommendations for improvement.",
    type: "Report",
    date: "June 2024",
    link: "#"
  },
  {
    title: "GCS Quarterly Newsletter - Q2 2024",
    description: "The latest quarterly newsletter featuring society updates, member achievements, and upcoming events.",
    type: "Newsletter",
    date: "June 2024",
    link: "#"
  },
  {
    title: "Advances in Chemical Analysis of Ghanaian Medicinal Plants",
    description: "A peer-reviewed paper documenting recent advances in analytical techniques applied to indigenous medicinal plants.",
    type: "Paper",
    date: "May 2024",
    link: "#"
  },
  {
    title: "Environmental Impact Assessment of Chemical Industries in Ghana",
    description: "A detailed report analyzing the environmental footprint of chemical industries operating in Ghana.",
    type: "Report",
    date: "April 2024",
    link: "#"
  },
  {
    title: "GCS Position Paper on Chemical Safety Standards",
    description: "An official position paper outlining GCS recommendations for improved chemical safety regulations in Ghana.",
    type: "Policy",
    date: "March 2024",
    link: "#"
  },
  {
    title: "GCS Quarterly Newsletter - Q1 2024",
    description: "Society updates, feature articles, and member spotlights from the first quarter of 2024.",
    type: "Newsletter",
    date: "March 2024",
    link: "#"
  }
];

// Helper functions for publication styling
const getPublicationTypeStyle = (type: string) => {
  switch (type) {
    case 'Newsletter':
      return 'bg-blue-100 text-blue-800';
    case 'Report':
      return 'bg-green-100 text-green-800';
    case 'Paper':
      return 'bg-purple-100 text-purple-800';
    case 'Policy':
      return 'bg-amber-100 text-amber-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getPublicationTypeColor = (type: string) => {
  switch (type) {
    case 'Newsletter':
      return 'bg-blue-500';
    case 'Report':
      return 'bg-green-500';
    case 'Paper':
      return 'bg-purple-500';
    case 'Policy':
      return 'bg-amber-500';
    default:
      return 'bg-gray-500';
  }
};

export default PublicationsContent;
