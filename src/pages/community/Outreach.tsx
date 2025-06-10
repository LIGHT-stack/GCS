import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import AnimatedBackground from '../../components/AnimatedBackground';
import OutreachContent from '../../components/community/OutreachContent';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Users } from 'lucide-react';

const Outreach = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Outreach & Non-Profits | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/community">
              <Button variant="ghost" className="flex items-center gap-2">
                <ChevronLeft className="h-5 w-5" /> Back to Community
              </Button>
            </Link>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Outreach & Non-Profits</h1>
                <p className="text-lg text-gray-600">
                  Our initiatives to promote chemistry education and awareness in communities
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                The Ghana Chemical Society is committed to promoting chemistry education and awareness 
                beyond academic and professional circles. Our outreach programs engage with schools, 
                communities, and non-profit organizations to highlight the importance of chemistry in 
                everyday life and inspire the next generation of chemical scientists.
              </p>
              <p>
                Through these initiatives, we aim to increase scientific literacy, promote STEM education, 
                and demonstrate the positive impact of chemistry on society and sustainable development.
              </p>
            </div>
            
            <OutreachContent />
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
            <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Volunteer Opportunities</h3>
                <p className="mb-4">Join our team of volunteers to support our outreach initiatives in schools and communities.</p>
                <Button className="bg-purple-600 hover:bg-purple-700">Volunteer with Us</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Partner with Us</h3>
                <p className="mb-4">Propose a collaboration between your organization and the Ghana Chemical Society.</p>
                <Button className="bg-purple-600 hover:bg-purple-700">Submit Partnership Proposal</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outreach;
