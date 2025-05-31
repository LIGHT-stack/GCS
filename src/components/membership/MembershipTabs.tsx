
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BenefitsContent from './BenefitsContent';
import RegisterContent from './RegisterContent';
import RenewContent from './RenewContent';
import MembersAreaContent from './MembersAreaContent';

interface MembershipTabsProps {
  defaultTab?: string;
}

const MembershipTabs: React.FC<MembershipTabsProps> = ({ defaultTab = "benefits" }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Update the URL when the tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ tab: value });
  };

  // Update active tab when URL changes
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['benefits', 'register', 'renew', 'area'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <Tabs 
        defaultValue={activeTab} 
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-4 gap-2 md:gap-4 bg-white/80 backdrop-blur-sm p-1 rounded-lg">
            <TabsTrigger value="benefits" className="text-xs md:text-sm lg:text-base px-2 md:px-4 py-2">
              Membership Benefits
            </TabsTrigger>
            <TabsTrigger value="register" className="text-xs md:text-sm lg:text-base px-2 md:px-4 py-2">
              Register
            </TabsTrigger>
            <TabsTrigger value="renew" className="text-xs md:text-sm lg:text-base px-2 md:px-4 py-2">
              Renew
            </TabsTrigger>
            <TabsTrigger value="area" className="text-xs md:text-sm lg:text-base px-2 md:px-4 py-2">
              Members Area
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8">
          <TabsContent value="benefits" className="mt-0">
            <BenefitsContent />
          </TabsContent>
          <TabsContent value="register" className="mt-0">
            <RegisterContent />
          </TabsContent>
          <TabsContent value="renew" className="mt-0">
            <RenewContent />
          </TabsContent>
          <TabsContent value="area" className="mt-0">
            <MembersAreaContent />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default MembershipTabs;
