
import React from 'react';
import { Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ProgramDetailTeam Component
 * 
 * Displays the coordinators/team tab content for a program
 * 
 * @param {object} props - Component props
 * @param {Array} props.coordinators - List of program coordinators
 * @returns {JSX.Element} The rendered team section
 */
interface ProgramDetailTeamProps {
  coordinators: Array<{
    name: string;
    title: string;
    institution: string;
  }>;
}

const ProgramDetailTeam: React.FC<ProgramDetailTeamProps> = ({ coordinators }) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Program Coordinators</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coordinators.map((coordinator, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-gcs-blue/30 hover:shadow-md transition-all"
          >
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gcs-blue/20 to-gcs-blue/5 flex items-center justify-center border border-gcs-blue/20">
              <Users className="h-8 w-8 text-gcs-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{coordinator.name}</h3>
              <p className="text-gcs-blue font-medium">{coordinator.title}</p>
              <p className="text-gray-500 text-sm">{coordinator.institution}</p>
              <Button variant="ghost" size="sm" className="mt-2 text-xs px-0 h-auto flex items-center">
                View Profile <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Interested in Contributing?</h3>
        <p className="text-gray-600 mb-4">
          We're always looking for experts to contribute to our programs. 
          If you're interested in joining our team, please get in touch.
        </p>
        <Button>Contact Program Leads</Button>
      </div>
    </>
  );
};

export default ProgramDetailTeam;
