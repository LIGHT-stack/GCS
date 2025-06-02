
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-16 w-16 rounded-full border border-white overflow-hidden flex items-center justify-center bg-white mr-3">
                <img 
                  src="/src/assets/Logo.png" 
                  alt="Ghana Chemical Society Logo" 
                  className="h-14 w-14 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Ghana Chemical Society</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advancing chemistry research, education, and applications in Ghana for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gcs-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gcs-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gcs-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gcs-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/resources/publications" className="text-gray-300 hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/community/events-programs" className="text-gray-300 hover:text-white transition-colors">Events & Programs</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-white transition-colors">Membership</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gcs-blue mr-2 mt-0.5" />
                <span className="text-gray-300">Department of Chemistry, KNUST, Kumasi-Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gcs-blue mr-2" />
                <span className="text-gray-300">+233 (0) 530 446 824</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gcs-blue mr-2" />
                <span className="text-gray-300">ghchemicalsocietyashanti@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gcs-blue mr-2" />
                <span className="text-gray-300">gcsmembership@gmail.com (Membership)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-3">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gcs-blue focus:border-transparent"
              />
              <button type="submit" className="w-full bg-gcs-blue hover:bg-gcs-blue/80 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Ghana Chemical Society. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
