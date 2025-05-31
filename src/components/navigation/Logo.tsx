
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-4">
      <div className="h-28 w-28 rounded-full border border-white overflow-hidden flex items-center justify-center bg-white">
        <img 
          src="/lovable-uploads/0d3014d5-b1df-4924-82db-92efdb2df75e.png" 
          alt="Ghana Chemical Society Logo" 
          className="h-26 w-26 object-contain"
        />
      </div>
      <span className="text-2xl font-light text-gcs-blue">Ghana Chemical Society</span>
    </Link>
  );
};

export default Logo;
