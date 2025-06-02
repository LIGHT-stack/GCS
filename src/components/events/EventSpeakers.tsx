import React, { memo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Speaker {
  name: string;
  title: string;
  institution: string;
  topic: string;
}

interface EventSpeakersProps {
  speakers: Speaker[];
}

const SpeakerCard = memo(({ name, title, institution, topic }: Speaker) => (
  <div className="flex items-start space-x-4">
    <Avatar className="h-14 w-14">
      <AvatarImage 
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`} 
      />
      <AvatarFallback>
        {name.split(' ').map(n => n[0]).join('')}
      </AvatarFallback>
    </Avatar>
    <div>
      <h3 className="font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">
        {title}, {institution}
      </p>
      <p className="text-sm font-medium mt-1">
        Topic: {topic}
      </p>
    </div>
  </div>
));

SpeakerCard.displayName = 'SpeakerCard';

export const EventSpeakers = memo(({ speakers }: EventSpeakersProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
      <h2 className="text-2xl font-bold mb-6">Featured Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  );
});

EventSpeakers.displayName = 'EventSpeakers'; 