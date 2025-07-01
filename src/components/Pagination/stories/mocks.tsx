import { PaginationProps } from '../types';

export const baseArgs: PaginationProps = {
  totalPages: 10,
  currentPage: 5,
  onPageChange: (page) => console.log(`Página cambiada a: ${page}`),
};

export const withCustomLabels: PaginationProps = {
  ...baseArgs,
  previousLabel: 'Anterior',
  nextLabel: 'Siguiente',
};

export const withManyPages: PaginationProps = {
  ...baseArgs,
  totalPages: 20,
  maxPageButtons: 5,
};

export const disabledState: PaginationProps = {
  ...baseArgs,
  disabled: true,
};

export const firstPage: PaginationProps = {
  ...baseArgs,
  currentPage: 1,
};

export const lastPage: PaginationProps = {
  ...baseArgs,
  currentPage: 10,
};
