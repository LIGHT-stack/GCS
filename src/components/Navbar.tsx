import React, { useState, useEffect } from 'react';
import { Menu, Users, Link as LinkIcon } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import Logo from './navigation/Logo';
import NavigationItems from './navigation/NavigationItems';
import NavActions from './navigation/NavActions';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'} py-1`}>
        {/* Top section with logo and quick links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>
            
            {/* Quick links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/membership/members-area" 
                className="flex items-center gap-2 text-gray-700 hover:text-gcs-blue transition-colors"
              >
                <Users size={18} />
                <span className="font-medium">Members Area</span>
              </Link>
              <Link 
                to="/partnership/apply" 
                className="flex items-center gap-2 text-gray-700 hover:text-gcs-blue transition-colors"
              >
                <LinkIcon size={18} />
                <span className="font-medium">Become a Partner</span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-800 hover:text-gcs-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
          
          {/* Navigation menu on the next line */}
          <div className="hidden md:block py-3">
            <nav className="flex justify-between items-center">
              <NavigationItems />
              
              {/* Login and register buttons */}
              <NavActions />
            </nav>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      {/* Spacer for fixed header */}
      <div className="h-36 md:h-40"></div>
    </>
  );
};

export default Navbar;
