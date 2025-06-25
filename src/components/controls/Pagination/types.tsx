/**
 * @interface PaginationProps
 * @description Propiedades para el componente de paginación.
 * @property {number} totalCount - Número total de elementos a paginar.
 * @property {number} [currentPage=1] - La página actual seleccionada.
 * @property {(page: number) => void} onPageChange - Función que se llama cuando se cambia de página.
 * @property {string} [className] - Clases CSS adicionales para el contenedor de paginación.
 */
export interface PaginationProps {
  totalCount: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/**
 * @type PaginationComponent
 * @description Define el tipo para el componente de paginación funcional de React.
 */
export type PaginationComponent = React.FC<PaginationProps>;
