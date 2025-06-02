
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, CheckCircle } from 'lucide-react';

const MissionVisionSection = () => {
  const coreValues = [
    "Professionalism", 
    "Integrity", 
    "Creativity and Innovation", 
    "Accountability", 
    "Critical Thinking", 
    "Passion for Chemistry"
  ];

  return (
    <section id="mission-vision" className="py-16">
      <h2 className="section-title mb-8">Mission &amp; Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-gcs-blue/10 flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-gcs-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg">
              Our vision is to create a world where chemistry practitioners, in academia and industry, 
              achieve their full potential to contribute to advancing scientific knowledge locally and globally.
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-gcs-orange/10 flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-gcs-orange" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg">
              To promote professionalism and chemical education through knowledge dissemination of research 
              and innovation and collaboration with chemical industries and government institutions to enhance 
              the development and general well-being of citizens.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Values</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {coreValues.map((value, index) => (
          <div key={index} className="flex items-center p-4 bg-white rounded-md shadow-sm">
            <CheckCircle className="h-5 w-5 text-gcs-blue mr-3 flex-shrink-0" />
            <span className="text-gray-700 font-medium">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSection;
