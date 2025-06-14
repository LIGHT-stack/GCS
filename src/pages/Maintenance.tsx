import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle, RefreshCw } from 'lucide-react';

const Maintenance: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 text-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-yellow-100 p-4 rounded-full">
            <AlertCircle className="h-12 w-12 text-yellow-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900">
            System Maintenance
          </h1>
          
          <p className="text-gray-600 text-lg">
            We're currently performing scheduled maintenance to improve our services.
            This process may take a few minutes.
          </p>
          
          <div className="space-y-4 w-full max-w-md">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="font-semibold text-gray-900 mb-2">
                What's happening?
              </h2>
              <p className="text-gray-600 text-sm">
                We're upgrading our backend infrastructure to provide you with better service.
                During this time, some features may be temporarily unavailable.
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="font-semibold text-gray-900 mb-2">
                What can you do?
              </h2>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Try refreshing the page in a few minutes</li>
                <li>• Check our social media for updates</li>
                <li>• Contact support if the issue persists</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={handleRefresh}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh Page
            </Button>
            
            <Link to="/">
              <Button variant="outline">
                Return to Home
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Expected duration: 5-10 minutes
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Maintenance; 