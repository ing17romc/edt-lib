import React from 'react';

interface PaginationProps {
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  totalCount, 
  currentPage, 
  onPageChange 
}) => {
  return (
    <div data-testid="pagination">
      {Array.from({ length: totalCount }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
          data-testid={`page-${page}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
