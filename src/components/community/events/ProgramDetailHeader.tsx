
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

/**
 * ProgramDetailHeader Component
 * 
 * Displays the header section for a program detail page
 * 
 * @param {object} props - Component props
 * @param {object} props.program - Program data
 * @returns {JSX.Element} The rendered program header
 */
interface ProgramDetailHeaderProps {
  program: {
    title: string;
    description: string;
    image: string;
    color: string;
  };
}

const ProgramDetailHeader: React.FC<ProgramDetailHeaderProps> = ({ program }) => {
  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'orange': return 'bg-orange-500';
      case 'green': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="relative h-60 md:h-80 rounded-xl overflow-hidden mb-8 shadow-lg group">
      <img 
        src={program.image} 
        alt={program.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
        <div className="p-8 w-full">
          <div className="flex items-center mb-2">
            <Badge className={`${getBadgeColor(program.color)} mr-2`}>
              GCS Program
            </Badge>
            <div className="flex items-center text-white/80 text-sm">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              <span>Ongoing Program</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{program.title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">{program.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailHeader;
