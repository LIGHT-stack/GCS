import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AnimatedBackground from '../../components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Building, GraduationCap, Beaker, Landmark, Handshake } from 'lucide-react';

const LocalPartners = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Local Partners | Ghana Chemical Society - GCS';
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
          alt="Local Partnerships" 
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
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-white">Local Partnerships</h1>
              </div>
              
              <p className="text-xl text-white/90 max-w-3xl">
                Our collaborations within Ghana advancing chemical sciences nationally and contributing
                to the country's development through chemistry.
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
            <div className="bg-gradient-to-r from-gcs-orange/10 to-gcs-orange/5 rounded-xl p-8 border border-gcs-orange/20">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our National Mission</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The Ghana Chemical Society maintains strong partnerships with universities, research institutions, 
                  government bodies, and industry within Ghana. These collaborations form the backbone of our 
                  efforts to advance chemical sciences and technology throughout the nation.
                </p>
                <p>
                  Through these partnerships, we work to address local challenges, develop Ghanaian talent, 
                  support innovation, and contribute to national development through chemistry. Our goal is to 
                  create a thriving ecosystem for chemical sciences in Ghana that serves our society's needs.
                </p>
              </div>
            </div>
          </section>
          
          {/* Partnership Categories */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Local Partners</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Academic Partners */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-gcs-blue/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gcs-blue/10 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-gcs-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Academic Institutions</h3>
                    <p className="text-gray-500">Universities and research centers</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                    </div>
                    <div>
                      <span className="font-medium block">University of Ghana</span>
                      <p className="text-gray-600 text-sm">Research collaboration and student development programs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Kwame Nkrumah University of Science and Technology</span>
                      <p className="text-gray-600 text-sm">Joint research initiatives and laboratory resources</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                    </div>
                    <div>
                      <span className="font-medium block">University of Cape Coast</span>
                      <p className="text-gray-600 text-sm">Chemistry education and curriculum development</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="w-full bg-gcs-blue hover:bg-gcs-blue/90">View All Academic Partners</Button>
              </div>
              
              {/* Industry Partners */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-gcs-orange/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gcs-orange/10 flex items-center justify-center">
                    <Building className="h-8 w-8 text-gcs-orange" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Industry Partners</h3>
                    <p className="text-gray-500">Corporate and manufacturing collaborations</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Ghana Pharmaceutical Association</span>
                      <p className="text-gray-600 text-sm">Industry standards and professional development</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Mining Industry Alliance</span>
                      <p className="text-gray-600 text-sm">Environmental chemistry and sustainable practices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Agricultural Chemical Suppliers</span>
                      <p className="text-gray-600 text-sm">Food security and agricultural chemistry innovation</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="w-full bg-gcs-orange hover:bg-gcs-orange/90">View All Industry Partners</Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Government Partners */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-green-500/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <Landmark className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Government Bodies</h3>
                    <p className="text-gray-500">Public sector partnerships</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Ministry of Environment, Science, Technology & Innovation</span>
                      <p className="text-gray-600 text-sm">Policy development and scientific advisement</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Ghana Standards Authority</span>
                      <p className="text-gray-600 text-sm">Chemical safety standards and quality control</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Environmental Protection Agency</span>
                      <p className="text-gray-600 text-sm">Environmental chemistry and pollution control</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="w-full bg-green-600 hover:bg-green-700">View All Government Partners</Button>
              </div>
              
              {/* Research Projects */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-purple-500/50 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Beaker className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Research Projects</h3>
                    <p className="text-gray-500">Ongoing collaborative initiatives</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Ghana Water Quality Initiative</span>
                      <p className="text-gray-600 text-sm">Multi-institutional research on water purification</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Medicinal Plants Research</span>
                      <p className="text-gray-600 text-sm">Traditional medicine and pharmaceutical development</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1">
                      <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    </div>
                    <div>
                      <span className="font-medium block">Sustainable Chemistry Alliance</span>
                      <p className="text-gray-600 text-sm">Green chemistry practices for industrial applications</p>
                    </div>
                  </li>
                </ul>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">View All Research Projects</Button>
              </div>
            </div>
          </section>
          
          {/* Strategic Focus Areas */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Strategic Focus Areas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gcs-orange">
                <h3 className="text-xl font-semibold mb-3 text-gcs-orange">Education & Training</h3>
                <p className="mb-4">Developing chemistry education and training programs at all levels</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Curriculum development with universities</li>
                  <li>Teacher training programs</li>
                  <li>Student mentorship initiatives</li>
                  <li>Laboratory equipment sharing and maintenance</li>
                  <li>Educational resource development</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gcs-blue">
                <h3 className="text-xl font-semibold mb-3 text-gcs-blue">Research & Development</h3>
                <p className="mb-4">Supporting chemical research addressing local challenges</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Joint research projects with universities</li>
                  <li>Shared laboratory facilities and equipment</li>
                  <li>Research funding initiatives</li>
                  <li>Publication support and visibility</li>
                  <li>Cross-institutional collaboration</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600">
                <h3 className="text-xl font-semibold mb-3 text-green-600">Industry & Innovation</h3>
                <p className="mb-4">Bridging academia and industry to promote chemical innovation</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Industry-academia collaborations</li>
                  <li>Technology transfer programs</li>
                  <li>Start-up incubation support</li>
                  <li>Internship and placement programs</li>
                  <li>Professional development for industry chemists</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">Policy & Standards</h3>
                <p className="mb-4">Developing chemical standards and informing policy</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Advisory role to government bodies</li>
                  <li>Chemical safety standards development</li>
                  <li>Regulatory framework consultation</li>
                  <li>Environmental impact assessment</li>
                  <li>Science policy advocacy</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Success Stories */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Partnership Success Stories</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our local partnerships have led to numerous successful initiatives that have made 
              significant impacts in Ghana. Here are some of our proudest achievements:
            </p>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gcs-blue h-40 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gcs-blue to-gcs-blue/70 flex items-center justify-center">
                      <Handshake className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Water Quality Monitoring Network</h3>
                    <p className="mb-4 text-gray-700">
                      A collaboration with the Ghana Water Company and three universities established 
                      a nationwide network for monitoring and reporting on water quality, leading to 
                      improved water safety across Ghana.
                    </p>
                    <Button variant="outline" className="text-gcs-blue border-gcs-blue hover:bg-gcs-blue/10">
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gcs-orange h-40 md:h-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gcs-orange to-gcs-orange/70 flex items-center justify-center">
                      <Handshake className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-2">Industry Internship Program</h3>
                    <p className="mb-4 text-gray-700">
                      Our partnership with pharmaceutical and manufacturing companies has placed over 
                      200 chemistry students in valuable internships, many leading to permanent employment.
                    </p>
                    <Button variant="outline" className="text-gcs-orange border-gcs-orange hover:bg-gcs-orange/10">
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section>
            <div className="bg-gradient-to-r from-gcs-orange to-yellow-500 rounded-xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                  Join our growing network of local partners and contribute to the advancement of 
                  chemical sciences in Ghana. Together, we can create positive change through chemistry.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Learn About Partnership
                  </Button>
                  <Button size="lg" className="bg-white text-gcs-orange hover:bg-white/90">
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

export default LocalPartners;
