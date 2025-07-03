
import React from 'react';
import { GraduationCap, Beaker, Building } from 'lucide-react';

const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="py-12 bg-gcs-light-blue/20">
      <div className="section-container">
        <h2 className="section-title">Programs Overview</h2>
        <p className="text-gray-600 max-w-2xl mb-10">We run various initiatives, research projects, conferences, training workshops, and educational outreach programs to advance chemistry in Ghana and beyond.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Research Programs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
            <div className="h-2 bg-gcs-blue"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-gcs-blue/10 flex items-center justify-center mb-4">
                <Beaker className="h-6 w-6 text-gcs-blue" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Research Initiatives</h3>
              <p className="text-gray-600 mb-4">
                Collaborative research programs addressing Ghana's most pressing challenges through chemical innovations.
              </p>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Clean Water Technologies</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Pharmaceutical Research</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Agricultural Chemistry</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Natural Products</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Materials Engineering</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Computational Chemistry</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Chemical Education</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Environmental Science</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Education Programs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-2 bg-gcs-orange"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-gcs-orange/10 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-gcs-orange" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Educational Outreach</h3>
              <p className="text-gray-600 mb-4">
                Programs designed to inspire the next generation of chemists and improve chemistry education across Ghana.
              </p>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                  </div>
                  <span className="text-gray-700">School Chemistry Clubs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                  </div>
                  <span className="text-gray-700">Teacher Training Workshops</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                  </div>
                  <span className="text-gray-700">Chemical Safety Outreach</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                  </div>
                  <span className="text-gray-700">Chemical Education</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Industry Collaboration */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-2 bg-green-500"></div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-green-600" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Industry Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Collaborating with industries to apply chemical innovations and improve manufacturing processes.
              </p>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Industrial Consultancy</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Waste Management Solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Quality Control Training</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Hands-on Skill Training Workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-md p-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-gcs-blue mb-2">15+</div>
              <p className="text-gray-600">Active Research Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gcs-orange mb-2">50+</div>
              <p className="text-gray-600">Educational Workshops Per Year</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <p className="text-gray-600">Industry Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
