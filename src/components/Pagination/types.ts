export interface PaginationProps {
  /** Número total de páginas */
  totalPages: number;
  /** Página actual */
  currentPage: number;
  /** Función que se ejecuta cuando se cambia de página */
  onPageChange: (page: number) => void;
  /** Número máximo de botones de página a mostrar */
  maxPageButtons?: number;
  /** Texto para el botón de página anterior */
  previousLabel?: string;
  /** Texto para el botón de página siguiente */
  nextLabel?: string;
  /** Clase CSS personalizada */
  className?: string;
  /** Indica si el componente está deshabilitado */
  disabled?: boolean;
}
