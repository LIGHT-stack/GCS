
import React from 'react';
import { Link } from 'react-scroll';

const AboutNavigation = () => {
  return (
    <div className="sticky top-16 z-30 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 -mx-4 px-4 scrollbar-none">
          <div className="flex space-x-6 mx-auto">
            <Link
              to="history"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap text-gray-600 hover:text-gcs-blue cursor-pointer font-medium"
            >
              History
            </Link>
            <Link
              to="mission-vision"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap text-gray-600 hover:text-gcs-blue cursor-pointer font-medium"
            >
              Mission & Vision
            </Link>
            <Link
              to="leadership"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap text-gray-600 hover:text-gcs-blue cursor-pointer font-medium"
            >
              Leadership
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap text-gray-600 hover:text-gcs-blue cursor-pointer font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="social"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="whitespace-nowrap text-gray-600 hover:text-gcs-blue cursor-pointer font-medium"
            >
              Social Media
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNavigation;
