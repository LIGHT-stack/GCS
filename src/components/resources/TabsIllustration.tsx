
import React from 'react';

/**
 * TabsIllustration Component
 * 
 * Visual illustration that appears above the tabs content
 * 
 * @returns {JSX.Element} The rendered TabsIllustration component
 */
const TabsIllustration: React.FC = () => {
  return (
    <div className="mb-10 hidden md:block">
      <div className="relative h-40 bg-gradient-to-r from-gcs-blue/10 to-gcs-orange/10 rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-5 gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`h-24 w-16 ${i % 2 === 0 ? 'bg-gcs-blue/20' : 'bg-gcs-orange/20'} rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform`}
              >
                <div className={`text-3xl font-bold ${i % 2 === 0 ? 'text-gcs-blue' : 'text-gcs-orange'} opacity-50`}>
                  {i % 2 === 0 ? 'J' : 'GCS'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsIllustration;
