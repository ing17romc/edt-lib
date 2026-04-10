import React from 'react';
import { PaginationProps } from './types';
import { ComponentSize } from '../types';
import classNames from '../../utils/classNames';
import styles from './styles/Pagination.module.scss';

/**
 * Pagination component that displays controls for navigating between pages.
 * Allows navigating to the previous, next, first, last, or any intermediate page.
 */
export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  maxPageButtons = 5,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  className = '',
  disabled = false,
  size = ComponentSize.MEDIUM,
}) => {
  // Validate props
  if (totalPages <= 0) {
    console.warn('Pagination: totalPages must be greater than 0');
    return null;
  }

  if (currentPage < 1 || currentPage > totalPages) {
    console.warn(`Pagination: currentPage (${currentPage}) is out of range [1, ${totalPages}]`);
    return null;
  }

  // Calculate the range of pages to display
  const getPageRange = () => {
    const halfRange = Math.floor(maxPageButtons / 2);
    let startPage = Math.max(1, currentPage - halfRange);
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pages = getPageRange();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage || disabled) return;
    onPageChange(page);
  };

  const paginationClasses = classNames(
    styles.pagination,
    {
      [styles['pagination--small']]: size === ComponentSize.SMALL,
      [styles['pagination--large']]: size === ComponentSize.LARGE,
      [styles['pagination--disabled']]: disabled,
    },
    className
  );

  return (
    <nav className={paginationClasses} aria-label="Pagination">
      <div className={styles.pagination__item}>
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage || disabled}
          className={`${styles.pagination__button} ${
            (isFirstPage || disabled) ? styles['pagination__button--disabled'] : ''
          }`}
          aria-label="Previous page"
        >
          {previousLabel}
        </button>
      </div>

      {/* First page */}
      {pages[0] > 1 && (
        <>
          <div className={styles.pagination__item}>
            <button
              type="button"
              onClick={() => handlePageChange(1)}
              disabled={disabled}
              className={`${styles.pagination__button} ${
                disabled ? styles['pagination__button--disabled'] : ''
              }`}
              aria-label="Go to first page"
            >
              1
            </button>
          </div>
          {pages[0] > 2 && (
            <div className={styles.pagination__ellipsis}>...</div>
          )}
        </>
      )}

      {/* Page range */}
      {pages.map((page) => (
        <div key={page} className={styles.pagination__item}>
          <button
            type="button"
            onClick={() => handlePageChange(page)}
            disabled={disabled}
            className={`${styles.pagination__button} ${
              page === currentPage ? styles['pagination__button--active'] : ''
            } ${disabled ? styles['pagination__button--disabled'] : ''}`}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        </div>
      ))}

      {/* Last page */}
      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <div className={styles.pagination__ellipsis}>...</div>
          )}
          <div className={styles.pagination__item}>
            <button
              type="button"
              onClick={() => handlePageChange(totalPages)}
              disabled={disabled}
              className={`${styles.pagination__button} ${
                disabled ? styles['pagination__button--disabled'] : ''
              }`}
              aria-label={`Go to last page (${totalPages})`}
            >
              {totalPages}
            </button>
          </div>
        </>
      )}

      <div className={styles.pagination__item}>
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLastPage || disabled}
          className={`${styles.pagination__button} ${
            (isLastPage || disabled) ? styles['pagination__button--disabled'] : ''
          }`}
          aria-label="Next page"
        >
          {nextLabel}
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
