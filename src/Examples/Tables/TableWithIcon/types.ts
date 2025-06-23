// Tipos para TableWithIcon

/**
 * Representa una fila de datos de la tabla.
 */
export interface TableRowData {
  name: string;
  userName: string;
  status: boolean | number;
}

/**
 * Props para TableWithIcon.
 */
export interface TableWithIconProps {
  dataTable: TableRowData[];
}
