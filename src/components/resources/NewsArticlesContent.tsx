
import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const NewsArticlesContent = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Latest News & Articles</h2>
          <p className="text-gray-600">Stay updated with the latest chemistry news, research breakthroughs, and GCS activities.</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-sm">
            <button className="px-3 py-1 rounded-full bg-gcs-blue text-white">All</button>
            <button className="px-3 py-1 rounded-full hover:bg-gray-100">News</button>
            <button className="px-3 py-1 rounded-full hover:bg-gray-100">Research</button>
            <button className="px-3 py-1 rounded-full hover:bg-gray-100">Events</button>
            <button className="px-3 py-1 rounded-full hover:bg-gray-100">Opinions</button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <div key={index} className="flex flex-col bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className={`px-2 py-0.5 rounded-full mr-2 ${getNewsTypeStyle(item.type)}`}>
                    {item.type}
                  </span>
                  <span className="flex items-center mr-3">
                    <Calendar size={12} className="mr-1" />
                    {item.date}
                  </span>
                  <span className="flex items-center">
                    <User size={12} className="mr-1" />
                    {item.author}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="mt-auto text-gcs-blue text-sm font-medium flex items-center hover:text-gcs-blue/80">
                  Read more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="btn-primary">Load More Articles</button>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Popular Topics</h3>
        <div className="flex flex-wrap gap-3">
          {['Analytical Methods', 'Green Chemistry', 'Medicinal Chemistry', 'Environmental Science', 'Chemical Education', 'Industrial Chemistry', 'Biochemistry', 'Polymer Science', 'Electrochemistry', 'Inorganic Chemistry'].map((tag, index) => (
            <span key={index} className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm cursor-pointer">
              <Tag size={14} className="mr-1.5 text-gcs-blue" />
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

// Sample news data
const newsData = [
  {
    title: "GCS Hosts Annual Chemistry Conference in Accra",
    excerpt: "The Ghana Chemical Society successfully hosted its annual conference, bringing together scientists from across Africa to discuss latest research.",
    author: "GCS Admin",
    date: "June 15, 2024",
    type: "News",
    image: "https://picsum.photos/id/1/500/300"
  },
  {
    title: "New Research on Sustainable Plastics Recycling Methods",
    excerpt: "Researchers from University of Ghana and GCS members have developed a new method for recycling plastic waste using local materials.",
    author: "Dr. Kwame Asante",
    date: "June 10, 2024",
    type: "Research",
    image: "https://picsum.photos/id/2/500/300"
  },
  {
    title: "The Future of Green Chemistry in Ghana's Mining Sector",
    excerpt: "An opinion piece on how green chemistry principles can transform Ghana's mining industry to be more sustainable and environmentally friendly.",
    author: "Prof. Elizabeth Mensa",
    date: "June 5, 2024",
    type: "Opinion",
    image: "https://picsum.photos/id/3/500/300"
  },
  {
    title: "GCS Partners with International Chemical Society",
    excerpt: "The Ghana Chemical Society has formed a strategic partnership with the International Union of Pure and Applied Chemistry (IUPAC).",
    author: "GCS Admin",
    date: "May 28, 2024",
    type: "News",
    image: "https://picsum.photos/id/4/500/300"
  },
  {
    title: "Breakthrough in Medicinal Plants Research",
    excerpt: "GCS researchers document new antimicrobial properties in indigenous plants that could lead to novel pharmaceutical developments.",
    author: "Dr. Abena Kuffour",
    date: "May 20, 2024",
    type: "Research",
    image: "https://picsum.photos/id/5/500/300"
  },
  {
    title: "Chemistry Education in Ghana: Challenges and Opportunities",
    excerpt: "An analysis of the current state of chemistry education in Ghanaian schools and universities, with recommendations for improvement.",
    author: "Dr. James Owusu",
    date: "May 15, 2024",
    type: "Opinion",
    image: "https://picsum.photos/id/6/500/300"
  }
];

// Helper function for news type styling
const getNewsTypeStyle = (type: string) => {
  switch (type) {
    case 'News':
      return 'bg-blue-100 text-blue-800';
    case 'Research':
      return 'bg-green-100 text-green-800';
    case 'Opinion':
      return 'bg-amber-100 text-amber-800';
    case 'Event':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default NewsArticlesContent;
