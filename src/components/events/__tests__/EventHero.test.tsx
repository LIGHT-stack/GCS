import React from 'react';
import { render, screen } from '@testing-library/react';
import { EventHero } from '../EventHero';
import { BrowserRouter } from 'react-router-dom';

const mockEventData = {
  name: 'Test Event',
  description: 'Test Description',
  image: '/test-image.jpg',
  type: 'conference'
};

describe('EventHero', () => {
  const renderWithRouter = (component: React.ReactNode) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  it('renders event information correctly', () => {
    renderWithRouter(<EventHero {...mockEventData} />);
    
    expect(screen.getByText('Test Event')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Conference')).toBeInTheDocument();
    expect(screen.getByAltText('Test Event')).toHaveAttribute('src', '/test-image.jpg');
  });

  it('renders back button with correct link', () => {
    renderWithRouter(<EventHero {...mockEventData} />);
    
    const backButton = screen.getByText('Back to Events');
    expect(backButton).toBeInTheDocument();
    expect(backButton.closest('a')).toHaveAttribute('href', '/community/events-programs');
  });
}); 