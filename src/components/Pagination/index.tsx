import React from 'react';
import { PaginationProps } from './types';
import styles from './styles/Pagination.module.scss';

/**
 * Componente de paginación que muestra controles para navegar entre páginas.
 * Permite navegar a la página anterior, siguiente, primera, última o cualquier página intermedia.
 */
export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  maxPageButtons = 5,
  previousLabel = 'Anterior',
  nextLabel = 'Siguiente',
  className = '',
  disabled = false,
}) => {
  // Validar props
  if (totalPages <= 0) {
    console.warn('Pagination: totalPages debe ser mayor a 0');
    return null;
  }

  if (currentPage < 1 || currentPage > totalPages) {
    console.warn(`Pagination: currentPage (${currentPage}) está fuera de rango [1, ${totalPages}]`);
    return null;
  }

  // Calcular el rango de páginas a mostrar
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

  return (
    <nav className={`${styles.pagination} ${className}`} aria-label="Paginación">
      <div className={styles.pagination__item}>
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isFirstPage || disabled}
          className={`${styles.pagination__button} ${
            (isFirstPage || disabled) ? styles['pagination__button--disabled'] : ''
          }`}
          aria-label="Página anterior"
        >
          {previousLabel}
        </button>
      </div>

      {/* Primera página */}
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
              aria-label="Ir a la primera página"
            >
              1
            </button>
          </div>
          {pages[0] > 2 && (
            <div className={styles.pagination__ellipsis}>...</div>
          )}
        </>
      )}

      {/* Páginas del rango */}
      {pages.map((page) => (
        <div key={page} className={styles.pagination__item}>
          <button
            type="button"
            onClick={() => handlePageChange(page)}
            disabled={disabled}
            className={`${styles.pagination__button} ${
              page === currentPage ? styles['pagination__button--active'] : ''
            } ${disabled ? styles['pagination__button--disabled'] : ''}`}
            aria-label={`Ir a la página ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        </div>
      ))}

      {/* Última página */}
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
              aria-label={`Ir a la última página (${totalPages})`}
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
          aria-label="Página siguiente"
        >
          {nextLabel}
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
