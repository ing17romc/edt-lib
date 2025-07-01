import { PaginationProps } from '../types';

export const mockPaginationProps: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  onPageChange: jest.fn(),
};

export const mockPaginationCustomLabels: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  onPageChange: jest.fn(),
  previousLabel: 'Anterior',
  nextLabel: 'Siguiente',
};

export const mockPaginationDisabled: PaginationProps = {
  totalPages: 10,
  currentPage: 5,
  onPageChange: jest.fn(),
  disabled: true,
};

export const mockPaginationManyPages: PaginationProps = {
  totalPages: 20,
  currentPage: 10,
  onPageChange: jest.fn(),
  maxPageButtons: 5,
};
