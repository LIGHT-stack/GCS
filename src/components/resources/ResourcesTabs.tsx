
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import JournalsContent from './JournalsContent';
import NewsArticlesContent from './NewsArticlesContent';
import PublicationsContent from './PublicationsContent';
import TabsIllustration from './TabsIllustration';
import { BookOpen, Newspaper, FileText } from 'lucide-react';

/**
 * ResourcesTabs Component
 * 
 * Displays tabbed content for different resource types: journals, news articles, and publications.
 * Updates the URL when tabs are changed and syncs with URL parameters.
 * 
 * @param {string} defaultTab - The default tab to show when component loads
 * @returns {JSX.Element} The rendered ResourcesTabs component
 */
interface ResourcesTabsProps {
  defaultTab?: string;
}

const ResourcesTabs: React.FC<ResourcesTabsProps> = ({ defaultTab = "journals" }) => {
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
    if (tab && ['journals', 'news', 'publications'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <div className="max-w-6xl mx-auto">
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100 p-1.5 rounded-xl">
          <TabsTrigger 
            value="journals" 
            className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-gcs-blue data-[state=active]:shadow-md flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            <span>Journals</span>
          </TabsTrigger>
          <TabsTrigger 
            value="news" 
            className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-gcs-orange data-[state=active]:shadow-md flex items-center justify-center gap-2"
          >
            <Newspaper className="w-5 h-5" />
            <span>News & Articles</span>
          </TabsTrigger>
          <TabsTrigger 
            value="publications" 
            className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-gcs-blue data-[state=active]:shadow-md flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" />
            <span>Publications</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Visual illustration component */}
        <TabsIllustration />
        
        <TabsContent value="journals" className="mt-0">
          <JournalsContent />
        </TabsContent>
        <TabsContent value="news" className="mt-0">
          <NewsArticlesContent />
        </TabsContent>
        <TabsContent value="publications" className="mt-0">
          <PublicationsContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourcesTabs;
