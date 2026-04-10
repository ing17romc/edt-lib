import { ComponentSize } from '../../types';
import { PaginationProps } from '../types';

export const baseArgs: PaginationProps = {
  totalPages: 10,
  currentPage: 5,
  size: ComponentSize.MEDIUM,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};

export const withCustomLabels: PaginationProps = {
  ...baseArgs,
  previousLabel: 'Previous',
  nextLabel: 'Next',
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

export const smallSize: PaginationProps = {
  ...baseArgs,
  size: ComponentSize.SMALL,
};

export const largeSize: PaginationProps = {
  ...baseArgs,
  size: ComponentSize.LARGE,
};
