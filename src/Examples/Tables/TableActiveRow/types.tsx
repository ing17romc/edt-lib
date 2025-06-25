// Tipos para TableActiveRow

/**
 * Representa una fila de datos de la tabla.
 */
export interface TableRowData {
  name: string;
  userName: string;
  status: boolean | number;
}

/**
 * Props para TableActiveRow.
 */
export interface TableActiveRowProps {
  dataTable: TableRowData[];
}
