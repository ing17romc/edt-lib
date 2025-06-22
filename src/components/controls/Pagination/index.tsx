import React from 'react';
import classnames from 'classnames';
import { PaginationProps } from './types';

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
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => (
        <li
          key={pageNumber}
          className={classnames('pagination-item', {
            selected: pageNumber === currentPage,
          })}
          onClick={() => onPageChange(pageNumber)}
          aria-current={pageNumber === currentPage ? 'page' : undefined}
          tabIndex={0}
        >
          {pageNumber}
        </li>
      ))}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
        aria-disabled={currentPage === lastPage}
        tabIndex={currentPage === lastPage ? -1 : 0}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
