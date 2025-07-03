
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated molecules and elements - with adjusted z-index and opacity */}
      <div className="absolute top-1/4 left-1/5 w-24 h-24 rounded-full border-4 border-gcs-blue/20 animate-spin-slow"></div>
      <div className="absolute top-2/3 right-1/4 w-16 h-16 rounded-full border-2 border-gcs-orange/15 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full border border-gcs-blue/10 animate-pulse-slow"></div>
      
      {/* DNA structure */}
      <div className="absolute top-1/4 right-1/4 opacity-5">
        <div className="w-40 h-1 bg-gcs-blue rounded-full transform rotate-45 animate-float"></div>
        <div className="w-40 h-1 bg-gcs-orange rounded-full transform -rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-40 h-1 bg-gcs-blue rounded-full transform rotate-45 translate-y-6 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="w-40 h-1 bg-gcs-orange rounded-full transform -rotate-45 translate-y-6 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="w-40 h-1 bg-gcs-blue rounded-full transform rotate-45 translate-y-12 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="w-40 h-1 bg-gcs-orange rounded-full transform -rotate-45 translate-y-12 animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Chemical formulas - kept since they're animated */}
      <div className="absolute top-1/3 left-1/6 text-7xl font-bold text-gcs-blue/5 animate-float">H₂O</div>
      <div className="absolute bottom-1/4 right-1/6 text-6xl font-bold text-gcs-orange/5 animate-float">C₆H₁₂O₆</div>
      
      {/* Benzene ring - kept since it's animated */}
      <div className="absolute top-2/3 left-1/4 w-24 h-24 opacity-5 animate-spin-slow" style={{ animationDuration: '20s' }}>
        <div className="absolute w-full h-full border border-gcs-orange/20 rounded-full"></div>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-gcs-orange/30 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute top-1/4 right-0 w-2 h-2 bg-gcs-orange/30 rounded-full transform translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-gcs-orange/30 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-gcs-orange/30 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-gcs-orange/30 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute top-1/4 left-0 w-2 h-2 bg-gcs-orange/30 rounded-full transform translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
