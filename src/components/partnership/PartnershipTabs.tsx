import React, { useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SponsorshipContent from './SponsorshipContent';
import ResearchFundingContent from './ResearchFundingContent';
import GrantsScholarshipsContent from './GrantsScholarshipsContent';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface PartnershipTabsProps {
  defaultTab?: string;
}

const PartnershipTabs: React.FC<PartnershipTabsProps> = ({ defaultTab = "sponsorship" }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = React.useState(defaultTab);

  // Update the URL when the tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ tab: value });
  };

  // Update active tab when URL changes
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['sponsorship', 'research', 'grants'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full flex justify-center mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-gray-100">
            <TabsTrigger 
              value="sponsorship" 
              className="flex-1 py-4 px-6 data-[state=active]:bg-gcs-blue data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-200"
            >
              Sponsorship
            </TabsTrigger>
            <TabsTrigger 
              value="research" 
              className="flex-1 py-4 px-6 data-[state=active]:bg-gcs-orange data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-200"
            >
              Research & Funding
            </TabsTrigger>
            <TabsTrigger 
              value="grants" 
              className="flex-1 py-4 px-6 data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-200"
            >
              Grants & Scholarships
            </TabsTrigger>
          </TabsList>
          
          <AnimatePresence mode="wait">
            <TabsContent value="sponsorship" className="mt-0">
              <motion.div
                key="sponsorship"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.3 }}
              >
                <SponsorshipContent />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="research" className="mt-0">
              <motion.div
                key="research"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.3 }}
              >
                <ResearchFundingContent />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="grants" className="mt-0">
              <motion.div
                key="grants"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabVariants}
                transition={{ duration: 0.3 }}
              >
                <GrantsScholarshipsContent />
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
};

export default PartnershipTabs;
