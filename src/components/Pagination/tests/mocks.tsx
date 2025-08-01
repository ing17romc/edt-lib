import { ComponentSize } from '../../types';
import { PaginationProps } from '../types';

export const mockPaginationProps: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  size: ComponentSize.MEDIUM,
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
  size: ComponentSize.MEDIUM,
  onPageChange: jest.fn(),
  maxPageButtons: 5,
};

export const mockPaginationSmallSize: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  size: ComponentSize.SMALL,
  onPageChange: jest.fn(),
};

export const mockPaginationLargeSize: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  size: ComponentSize.LARGE,
  onPageChange: jest.fn(),
};
