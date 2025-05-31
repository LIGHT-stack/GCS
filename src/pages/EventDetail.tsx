import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const EventDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/community/events';

  const handleBack = () => {
    navigate(from);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={handleBack}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      {/* Rest of your event detail content */}
    </div>
  );
};

export default EventDetail; 