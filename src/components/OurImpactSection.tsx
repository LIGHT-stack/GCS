
import React from 'react';
import { CheckCircle2, Users, School, Building2, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-12">
      <div className="section-container">
        <h2 className="section-title">Our Impact</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
          The Ghana Chemical Society is making significant contributions to science, education, and industry across the nation and beyond through our various initiatives and programs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-gcs-blue/10 rounded-full flex items-center justify-center mb-5">
              <School className="w-7 h-7 text-gcs-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3">Educational Excellence</h3>
            <p className="text-gray-600 mb-3">
              We've trained over 500 chemistry teachers, improving educational standards in more than 200 schools across Ghana.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gcs-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Teacher professional development programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gcs-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Laboratory equipment donations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gcs-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Student mentorship opportunities</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gcs-orange/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-gcs-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
            <p className="text-gray-600 mb-4">
              Our outreach programs have directly benefited over 50 communities, providing solutions for clean water, waste management, and environmental conservation.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gcs-orange mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Chemical safety workshops</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gcs-orange mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Water quality testing initiatives</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gcs-orange mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Environmental health campaigns</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Industry Innovation</h3>
            <p className="text-gray-600 mb-4">
              We've facilitated collaborations between academia and industry, resulting in 15+ innovative products and processes that address local challenges.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Industry-academia partnerships</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Technology transfer programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Product development support</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Global Collaboration</h3>
            <p className="text-gray-600 mb-4">
              Our international partnerships have connected Ghanaian chemists with global leaders, facilitating knowledge exchange and research opportunities.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">International conference participation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Exchange programs with global institutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Collaborative research projects</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Research Excellence</h3>
            <p className="text-gray-600 mb-4">
              Our members have published hundreds of research papers in respected journals, contributing to scientific advancement and addressing local problems.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Peer-reviewed journal publications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Research grants and funding</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Innovation awards and patents</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gcs-blue/10 rounded-full flex items-center justify-center mb-6">
              <School className="w-8 h-8 text-gcs-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Career Development</h3>
            <p className="text-gray-600 mb-4">
              We've created professional development and networking opportunities for hundreds of chemistry professionals at all career stages.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gcs-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Professional mentorship programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gcs-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Specialized training workshops</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gcs-blue mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Industry networking opportunities</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Join us in our mission to advance chemistry for a better Ghana and beyond. Together, we can drive innovation, education, and positive change through the power of chemical sciences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/membership?tab=register" className="btn-primary">
              Become a Member
            </Link>
            <Link to="/partnership" className="btn-accent">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;
