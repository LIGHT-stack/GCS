
import React from 'react';
import { Check } from 'lucide-react';

/**
 * ProgramDetailAbout Component
 * 
 * Displays the About tab content for a program
 * 
 * @param {object} props - Component props
 * @param {object} props.program - Program data
 * @returns {JSX.Element} The rendered about section
 */
interface ProgramDetailAboutProps {
  program: {
    longDescription: string;
  };
}

const ProgramDetailAbout: React.FC<ProgramDetailAboutProps> = ({ program }) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About the Program</h2>
      <div className="prose prose-lg max-w-none">
        <p>{program.longDescription}</p>
      </div>
      
      <div className="mt-10 bg-gradient-to-r from-gray-50 to-white rounded-lg p-6 border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold mb-4">Program Objectives</h3>
        <ul className="space-y-4">
          <ObjectiveItem text="Facilitate knowledge exchange and collaboration between researchers" />
          <ObjectiveItem text="Develop skills and expertise in chemical sciences" />
          <ObjectiveItem text="Build a strong community of chemists and chemistry enthusiasts in Ghana" />
          <ObjectiveItem text="Promote the application of chemistry in addressing societal challenges" />
        </ul>
      </div>
    </>
  );
};

/**
 * ObjectiveItem Component
 * 
 * Displays a single program objective with check icon
 * 
 * @param {object} props - Component props
 * @param {string} props.text - Objective text
 * @returns {JSX.Element} The rendered objective item
 */
const ObjectiveItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <Check className="h-3.5 w-3.5 text-green-600" />
      </div>
      <span className="text-gray-700">{text}</span>
    </li>
  );
};

export default ProgramDetailAbout;
