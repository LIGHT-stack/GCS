
import React from 'react';
import { Eye, Target, CheckCircle, Award } from 'lucide-react';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Vision & Mission</h2>
            <p className="text-gray-600 mb-8">
              The Ghana Chemical Society is dedicated to advancing the field of chemistry and its applications for the betterment of society and the environment.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gcs-blue/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-gcs-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading scientific society in Ghana, championing excellence in chemistry for sustainable development and improved quality of life.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-gcs-orange/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-gcs-orange" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
                  <p className="text-gray-600">
                    To promote the advancement and understanding of chemistry through research, education, and applications that address national challenges and create opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Our Core Values</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gcs-blue mr-2 mt-0.5" />
                  <span className="text-gray-700">Scientific Excellence</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gcs-blue mr-2 mt-0.5" />
                  <span className="text-gray-700">Innovation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gcs-blue mr-2 mt-0.5" />
                  <span className="text-gray-700">Collaboration</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gcs-blue mr-2 mt-0.5" />
                  <span className="text-gray-700">Integrity</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gcs-blue mr-2 mt-0.5" />
                  <span className="text-gray-700">Social Responsibility</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gcs-blue mr-2 mt-0.5" />
                  <span className="text-gray-700">Sustainability</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gcs-light-blue/30 rounded-lg p-8 relative z-10 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <Award className="h-6 w-6 text-gcs-blue mr-2" />
                Our Impact
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Research Excellence</h4>
                  <p className="text-gray-600 text-sm">
                    Supporting groundbreaking research that addresses Ghana's unique challenges in areas such as water purification, sustainable agriculture, and natural product chemistry.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Education and Workforce Development</h4>
                  <p className="text-gray-600 text-sm">
                    Training the next generation of chemists through workshops, mentorship programs, and curriculum development initiatives for schools and universities.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Industrial Transformation</h4>
                  <p className="text-gray-600 text-sm">
                    Working with industry partners to improve chemical processes, enhance product quality, and implement environmentally friendly manufacturing practices.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-gray-800 mb-2">Policy and Advocacy</h4>
                  <p className="text-gray-600 text-sm">
                    Advising government bodies on science policy, chemical safety regulations, and sustainable development initiatives based on scientific evidence.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 right-1/2 w-24 h-24 bg-gcs-blue/5 rounded-full animate-pulse-slow" style={{ zIndex: -1 }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gcs-orange/5 rounded-full animate-float" style={{ zIndex: -1 }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
