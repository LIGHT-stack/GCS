
import React from 'react';
import { UserPlus, Shield, Award } from 'lucide-react';

const MembershipHeader = () => {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-gradient-to-br from-gcs-blue/10 to-gcs-orange/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/50">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Join the Ghana Chemical Society
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gcs-blue to-gcs-orange mx-auto mb-6"></div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Become part of Ghana's premier community of chemistry professionals, researchers, 
            educators, and enthusiasts. Gain access to exclusive resources, networking opportunities, 
            and contribute to advancing chemical sciences in Ghana.
          </p>
          
          <div className="flex justify-center gap-6 mt-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gcs-blue/10">
              <UserPlus className="w-8 h-8 text-gcs-blue" />
            </div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gcs-orange/10">
              <Shield className="w-8 h-8 text-gcs-orange" />
            </div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gcs-blue/10">
              <Award className="w-8 h-8 text-gcs-blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipHeader;
