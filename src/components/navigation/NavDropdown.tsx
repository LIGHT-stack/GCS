
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavDropdownProps {
  items: {
    title: string;
    path: string;
  }[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items }) => {
  const navigate = useNavigate();
  
  const handleItemClick = (path: string) => {
    if (path.includes('#')) {
      const [url, hash] = path.split('#');
      navigate(url);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };
  
  return (
    <div className="absolute left-0 mt-0 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
      {items.map((item, index) => (
        <div 
          key={index}
          onClick={() => handleItemClick(item.path)} 
          className="block px-4 py-2 text-sm text-gray-700 hover:text-gcs-blue hover:bg-gray-50 cursor-pointer"
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default NavDropdown;
