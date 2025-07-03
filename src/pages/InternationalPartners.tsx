import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ExternalLink } from 'lucide-react';

const InternationalPartners = () => {
  useEffect(() => {
    document.title = 'International Partners | Ghana Chemical Society - GCS';
  }, []);

  const partners = [
    {
      name: "Federation of African Societies of Chemistry (FASC)",
      logo: "/src/assets/International Partners/Federation of African Societies of Chemistry - FASC.jpg",
      description: "A continental organization representing chemical societies across Africa, promoting collaboration and advancement of chemistry in the region.",
      website: "https://www.fasc-africa.org"
    },
    {
      name: "Royal Society of Chemistry (RSC)",
      logo: "/src/assets/International Partners/Royal Society of Chemistry - RSC.jpg",
      description: "The world's leading chemistry community, advancing excellence in the chemical sciences.",
      website: "https://www.rsc.org"
    },
    {
      name: "Commonwealth Chemistry",
      logo: "/src/assets/International Partners/Commonwealth Chemistry.jpg",
      description: "A network of chemical societies and institutions across the Commonwealth, fostering international collaboration in chemical sciences.",
      website: "https://www.commonwealthchemistry.org"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">International Partners</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The Ghana Chemical Society collaborates with leading international organizations to promote 
            chemical sciences, facilitate knowledge exchange, and foster global partnerships.
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={() => window.open(partner.website, '_blank')}
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Benefits of Partnership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gcs-blue/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-gcs-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Access to a worldwide network of chemical societies and professionals, facilitating international collaboration and knowledge exchange.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gcs-blue/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-gcs-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research Opportunities</h3>
              <p className="text-gray-600">
                Enhanced research collaboration opportunities, joint funding possibilities, and access to international research facilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-gcs-blue/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-gcs-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
              <p className="text-gray-600">
                Access to international conferences, workshops, and training programs for professional development and capacity building.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 bg-gcs-blue text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Partnership?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We welcome opportunities to collaborate with international organizations that share our vision 
            of advancing chemical sciences in Ghana and beyond.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-gcs-blue hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InternationalPartners; 