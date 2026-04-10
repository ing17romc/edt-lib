// Types for TableWithPagination

/**
 * Represents a row of table data.
 */
export interface TableRowData {
  name: string;
  userName: string;
  status: boolean | number;
}

/**
 * Props for TableWithPagination.
 */
export interface TableWithPaginationProps {
  dataTable: TableRowData[];
}

/**
 * Internal state of the TableWithPagination component.
 */
export interface TableWithPaginationState {
  page: number;
  pages: number;
}
