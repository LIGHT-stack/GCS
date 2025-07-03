
import React from 'react';
import { Card, CardContent, CardImage, CardTitle } from "@/components/ui/card";
import { Landmark, Building } from 'lucide-react';

interface SponsorProps {
  sponsors: {
    name: string;
    logo: string;
  }[];
}

const EventSponsors: React.FC<SponsorProps> = ({ sponsors }) => {
  return (
    <div className="my-8">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <Landmark className="h-5 w-5 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold">Conference Sponsors</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group border-gray-200"
          >
            <CardImage src={sponsor.logo} alt={`${sponsor.name} logo`} />
            <CardContent className="p-4 flex items-center">
              <Building className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
              <CardTitle className="text-base font-medium text-gray-800 line-clamp-2 leading-tight">
                {sponsor.name}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventSponsors;
