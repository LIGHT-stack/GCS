import { useState, useCallback, useEffect } from 'react';

interface UseCarouselProps {
  items: any[];
  itemsPerPage: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

interface UseCarouselReturn {
  currentPage: number;
  direction: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handlePageChange: (page: number) => void;
}

export const useCarousel = ({
  items = [],
  itemsPerPage,
  autoPlay = true,
  autoPlayInterval = 7000
}: UseCarouselProps): UseCarouselReturn => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil((items?.length || 0) / itemsPerPage);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const handlePageChange = useCallback((page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  }, [currentPage]);

  useEffect(() => {
    if (!autoPlay || !items?.length) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, handleNext, items?.length]);

  return {
    currentPage,
    direction,
    totalPages,
    handlePrevious,
    handleNext,
    handlePageChange
  };
}; 