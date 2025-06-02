import React from 'react';
import { render, screen } from '@testing-library/react';
import { EventSchedule } from '../EventSchedule';

const mockSchedule = [
  {
    day: 'Day 1',
    items: [
      { time: '09:00 AM', activity: 'Opening Ceremony' },
      { time: '10:30 AM', activity: 'Keynote Speech' }
    ]
  },
  {
    day: 'Day 2',
    items: [
      { time: '02:00 PM', activity: 'Workshop Session' }
    ]
  }
];

describe('EventSchedule', () => {
  it('renders schedule information correctly', () => {
    render(<EventSchedule schedule={mockSchedule} />);
    
    // Check if days are rendered
    expect(screen.getByText('Day 1')).toBeInTheDocument();
    expect(screen.getByText('Day 2')).toBeInTheDocument();
    
    // Check if activities are rendered
    expect(screen.getByText('Opening Ceremony')).toBeInTheDocument();
    expect(screen.getByText('Keynote Speech')).toBeInTheDocument();
    expect(screen.getByText('Workshop Session')).toBeInTheDocument();
    
    // Check if times are rendered
    expect(screen.getByText('09:00 AM')).toBeInTheDocument();
    expect(screen.getByText('10:30 AM')).toBeInTheDocument();
    expect(screen.getByText('02:00 PM')).toBeInTheDocument();
  });

  it('renders empty schedule correctly', () => {
    render(<EventSchedule schedule={[]} />);
    expect(screen.getByText('Event Schedule')).toBeInTheDocument();
  });
}); 