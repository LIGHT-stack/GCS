import React from 'react';
import { render, screen } from '@testing-library/react';
import { EventDetails } from '../EventDetails';

const mockEventDetails = {
  date: new Date('2024-05-01T09:00:00'),
  endDate: new Date('2024-05-02T17:00:00'),
  location: 'Accra International Conference Centre',
  attendees: 500,
  organizers: 'Ghana Chemical Society'
};

describe('EventDetails', () => {
  it('renders event details correctly', () => {
    render(<EventDetails {...mockEventDetails} />);
    
    // Check if location is rendered
    expect(screen.getByText('Accra International Conference Centre')).toBeInTheDocument();
    
    // Check if attendees are rendered
    expect(screen.getByText('500+ professionals')).toBeInTheDocument();
    
    // Check if organizers are rendered
    expect(screen.getByText('Ghana Chemical Society')).toBeInTheDocument();
    
    // Check if dates are rendered
    expect(screen.getByText(/Wednesday, May 1, 2024/)).toBeInTheDocument();
    expect(screen.getByText(/Thursday, May 2, 2024/)).toBeInTheDocument();
  });

  it('renders calendar buttons correctly', () => {
    render(<EventDetails {...mockEventDetails} />);
    
    expect(screen.getByText('Google Calendar')).toBeInTheDocument();
    expect(screen.getByText('Outlook')).toBeInTheDocument();
    expect(screen.getByText('Apple Calendar')).toBeInTheDocument();
  });

  it('renders register button correctly', () => {
    render(<EventDetails {...mockEventDetails} />);
    expect(screen.getByText('Register for this Event')).toBeInTheDocument();
  });
}); 