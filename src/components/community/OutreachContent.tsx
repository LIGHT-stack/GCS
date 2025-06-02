
import React from 'react';
import { Compass, BookOpen, Heart, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OutreachContent = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Outreach & Non-Profit Initiatives</h2>
        <p className="text-gray-600">
          The Ghana Chemical Society is committed to promoting chemistry education, public awareness, 
          and community development through various outreach programs and non-profit partnerships.
        </p>
      </div>

      {/* Educational Outreach */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md">
        <div className="flex items-center mb-6">
          <BookOpen className="h-6 w-6 text-gcs-blue mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Educational Outreach</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gcs-blue/10 flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-gcs-blue" />
              </div>
              <CardTitle>School Outreach Program</CardTitle>
              <CardDescription>Bringing chemistry to classrooms</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Our volunteers visit primary and secondary schools to conduct engaging chemistry 
                demonstrations, inspire students, and support science teachers.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Interactive demonstrations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Teacher support materials</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Career guidance in chemistry</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gcs-orange/10 flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-gcs-orange" />
              </div>
              <CardTitle>Chemistry Competitions</CardTitle>
              <CardDescription>Challenging young minds</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We organize national chemistry competitions to identify and nurture talented students,
                providing opportunities for growth and recognition.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                  </div>
                  <span className="text-gray-700">National Chemistry Olympiad</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                  </div>
                  <span className="text-gray-700">Chemistry Quiz Competition</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                  </div>
                  <span className="text-gray-700">Science Fair mentorship</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <Compass className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Teacher Training</CardTitle>
              <CardDescription>Empowering educators</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We provide professional development for chemistry teachers to enhance 
                their teaching methodologies and practical laboratory skills.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Laboratory techniques workshops</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Teaching resources development</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Modern chemistry curriculum guidance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gcs-light-blue/30 p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Educational Impact</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="text-3xl font-bold text-gcs-blue mb-2">250+</div>
              <p className="text-gray-600">Schools Visited</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="text-3xl font-bold text-gcs-orange mb-2">15,000+</div>
              <p className="text-gray-600">Students Reached</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Teachers Trained</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Service */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md">
        <div className="flex items-center mb-6">
          <Heart className="h-6 w-6 text-gcs-orange mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Community Service</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Public Health Initiatives</h4>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-md shadow-sm">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-gcs-blue"></div>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Water Quality Testing Program</span>
                    <p className="text-sm text-gray-600">
                      Volunteer chemists conduct free water quality tests in rural communities, 
                      educating residents about safe water practices.
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-gcs-blue"></div>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Household Chemical Safety</span>
                    <p className="text-sm text-gray-600">
                      Workshops on safe storage and handling of common household chemicals to prevent accidents.
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-gcs-blue"></div>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Public Health Campaigns</span>
                    <p className="text-sm text-gray-600">
                      Collaboration with health authorities on chemical safety and public health awareness campaigns.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Environmental Protection</h4>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-md shadow-sm">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Clean-Up Chemistry</span>
                    <p className="text-sm text-gray-600">
                      Volunteer initiatives to manage chemical waste and teach proper disposal methods.
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Pollution Monitoring</span>
                    <p className="text-sm text-gray-600">
                      Citizen science projects to monitor air and water quality in vulnerable areas.
                    </p>
                  </div>
                </div>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <span className="font-medium block mb-1">Green Chemistry Advocacy</span>
                    <p className="text-sm text-gray-600">
                      Promoting sustainable chemical practices in industries and communities.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Non-Profit Partnerships */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md">
        <div className="flex items-center mb-6">
          <Compass className="h-6 w-6 text-purple-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Non-Profit Partnerships</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          The Ghana Chemical Society collaborates with various non-profit organizations to extend our reach 
          and impact across different sectors of society.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Health NGOs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  </div>
                  <span className="text-gray-700">Ghana Health Foundation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  </div>
                  <span className="text-gray-700">African Medical Research</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                  </div>
                  <span className="text-gray-700">Clean Water Initiative</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Educational Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">STEM Ghana Initiative</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Rural Education Access Project</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                  </div>
                  <span className="text-gray-700">Science Teachers Association</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Environmental Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Ghana Conservation Society</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Clean Coast Initiative</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Sustainable Ghana Alliance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Get Involved */}
      <div className="bg-gcs-orange/10 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Join our community outreach initiatives as a volunteer, donor, or partner organization. 
          Together, we can make a positive impact through chemistry.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="btn-primary">Become a Volunteer</a>
          <a href="#contact" className="btn-accent">Partner With Us</a>
        </div>
      </div>
    </div>
  );
};

export default OutreachContent;
