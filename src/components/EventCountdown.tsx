
import React, { useState, useEffect } from 'react';

interface EventCountdownProps {
  targetDate: Date;
  eventName: string;
}

const EventCountdown: React.FC<EventCountdownProps> = ({ targetDate, eventName }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-gcs-blue animate-fade-in">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{eventName}</h3>
      <p className="text-sm text-gray-500 mb-3">
        {targetDate.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>
      
      <div className="flex justify-between">
        <div className="text-center">
          <div className="text-2xl font-bold text-gcs-blue">{timeLeft.days}</div>
          <div className="text-xs text-gray-500">Days</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gcs-blue">{timeLeft.hours}</div>
          <div className="text-xs text-gray-500">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gcs-blue">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-500">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gcs-blue">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-500">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;
