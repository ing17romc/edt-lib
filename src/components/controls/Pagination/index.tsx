import React from 'react';
import classnames from 'classnames';
import { PaginationProps } from './types';
import './styles/Pagination.scss';

/**
 * @name Pagination
 * @description Componente funcional que renderiza una barra de paginación para navegar entre un conjunto de páginas.
 * 
 * @param {PaginationProps} props - Propiedades del componente.
 * @param {number} props.totalCount - El número total de páginas disponibles.
 * @param {number} [props.currentPage=1] - El número de la página activa actualmente.
 * @param {(page: number) => void} props.onPageChange - Función callback que se ejecuta cuando el usuario selecciona una página.
 * @param {string} [props.className] - Clases CSS adicionales para personalizar el estilo del contenedor.
 * 
 * @returns {JSX.Element | null} Un elemento JSX que representa la barra de paginación, o `null` si no es necesaria.
 */
const Pagination: React.FC<PaginationProps> = ({ totalCount, currentPage = 1, onPageChange, className }) => {

  const paginationRange = React.useMemo(() => {
    const range = (start: number, end: number): number[] => {
      const length = end - start + 1;
      return Array.from({ length }, (_, idx) => idx + start);
    };
    return range(1, totalCount);
  }, [totalCount]);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < totalCount) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={classnames('pagination-container', className)}>
      <li className={classnames('pagination-item', { disabled: currentPage === 1 })}>
        <button
          type="button"
          className="arrow-btn left"
          onClick={onPrevious}
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          <div className="arrow left" />
        </button>
      </li>
      {paginationRange.map(pageNumber => (
        <li
          key={pageNumber}
          className={classnames('pagination-item', {
            selected: pageNumber === currentPage,
          })}
        >
          <button
            type="button"
            className="page-btn"
            onClick={() => onPageChange(pageNumber)}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
            aria-label={`Ir a la página ${pageNumber}`}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        </li>
      ))}
      <li className={classnames('pagination-item', { disabled: currentPage === lastPage })}>
        <button
          type="button"
          className="arrow-btn right"
          onClick={onNext}
          disabled={currentPage === lastPage}
          aria-label="Página siguiente"
        >
          <div className="arrow right" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
