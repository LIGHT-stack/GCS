
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      url: "https://facebook.com/ghanachemicalsociety",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      url: "https://twitter.com/ghanachemsoc",
      color: "bg-sky-500 hover:bg-sky-600"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/company/ghana-chemical-society",
      color: "bg-blue-700 hover:bg-blue-800"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      url: "https://instagram.com/ghanachemicalsociety",
      color: "bg-pink-600 hover:bg-pink-700"
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      url: "https://youtube.com/c/ghanachemicalsociety",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  return (
    <section id="social" className="py-16">
      <h2 className="section-title mb-8">Connect With Us</h2>
      <p className="text-gray-600 max-w-3xl mb-10">
        Stay updated with the latest news, events, and initiatives from the Ghana Chemical Society. 
        Follow us on social media and join our growing community of chemistry enthusiasts, professionals, and students.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${link.color} text-white rounded-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <div className="bg-white/20 p-4 rounded-full mb-4">
              {link.icon}
            </div>
            <span className="font-medium">{link.name}</span>
          </a>
        ))}
      </div>
      
      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Newsletter</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get the latest updates, news, and special offers delivered directly to your inbox.
        </p>
        <div className="flex max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="rounded-r-none" 
          />
          <Button className="rounded-l-none">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
