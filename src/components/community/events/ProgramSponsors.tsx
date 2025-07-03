import React from 'react';
import { Card, CardContent, CardImage, CardTitle } from "@/components/ui/card";
import { Landmark } from 'lucide-react';

interface Sponsor {
  name: string;
  logo: string;
}

interface ProgramSponsorsProps {
  sponsors: Sponsor[];
}

const ProgramSponsors: React.FC<ProgramSponsorsProps> = ({ sponsors }) => {
  return (
    <section className="program-section p-8 md:p-10 border-b border-gray-100">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
          <Landmark className="h-5 w-5 text-gcs-blue" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Conference Sponsors</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group border-gray-200"
          >
            <CardImage src={sponsor.logo} alt={`${sponsor.name} logo`} />
            <CardContent className="p-4 flex items-center">
              <Landmark className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
              <CardTitle className="text-base font-medium text-gray-800 line-clamp-2 leading-tight">
                {sponsor.name}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProgramSponsors; 