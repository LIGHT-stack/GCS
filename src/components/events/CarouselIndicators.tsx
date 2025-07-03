
import React from 'react';

/**
 * CarouselIndicators Component
 * 
 * Displays pagination indicators for a carousel
 * 
 * @param {number} currentPage - The current active page
 * @param {number} totalPages - Total number of pages
 * @param {Function} onPageChange - Callback when an indicator is clicked
 * @returns {JSX.Element} The rendered carousel indicators
 */
interface CarouselIndicatorsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  return (
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            currentPage === index 
              ? 'w-6 bg-gcs-blue' 
              : 'w-2 bg-gray-300 hover:bg-gray-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
