
import React from 'react';
import { Users, Globe, Building, Handshake } from 'lucide-react';

const CommunityHeader = () => {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-gradient-to-br from-gcs-orange/10 to-gcs-blue/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/50">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            GCS Community Network
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gcs-orange to-gcs-blue mx-auto mb-6"></div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Connect with chemists, educators, researchers, and industry professionals through our 
            global network of partnerships, events, and outreach initiatives. Together, we're 
            advancing chemical sciences and creating positive change in Ghana and beyond.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gcs-blue/10 transition-all hover:scale-110">
              <Globe className="w-8 h-8 text-gcs-blue" />
            </div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gcs-orange/10 transition-all hover:scale-110">
              <Building className="w-8 h-8 text-gcs-orange" />
            </div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gcs-blue/10 transition-all hover:scale-110">
              <Users className="w-8 h-8 text-gcs-blue" />
            </div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gcs-orange/10 transition-all hover:scale-110">
              <Handshake className="w-8 h-8 text-gcs-orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;
