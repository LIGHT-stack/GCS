
import React from 'react';
import { Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnershipHeader = () => {
  return (
    <section className="pt-24 pb-16 relative bg-gradient-to-b from-gcs-blue/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center mb-4 bg-gcs-blue/10 w-16 h-16 rounded-full">
              <Handshake className="h-8 w-8 text-gcs-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Partnership Programs</h1>
            <p className="text-xl text-gray-600">
              Collaborate with the Ghana Chemical Society to advance chemistry research,
              education, and innovation through our diverse partnership opportunities.
            </p>
            <div className="pt-4">
              <Link 
                to="/partnership/apply" 
                className="inline-block bg-gcs-blue text-white px-6 py-3 rounded-lg hover:bg-gcs-blue/90 transition-colors"
              >
                Apply to Become a Partner
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gcs-blue/30 to-gcs-orange/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Network</h2>
                  <p className="text-gray-800 mb-6">
                    Partner with us to contribute to the advancement of chemistry in Ghana through research, education, and industry innovation.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                      <span className="font-bold text-gcs-blue">25+</span>
                      <span className="text-xs ml-1">Years</span>
                    </div>
                    <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                      <span className="font-bold text-gcs-orange">40+</span>
                      <span className="text-xs ml-1">Partners</span>
                    </div>
                    <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                      <span className="font-bold text-green-600">100+</span>
                      <span className="text-xs ml-1">Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipHeader;
