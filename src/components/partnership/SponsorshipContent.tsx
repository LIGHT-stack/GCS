import React from 'react';
import { Award, Gift, TrendingUp, Briefcase, ShieldCheck, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SponsorshipContent = () => {
  return (
    <div className="space-y-16 p-8">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Sponsorship Opportunities</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Partner with the Ghana Chemical Society to support cutting-edge research, education, and industry advancement in chemistry throughout Ghana. 
          Your sponsorship directly impacts the development of chemical sciences in the region and provides valuable visibility for your organization.
        </p>
      </motion.section>

      <section className="py-8">
        <h3 className="text-3xl font-bold mb-12 text-gray-900 text-center">Sponsorship Tiers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Platinum Tier */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 border-t-4 border-gcs-blue transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-bold text-gcs-blue">Platinum Partner</h4>
              <div className="bg-gcs-blue text-white text-sm px-3 py-1 rounded-full">Premium</div>
            </div>
            
            <p className="text-4xl font-bold mb-4">GHS 50,000+</p>
            <p className="text-gray-600 mb-8">Exclusive partnership with maximum visibility and impact.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Award className="h-6 w-6 text-gcs-blue mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">Featured prominently at all GCS events and publications</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-6 w-6 text-gcs-blue mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">Named research grant opportunity</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-gcs-blue mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">Exclusive access to research findings</span>
              </li>
              <li className="flex items-start">
                <Gift className="h-6 w-6 text-gcs-blue mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">10 complimentary memberships</span>
              </li>
            </ul>
            
            <Link 
              to={`/partnership/apply?type=sponsorship&tier=platinum`}
              className="w-full py-4 bg-gcs-blue text-white rounded-xl hover:bg-gcs-blue/90 transition-colors font-medium inline-block text-center"
            >
              Become a Platinum Partner
            </Link>
          </motion.div>
          
          {/* Gold Tier */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-xl p-8 border-t-4 border-gcs-orange transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-bold text-gcs-orange">Gold Partner</h4>
              <div className="bg-gcs-orange text-white text-sm px-3 py-1 rounded-full">Popular</div>
            </div>
            
            <p className="text-4xl font-bold mb-4">GHS 25,000+</p>
            <p className="text-gray-600 mb-8">High-visibility partnership with significant benefits.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Briefcase className="h-6 w-6 text-gcs-orange mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">Prominent logo placement at major events</span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-gcs-orange mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">Special recognition in quarterly journals</span>
              </li>
              <li className="flex items-start">
                <Globe className="h-6 w-6 text-gcs-orange mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">Speaking opportunity at annual conference</span>
              </li>
              <li className="flex items-start">
                <Gift className="h-6 w-6 text-gcs-orange mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">5 complimentary memberships</span>
              </li>
            </ul>
            
            <Link 
              to={`/partnership/apply?type=sponsorship&tier=gold`}
              className="w-full py-4 bg-gcs-orange text-white rounded-xl hover:bg-gcs-orange/90 transition-colors font-medium inline-block text-center"
            >
              Become a Gold Partner
            </Link>
          </motion.div>
          
          {/* Silver Tier */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-8 border-t-4 border-gray-400 transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-bold text-gray-700">Silver Partner</h4>
              <div className="bg-gray-400 text-white text-sm px-3 py-1 rounded-full">Standard</div>
            </div>
            
            <p className="text-4xl font-bold mb-4">GHS 10,000+</p>
            <p className="text-gray-600 mb-8">Quality partnership with good visibility benefits.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Award className="h-6 w-6 text-gray-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">Logo on GCS website and materials</span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-gray-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">Recognition at select events</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-gray-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">Access to research summaries</span>
              </li>
              <li className="flex items-start">
                <Gift className="h-6 w-6 text-gray-500 mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-700">2 complimentary memberships</span>
              </li>
            </ul>
            
            <Link 
              to={`/partnership/apply?type=sponsorship&tier=silver`}
              className="w-full py-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors font-medium inline-block text-center"
            >
              Become a Silver Partner
            </Link>
          </motion.div>
        </div>
      </section>
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-8"
      >
        <h3 className="text-3xl font-bold mb-12 text-gray-900 text-center">Why Sponsor the Ghana Chemical Society?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-gcs-blue/10 flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-gcs-blue" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-900">Expand Your Influence</h4>
            <p className="text-gray-600">
              Connect with a network of leading chemists, researchers, educators, and industry professionals across Ghana and beyond.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-gcs-orange/10 flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-gcs-orange" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-900">Enhance Your Reputation</h4>
            <p className="text-gray-600">
              Associate your brand with scientific excellence and contribute to the advancement of chemical sciences in Ghana.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-900">Drive Innovation</h4>
            <p className="text-gray-600">
              Support groundbreaking research that addresses critical challenges in health, agriculture, environment, and industry.
            </p>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-r from-gcs-blue/10 to-gcs-blue/5 p-12 rounded-2xl"
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Partner With Us?</h3>
          <p className="text-xl text-gray-600">Contact us today to discuss customized sponsorship opportunities.</p>
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/partnership/apply?type=sponsorship"
            className="inline-flex items-center px-8 py-4 bg-gcs-blue text-white rounded-xl hover:bg-gcs-blue/90 transition-colors font-medium text-lg"
          >
            Apply Now
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default SponsorshipContent;
