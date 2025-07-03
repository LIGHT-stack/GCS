
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface PartnerItem {
  title: string;
  description: string;
}

interface PartnershipCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  items: PartnerItem[];
}

const PartnershipCard = ({ 
  title, 
  description, 
  Icon, 
  iconColor, 
  iconBgColor, 
  items 
}: PartnershipCardProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className={`h-5 w-5 rounded-full ${iconBgColor} flex items-center justify-center mr-3 mt-0.5`}>
                <div className={`h-2 w-2 rounded-full ${iconColor.replace('text-', 'bg-')}`}></div>
              </div>
              <div>
                <span className="font-medium">{item.title}</span>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PartnershipCard;
