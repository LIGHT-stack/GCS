
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import NavDropdown from './NavDropdown';

interface NavItemProps {
  title: string;
  path: string;
  isActive: boolean;
  subItems?: {
    title: string;
    path: string;
  }[];
  activeMenu: string | null;
  onMenuEnter: (menuName: string) => void;
  onMenuLeave: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
  title, 
  path, 
  isActive, 
  subItems,
  activeMenu,
  onMenuEnter,
  onMenuLeave
}) => {
  const hasSubItems = subItems && subItems.length > 0;
  
  return (
    <div 
      className="relative" 
      onMouseEnter={() => onMenuEnter(title.toLowerCase())} 
      onMouseLeave={onMenuLeave}
    >
      <Link 
        to={path} 
        className={`px-3 py-2 text-base font-medium ${isActive ? 'text-gcs-blue' : 'text-gray-800'} hover:text-gcs-blue ${hasSubItems ? 'inline-flex items-center gap-1' : ''}`}
      >
        {title}
        {hasSubItems && (
          <ChevronDown className="w-4 h-4 ml-1" />
        )}
      </Link>
      
      {hasSubItems && activeMenu === title.toLowerCase() && (
        <NavDropdown items={subItems} />
      )}
    </div>
  );
};

export default NavItem;
