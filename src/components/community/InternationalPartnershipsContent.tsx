
import React from 'react';
import { Globe, Award, Book, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InternationalPartnershipsContent = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">International Collaborations</h2>
        <p className="text-gray-600">
          The Ghana Chemical Society has established strong partnerships with international organizations, 
          institutions, and societies to facilitate knowledge exchange, research collaboration, and professional development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gcs-blue/10 flex items-center justify-center">
              <Globe className="h-6 w-6 text-gcs-blue" />
            </div>
            <div>
              <CardTitle>Global Institutions</CardTitle>
              <CardDescription>Academic and research partnerships</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                </div>
                <div>
                  <span className="font-medium">Royal Society of Chemistry (UK)</span>
                  <p className="text-sm text-gray-600">Joint publications, conferences, and resource sharing</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                </div>
                <div>
                  <span className="font-medium">American Chemical Society (USA)</span>
                  <p className="text-sm text-gray-600">Research funding, academic exchanges, and training programs</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-gcs-blue"></div>
                </div>
                <div>
                  <span className="font-medium">International Union of Pure and Applied Chemistry</span>
                  <p className="text-sm text-gray-600">Global standards development and participation in worldwide initiatives</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gcs-orange/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-gcs-orange" />
            </div>
            <div>
              <CardTitle>Research Collaborations</CardTitle>
              <CardDescription>Joint research projects and initiatives</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                </div>
                <div>
                  <span className="font-medium">African-European Chemistry Network</span>
                  <p className="text-sm text-gray-600">Cross-continental research on sustainable chemistry solutions</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                </div>
                <div>
                  <span className="font-medium">Green Chemistry Initiative</span>
                  <p className="text-sm text-gray-600">Multinational collaboration on environmentally friendly chemical processes</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-gcs-orange"></div>
                </div>
                <div>
                  <span className="font-medium">Pharmaceutical Research Consortium</span>
                  <p className="text-sm text-gray-600">Collaborative drug discovery focusing on tropical diseases</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Book className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <CardTitle>Academic Exchange Programs</CardTitle>
              <CardDescription>Student and faculty exchange opportunities</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <div>
                  <span className="font-medium">Chemistry Without Borders</span>
                  <p className="text-sm text-gray-600">International student exchange and research placements</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <div>
                  <span className="font-medium">Faculty Development Program</span>
                  <p className="text-sm text-gray-600">Visiting professorships and teaching opportunities abroad</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <div>
                  <span className="font-medium">Virtual Collaboration Network</span>
                  <p className="text-sm text-gray-600">Remote mentorship and co-supervision across international institutions</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <CardTitle>Funding & Resources</CardTitle>
              <CardDescription>Financial and intellectual support networks</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </div>
                <div>
                  <span className="font-medium">International Research Grants</span>
                  <p className="text-sm text-gray-600">Collaborative funding opportunities for Ghanaian chemists</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </div>
                <div>
                  <span className="font-medium">Laboratory Equipment Sharing</span>
                  <p className="text-sm text-gray-600">Access to advanced instrumentation through international partnerships</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </div>
                <div>
                  <span className="font-medium">Knowledge Database Access</span>
                  <p className="text-sm text-gray-600">Shared journal subscriptions and research databases</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gcs-light-blue/30 p-8 rounded-lg mt-12">
        <h3 className="text-xl font-semibold mb-4 text-center">Interested in International Collaboration?</h3>
        <p className="text-center mb-6">We're always looking to expand our global network of partners and collaborators.</p>
        <div className="flex justify-center">
          <a href="#contact" className="btn-primary">Contact Us for Partnership</a>
        </div>
      </div>
    </div>
  );
};

export default InternationalPartnershipsContent;
