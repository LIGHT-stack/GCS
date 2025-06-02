
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Globe, Award, Book, Users, MapPin, ExternalLink } from 'lucide-react';

const InternationalPartners = () => {
  // Update page title
  useEffect(() => {
    document.title = 'International Partners | Ghana Chemical Society - GCS';
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img 
          src="/src/assets/globe ghana.png" 
          alt="International Partnerships" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20">
          <div className="container mx-auto px-4 h-full flex items-center pt-32">
            <div className="max-w-3xl">
              <div className="mb-8">
                <Link to="/community">
                  <Button variant="ghost" className="flex items-center gap-2 bg-white/10 text-white hover:bg-white/20">
                    <ChevronLeft className="h-5 w-5" /> Back to Community
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-white">International Partnerships</h1>
              </div>
              
              <p className="text-xl text-white/90 max-w-3xl">
                Our global collaborations advancing chemical sciences across borders, fostering 
                international cooperation, and creating opportunities for Ghanaian chemists.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Mission & Vision */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gcs-blue/10 to-gcs-blue/5 rounded-xl p-8 border border-gcs-blue/20">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Global Mission</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The Ghana Chemical Society maintains strong connections with chemical societies, research institutions, 
                  and industry organizations around the world. These partnerships facilitate knowledge exchange, research 
                  collaboration, and professional development opportunities for our members while elevating 
                  Ghana's presence in the global scientific community.
                </p>
                <p>
                  Our international partnerships focus on addressing global challenges through chemistry, 
                  promoting sustainable development, and fostering cross-cultural scientific exchange. We believe that 
                  chemistry knows no borders, and through collaboration, we can achieve more for science and society.
                </p>
              </div>
            </div>
          </section>
          
          {/* Key Partners */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Key International Partners</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Partner 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-gcs-blue/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gcs-blue/10 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-gcs-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Royal Society of Chemistry</h3>
                    <p className="text-gray-500">United Kingdom</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">Partnership focused on academic exchanges, joint publications, and educational resources.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Access to research journals and databases</li>
                    <li>Joint conferences and symposia</li>
                    <li>Exchange programs for researchers</li>
                  </ul>
                  <Button variant="outline" className="flex items-center gap-2 mt-4">
                    Visit Partner <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Partner 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-gcs-blue/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gcs-orange/10 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-gcs-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">American Chemical Society</h3>
                    <p className="text-gray-500">United States</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">Collaboration on research initiatives, educational programs, and professional development.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Research funding opportunities</li>
                    <li>Professional certification programs</li>
                    <li>Student chapters and mentorship</li>
                  </ul>
                  <Button variant="outline" className="flex items-center gap-2 mt-4">
                    Visit Partner <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Partner 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-gcs-blue/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">IUPAC</h3>
                    <p className="text-gray-500">International</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">Participation in global standards setting and international chemistry initiatives.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Global nomenclature and standards</li>
                    <li>International chemistry Olympics</li>
                    <li>Worldwide educational outreach</li>
                  </ul>
                  <Button variant="outline" className="flex items-center gap-2 mt-4">
                    Visit Partner <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Partner 4 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-gcs-blue/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Federation of African Societies of Chemistry</h3>
                    <p className="text-gray-500">Pan-African</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">Regional cooperation to advance chemistry across the African continent.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Continental research networks</li>
                    <li>Policy advocacy for science in Africa</li>
                    <li>Joint African chemistry congresses</li>
                  </ul>
                  <Button variant="outline" className="flex items-center gap-2 mt-4">
                    Visit Partner <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Partner 5 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-gcs-blue/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Chemical Society of Japan</h3>
                    <p className="text-gray-500">Japan</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">Technology exchange and scientific cooperation with a focus on innovation.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Analytical instrumentation sharing</li>
                    <li>Green chemistry research initiatives</li>
                    <li>Faculty and student exchanges</li>
                  </ul>
                  <Button variant="outline" className="flex items-center gap-2 mt-4">
                    Visit Partner <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Partner 6 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:border-gcs-blue/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">European Chemical Society</h3>
                    <p className="text-gray-500">Europe</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">Comprehensive partnership covering education, research, and industry connections.</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>EU-Africa research funding programs</li>
                    <li>Collaborative curriculum development</li>
                    <li>Industry-academia partnerships</li>
                  </ul>
                  <Button variant="outline" className="flex items-center gap-2 mt-4">
                    Visit Partner <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Core Focus Areas */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Core Partnership Focus Areas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gcs-blue/10 to-gcs-blue/5 p-6 rounded-xl border border-gcs-blue/20">
                <div className="mb-4 h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  <Award className="h-6 w-6 text-gcs-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Research Excellence</h3>
                <p className="text-gray-700">
                  Collaborative research projects addressing global challenges through innovative chemistry, 
                  with a focus on sustainable development and practical applications.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gcs-orange/10 to-gcs-orange/5 p-6 rounded-xl border border-gcs-orange/20">
                <div className="mb-4 h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  <Book className="h-6 w-6 text-gcs-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3">Education & Training</h3>
                <p className="text-gray-700">
                  Educational partnerships that provide access to world-class training, curriculum development, 
                  and teaching resources for students and educators in Ghana.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl border border-green-200">
                <div className="mb-4 h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Development</h3>
                <p className="text-gray-700">
                  International networking opportunities, certifications, and career advancement 
                  pathways for chemistry professionals at all career stages.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-xl border border-purple-200">
                <div className="mb-4 h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Visibility</h3>
                <p className="text-gray-700">
                  Strategic partnerships that enhance the international recognition of Ghanaian 
                  chemical research, innovation, and scientific contribution.
                </p>
              </div>
            </div>
          </section>
          
          {/* Programs & Initiatives */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Joint Programs & Initiatives</h2>
            <p className="text-lg text-gray-700 mb-8">
              Through our international partnerships, we maintain several ongoing programs designed 
              to advance chemistry in Ghana and connect our members with global opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3">International Conference Series</h3>
                <p className="text-gray-700 mb-4">
                  Annual conferences organized in rotation with our international partners, bringing 
                  together researchers from around the world to discuss emerging topics in chemistry.
                </p>
                <Button className="bg-gcs-blue hover:bg-gcs-blue/90">Learn More</Button>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3">Global Exchange Fellowship</h3>
                <p className="text-gray-700 mb-4">
                  Opportunities for Ghanaian chemists to undertake research visits at partner institutions 
                  abroad, and for international researchers to visit Ghanaian institutions.
                </p>
                <Button className="bg-gcs-blue hover:bg-gcs-blue/90">Learn More</Button>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3">Joint Publication Series</h3>
                <p className="text-gray-700 mb-4">
                  Collaborative publication initiatives with international partners, giving Ghanaian 
                  researchers increased visibility in prestigious journals and publications.
                </p>
                <Button className="bg-gcs-blue hover:bg-gcs-blue/90">Learn More</Button>
              </div>
              
              <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3">International Student Support Program</h3>
                <p className="text-gray-700 mb-4">
                  Scholarships, travel grants, and educational opportunities for Ghanaian students 
                  pursuing advanced studies in chemistry internationally.
                </p>
                <Button className="bg-gcs-blue hover:bg-gcs-blue/90">Learn More</Button>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section>
            <div className="bg-gradient-to-r from-gcs-blue to-blue-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Join Our Global Network</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                  Whether you're a researcher, student, educator, or industry professional, 
                  our international partnerships offer valuable opportunities for collaboration and growth.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Become a Member
                  </Button>
                  <Button size="lg" className="bg-white text-gcs-blue hover:bg-white/90">
                    Contact Partnership Office
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default InternationalPartners;
