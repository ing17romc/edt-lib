// Tipos para TableWithPagination

/**
 * Representa una fila de datos de la tabla.
 */
export interface TableRowData {
  name: string;
  userName: string;
  status: boolean | number;
}

/**
 * Props para TableWithPagination.
 */
export interface TableWithPaginationProps {
  dataTable: TableRowData[];
}

/**
 * Estado interno del componente TableWithPagination.
 */
export interface TableWithPaginationState {
  page: number;
  pages: number;
}
