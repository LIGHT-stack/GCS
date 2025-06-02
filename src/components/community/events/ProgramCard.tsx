
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Program item interface defining a single program item
 */
interface ProgramItem {
  name: string;
  colorClass: string;
}

/**
 * ProgramCard Component
 * 
 * Displays a card with program information including a title and list of items
 * 
 * @param {string} title - The title of the program
 * @param {ProgramItem[]} items - List of program items
 * @returns {JSX.Element} The rendered ProgramCard component
 */
interface ProgramCardProps {
  title: string;
  items: ProgramItem[];
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, items }) => {
  return (
    <Card className="bg-white hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className={`h-5 w-5 rounded-full ${item.colorClass} flex items-center justify-center mr-2 mt-0.5`}>
                <div className={`h-2 w-2 rounded-full ${item.colorClass.replace('/10', '')}`}></div>
              </div>
              <span className="text-gray-700">{item.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
