
import React from 'react';
import { Award } from 'lucide-react';
import { ProgramCategory } from './EventsData';
import ProgramCard from './ProgramCard';

/**
 * ProgramsSection Component
 * 
 * Displays a grid of program categories with modern styling
 * 
 * @param {ProgramCategory[]} programCategories - List of program categories to display
 * @returns {JSX.Element} The rendered ProgramsSection component
 */
interface ProgramsSectionProps {
  programCategories: ProgramCategory[];
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ programCategories }) => {
  return (
    <div className="bg-gradient-to-r from-gcs-light-blue/30 to-gcs-blue/10 rounded-xl p-6 md:p-8 shadow-md">
      <div className="flex items-center mb-6">
        <div className="bg-white/70 p-2 rounded-lg shadow-sm mr-3">
          <Award className="h-6 w-6 text-gcs-orange" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">GCS Programs</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programCategories.map((category, index) => (
          <ProgramCard 
            key={index} 
            title={category.title} 
            items={category.items} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramsSection;
