import { ComponentSize } from '../types';

export interface PaginationProps {
  /** Total number of pages */
  totalPages: number;
  /** Current page */
  currentPage: number;
  /** Function called when the page changes */
  onPageChange: (page: number) => void;
  /** Maximum number of page buttons to display */
  maxPageButtons?: number;
  /** Text for the previous page button */
  previousLabel?: string;
  /** Text for the next page button */
  nextLabel?: string;
  /** Custom CSS class */
  className?: string;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Component size */
  size?: ComponentSize;
}
