import React from 'react';
import { render, screen } from '@testing-library/react';
import { EventSpeakers } from '../EventSpeakers';

const mockSpeakers = [
  {
    name: 'John Doe',
    title: 'Professor',
    institution: 'University of Ghana',
    topic: 'Chemical Engineering'
  },
  {
    name: 'Jane Smith',
    title: 'Research Scientist',
    institution: 'KNUST',
    topic: 'Materials Science'
  }
];

describe('EventSpeakers', () => {
  it('renders speakers information correctly', () => {
    render(<EventSpeakers speakers={mockSpeakers} />);
    
    // Check if speaker names are rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    
    // Check if titles and institutions are rendered
    expect(screen.getByText('Professor, University of Ghana')).toBeInTheDocument();
    expect(screen.getByText('Research Scientist, KNUST')).toBeInTheDocument();
    
    // Check if topics are rendered
    expect(screen.getByText('Topic: Chemical Engineering')).toBeInTheDocument();
    expect(screen.getByText('Topic: Materials Science')).toBeInTheDocument();
  });

  it('renders empty speakers list correctly', () => {
    render(<EventSpeakers speakers={[]} />);
    expect(screen.getByText('Featured Speakers')).toBeInTheDocument();
  });

  it('renders avatar fallback correctly', () => {
    render(<EventSpeakers speakers={[mockSpeakers[0]]} />);
    const avatar = screen.getByText('JD'); // Initials of John Doe
    expect(avatar).toBeInTheDocument();
  });
}); 