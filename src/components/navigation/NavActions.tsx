import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavActions: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth');
  };

  const handleRegisterClick = () => {
    navigate('/auth/register');
  };

  return (
    <div className="flex items-center space-x-3">
      <button 
        onClick={handleLoginClick} 
        className="py-2 px-4 border border-gcs-blue text-gcs-blue hover:bg-gcs-blue/10 rounded-md transition-colors"
      >
        Login
      </button>
      <button 
        onClick={handleRegisterClick} 
        className="py-2 px-4 bg-gcs-orange text-white hover:bg-gcs-orange/80 rounded-md transition-colors"
      >
        Register
      </button>
    </div>
  );
};

export default NavActions;
