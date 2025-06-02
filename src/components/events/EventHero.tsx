import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft } from 'lucide-react';

interface EventHeroProps {
  name: string;
  description: string;
  image: string;
  type: string;
}

export const EventHero: React.FC<EventHeroProps> = ({
  name,
  description,
  image,
  type,
}) => {
  return (
    <div className="relative h-[40vh] min-h-[300px]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
      <img 
        src={image} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
          <div className="mb-4">
            <Link to="/community/events-programs">
              <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Events
              </Button>
            </Link>
          </div>
          
          <Badge className="mb-3 bg-gcs-blue hover:bg-gcs-blue/80">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {name}
          </h1>
          <p className="text-white/90 max-w-3xl text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}; 