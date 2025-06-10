import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const EventDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/community/events';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Rest of your event detail content */}
    </div>
  );
};

export default EventDetail; 