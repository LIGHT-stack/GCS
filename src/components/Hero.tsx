import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = memo(() => {
  return (
    <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gcs-light-blue/30 to-white z-0"></div>
      
      <div className="section-container z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Advancing Chemistry for a<br />
              <span className="text-gcs-blue">Better Ghana and Beyond</span>
            </h1>
            
            <p className="text-lg text-gray-700 max-w-lg">
              The Ghana Chemical Society fosters excellence in chemistry research, education, and industrial applications to address national and international challenges and improve lives.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/community?tab=events" 
                className="btn-primary group"
              >
                Explore
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/auth/register" 
                className="btn-accent"
              >
                Join
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-gcs-blue/10 to-gcs-orange/10 rounded-2xl overflow-hidden shadow-lg relative">
              {/* Animated molecule simulation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-32 h-32 rounded-full bg-gcs-blue/20 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gcs-blue/40"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <motion.div 
                  className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-gcs-orange/20"
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-gcs-blue/10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <motion.line 
                  x1="200" y1="200" x2="300" y2="150" 
                  stroke="#33C3F0" 
                  strokeWidth="1" 
                  strokeDasharray="5,5"
                  animate={{ 
                    strokeDashoffset: [0, -10],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.line 
                  x1="200" y1="200" x2="150" y2="300" 
                  stroke="#33C3F0" 
                  strokeWidth="1" 
                  strokeDasharray="5,5"
                  animate={{ 
                    strokeDashoffset: [0, -10],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  }}
                />
                <motion.line 
                  x1="200" y1="200" x2="120" y2="130" 
                  stroke="#33C3F0" 
                  strokeWidth="1" 
                  strokeDasharray="5,5"
                  animate={{ 
                    strokeDashoffset: [0, -10],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                />
              </svg>
            </div>
            
            {/* Stats cards */}
            <motion.div 
              className="absolute -bottom-5 -left-5 w-48 bg-white shadow-lg rounded-lg p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-bold text-gcs-blue">100+</h3>
              <p className="text-sm text-gray-600">Active Researchers</p>
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -right-5 w-48 bg-white shadow-lg rounded-lg p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-bold text-gcs-orange">250+</h3>
              <p className="text-sm text-gray-600">Published Papers</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
