
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import NewsArticlesContent from '../../components/resources/NewsArticlesContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Newspaper } from 'lucide-react';

const NewsArticles = () => {
  // Update page title
  useEffect(() => {
    document.title = 'News & Articles | Ghana Chemical Society - GCS';
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
              <div className="w-16 h-16 rounded-full bg-gcs-orange/10 flex items-center justify-center">
                <Newspaper className="h-8 w-8 text-gcs-orange" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">News & Articles</h1>
                <p className="text-lg text-gray-600">
                  Latest news, updates, and articles from GCS and the chemistry community
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Stay informed with the latest news, developments, and articles from the Ghana Chemical Society,
                our members, and affiliated partners worldwide. Our curated content highlights important 
                breakthroughs, events, achievements, and discussions relevant to the chemical sciences community.
              </p>
            </div>
            
            {/* Featured News */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured News</h2>
              <div className="relative rounded-xl overflow-hidden h-80">
                <img 
                  src="/lovable-uploads/3b39f562-df8b-4c69-98c1-e01522abf79f.png" 
                  alt="GCS Annual Conference Announcement" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gcs-orange text-white text-sm font-medium rounded-full mb-3">
                      Announcement
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">GCS Annual Conference 2025 Announced</h3>
                    <p className="text-white/90 mb-4">
                      The Ghana Chemical Society announces its 2025 Annual Conference focused on "Chemistry for Sustainable Development."
                    </p>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">Read More</Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Latest News */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Latest News & Articles</h2>
              <NewsArticlesContent />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsArticles;
