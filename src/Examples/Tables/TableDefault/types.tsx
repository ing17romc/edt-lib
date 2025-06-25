// Tipos para TableDefault

/**
 * Representa una fila de datos de la tabla.
 */
export interface TableRowData {
  name: string;
  userName: string;
  status: boolean | number;
}

/**
 * Props para TableDefault.
 */
export interface TableDefaultProps {
  dataTable: TableRowData[];
}
