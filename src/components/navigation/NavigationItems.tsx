import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem';

/**
 * Navigation data structure
 * Defines the main navigation items and their sub-items
 */
export const navigationItems = [
  {
    title: "Home",
    path: "/",
    subItems: []
  },
  {
    title: "About",
    path: "/about",
    subItems: [
      { title: "History", path: "/about#history" },
      { title: "Mission & Vision", path: "/about#mission-vision" },
      { title: "Leadership", path: "/about#leadership" },
      { title: "Contact Us", path: "/about#contact" },
      { title: "Social Media", path: "/about#social" }
    ]
  },
  {
    title: "Partnership",
    path: "/partnership",
    subItems: [
      { title: "Sponsorship", path: "/partnership?tab=sponsorship" },
      { title: "Research & Funding", path: "/partnership?tab=research" },
      { title: "Grants & Scholarships", path: "/partnership?tab=grants" },
      { title: "Apply for Partnership", path: "/partnership/apply" }
    ]
  },
  {
    title: "Membership",
    path: "/membership",
    subItems: [
      { title: "Members Area", path: "/membership/members-area" },
      { title: "Dashboard", path: "/dashboard" }
    ]
  },
  {
    title: "Community",
    path: "/community",
    subItems: [
      { title: "International Partners", path: "/community/international-partners" },
      { title: "Local Partners", path: "/community/local-partners" },
      { title: "Events & Programs", path: "/community/events-programs" },
      { title: "Outreach & Non-Profits", path: "/community/outreach" }
    ]
  },
  {
    title: "Resources",
    path: "/resources",
    subItems: [
      { title: "Journals", path: "/resources/journals" },
      { title: "News & Articles", path: "/resources/news-articles" },
      { title: "Publications", path: "/resources/publications" }
    ]
  }
];

/**
 * NavigationItems Component
 * 
 * Renders the main navigation menu items and handles their interaction states.
 */
const NavigationItems: React.FC = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Check if current path matches link
  const isActive = (path: string) => {
    return location.pathname === path.split('?')[0] || location.pathname === path.split('#')[0];
  };

  // Handle menu hover
  const handleMenuEnter = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="flex items-center space-x-6">
      {navigationItems.map((item, index) => (
        <NavItem 
          key={index}
          title={item.title}
          path={item.path}
          isActive={isActive(item.path)}
          subItems={item.subItems}
          activeMenu={activeMenu}
          onMenuEnter={handleMenuEnter}
          onMenuLeave={handleMenuLeave}
        />
      ))}
    </div>
  );
};

export default NavigationItems;
