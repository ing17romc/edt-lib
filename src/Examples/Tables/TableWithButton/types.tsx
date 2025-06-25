// Tipos para TableWithButton

/**
 * Representa una fila de datos de la tabla.
 */
export interface TableRowData {
  name: string;
  userName: string;
  status: boolean | number;
}

/**
 * Props para TableWithButton.
 */
export interface TableWithButtonProps {
  dataTable: TableRowData[];
}
