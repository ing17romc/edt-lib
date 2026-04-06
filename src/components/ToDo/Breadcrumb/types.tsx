import { AnchorHTMLAttributes } from 'react';

/**
 * Elemento individual del Breadcrumb
 */
export interface BreadcrumbItem {
  /**
   * Texto del elemento
   */
  label: string;

  /**
   * URL del enlace (si es undefined, se renderiza como texto plano — ítem activo)
   */
  href?: string;
}

/**
 * Propiedades del componente Breadcrumb
 */
export interface BreadcrumbProps {
  /**
   * Lista de elementos del breadcrumb
   */
  items: BreadcrumbItem[];

  /**
   * Separador entre elementos
   * @default '/'
   */
  separator?: string;

  /**
   * Props adicionales para los anchors
   */
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;

  /**
   * Clase CSS adicional para el contenedor
   */
  className?: string;
}
