import { HTMLAttributes, ReactNode } from 'react';

/**
 * Elemento de la lista
 */
export interface ListControlItem {
  /**
   * Identificador único
   */
  key: string;

  /**
   * Contenido principal del elemento
   */
  label: ReactNode;

  /**
   * Descripción secundaria
   */
  description?: string;

  /**
   * Si el elemento está seleccionado
   * @default false
   */
  selected?: boolean;

  /**
   * Si está deshabilitado
   * @default false
   */
  disabled?: boolean;
}

/**
 * Propiedades del componente ListControl
 */
export interface ListControlProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Elementos de la lista
   */
  items: ListControlItem[];

  /**
   * Callback al seleccionar un elemento
   */
  onSelect?: (key: string) => void;

  /**
   * Si permite selección múltiple
   * @default false
   */
  multiSelect?: boolean;
}
