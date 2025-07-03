
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InternationalPartnershipsContent from './InternationalPartnershipsContent';
import LocalPartnershipsContent from './LocalPartnershipsContent';
import EventsProgramsContent from './EventsProgramsContent';
import OutreachContent from './OutreachContent';

interface CommunityTabsProps {
  defaultTab?: string;
}

const CommunityTabs: React.FC<CommunityTabsProps> = ({ defaultTab = "international" }) => {
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
    if (tab && ['international', 'local', 'events', 'outreach'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="section-container py-12">
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={handleTabChange} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="international">International Partnerships</TabsTrigger>
            <TabsTrigger value="local">Local Partnerships</TabsTrigger>
            <TabsTrigger value="events">Events & Programs</TabsTrigger>
            <TabsTrigger value="outreach">Outreach & Non-Profits</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="international" className="mt-6">
          <InternationalPartnershipsContent />
        </TabsContent>
        
        <TabsContent value="local" className="mt-6">
          <LocalPartnershipsContent />
        </TabsContent>
        
        <TabsContent value="events" className="mt-6">
          <EventsProgramsContent />
        </TabsContent>
        
        <TabsContent value="outreach" className="mt-6">
          <OutreachContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityTabs;
