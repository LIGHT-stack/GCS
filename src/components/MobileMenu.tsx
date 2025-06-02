import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { navigationItems } from './navigation/NavigationItems';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleItem = (title: string) => {
    setExpandedItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => {
    return location.pathname === path.split('?')[0] || location.pathname === path.split('#')[0];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex items-center justify-between p-4 border-b">
        <Link to="/" className="text-2xl font-bold text-primary">
          GCS
        </Link>
        <button
          onClick={onClose}
          className="p-2 text-gray-600 hover:text-gray-900"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="p-4">
        {navigationItems.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center justify-between">
              <Link
                to={item.path}
                className={`text-lg font-medium ${
                  isActive(item.path) ? 'text-primary' : 'text-gray-900'
                }`}
                onClick={() => {
                  if (item.subItems.length === 0) {
                    onClose();
                  }
                }}
              >
                {item.title}
              </Link>
              {item.subItems.length > 0 && (
                <button
                  onClick={() => toggleItem(item.title)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  {expandedItems.includes(item.title) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              )}
            </div>
            {expandedItems.includes(item.title) && item.subItems.length > 0 && (
              <div className="pl-4 mt-2 space-y-2">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className={`block py-2 text-gray-600 hover:text-primary ${
                      isActive(subItem.path) ? 'text-primary' : ''
                    }`}
                    onClick={onClose}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
