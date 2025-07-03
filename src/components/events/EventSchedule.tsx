import React, { memo } from 'react';

interface ScheduleItem {
  time: string;
  activity: string;
}

interface ScheduleDay {
  day: string;
  items: ScheduleItem[];
}

interface EventScheduleProps {
  schedule: ScheduleDay[];
}

const ScheduleItem = memo(({ time, activity }: ScheduleItem) => (
  <div className="flex">
    <div className="w-1/4 text-gray-600 font-medium pr-4 text-right">
      {time}
    </div>
    <div className="w-3/4 pl-4 border-l border-gray-200">
      <div className="font-medium text-gray-900">{activity}</div>
    </div>
  </div>
));

ScheduleItem.displayName = 'ScheduleItem';

const ScheduleDay = memo(({ day, items }: ScheduleDay) => (
  <div className="mb-8 last:mb-0">
    <h3 className="text-lg font-semibold mb-4 px-4 py-2 bg-gray-100 rounded-lg">
      {day}
    </h3>
    <div className="space-y-3">
      {items.map((item, itemIndex) => (
        <ScheduleItem key={itemIndex} {...item} />
      ))}
    </div>
  </div>
));

ScheduleDay.displayName = 'ScheduleDay';

export const EventSchedule = memo(({ schedule }: EventScheduleProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
      <h2 className="text-2xl font-bold mb-6">Event Schedule</h2>
      {schedule.map((day, index) => (
        <ScheduleDay key={index} {...day} />
      ))}
    </div>
  );
});

EventSchedule.displayName = 'EventSchedule'; 