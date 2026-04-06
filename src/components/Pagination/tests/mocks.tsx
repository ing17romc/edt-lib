import { ComponentSize } from '../../types';
import { PaginationProps } from '../types';

export const mockPaginationProps: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  size: ComponentSize.MEDIUM,
  onPageChange: vi.fn(),
};

export const mockPaginationCustomLabels: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  onPageChange: vi.fn(),
  previousLabel: 'Anterior',
  nextLabel: 'Siguiente',
};

export const mockPaginationDisabled: PaginationProps = {
  totalPages: 10,
  currentPage: 5,
  onPageChange: vi.fn(),
  disabled: true,
};

export const mockPaginationManyPages: PaginationProps = {
  totalPages: 20,
  currentPage: 10,
  size: ComponentSize.MEDIUM,
  onPageChange: vi.fn(),
  maxPageButtons: 5,
};

export const mockPaginationSmallSize: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  size: ComponentSize.SMALL,
  onPageChange: vi.fn(),
};

export const mockPaginationLargeSize: PaginationProps = {
  totalPages: 10,
  currentPage: 1,
  size: ComponentSize.LARGE,
  onPageChange: vi.fn(),
};
