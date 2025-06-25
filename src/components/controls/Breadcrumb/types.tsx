import { FC, MouseEvent } from 'react';

/**
 * Opción individual para el componente Breadcrumb
 */
export interface BreadcrumbOption {
  /** URL a la que navegará el breadcrumb */
  url: string;
  /** Texto que se mostrará en el breadcrumb */
  text: string;
  /** Indica si el elemento está deshabilitado */
  disabled?: boolean;
  /** Clase CSS personalizada para el elemento */
  className?: string;
}

/**
 * Propiedades del componente Breadcrumb
 */
export interface BreadcrumbProps {
  /** Array de opciones que se mostrarán en el breadcrumb */
  options: BreadcrumbOption[];
  /** 
   * Función que se ejecuta al hacer clic en un elemento del breadcrumb
   * @param url - URL del elemento clickeado
   * @param event - Evento de clic de React
   */
  getCurrentPath: (url: string, event: MouseEvent<HTMLButtonElement>) => void;
  /** Clase CSS personalizada para el contenedor del breadcrumb */
  className?: string;
  /** Separador personalizado entre elementos del breadcrumb */
  separator?: React.ReactNode;
}

/**
 * Tipo para el componente Breadcrumb
 */
export type BreadcrumbComponent = FC<BreadcrumbProps>;
