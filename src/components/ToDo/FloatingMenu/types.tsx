import { HTMLAttributes, ReactNode } from 'react';

export type FloatingMenuPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

/**
 * Elemento del menú flotante
 */
export interface FloatingMenuItem {
  /**
   * Identificador único
   */
  key: string;

  /**
   * Etiqueta visible
   */
  label: ReactNode;

  /**
   * Icono (opcional)
   */
  icon?: ReactNode;

  /**
   * Si está deshabilitado
   * @default false
   */
  disabled?: boolean;

  /**
   * Si es separador
   * @default false
   */
  divider?: boolean;
}

/**
 * Propiedades del componente FloatingMenu
 */
export interface FloatingMenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Elemento que abre el menú (trigger)
   */
  trigger: ReactNode;

  /**
   * Elementos del menú
   */
  items: FloatingMenuItem[];

  /**
   * Posición del menú respecto al trigger
   * @default 'bottom-start'
   */
  placement?: FloatingMenuPlacement;

  /**
   * Callback al seleccionar un elemento
   */
  onSelect?: (key: string) => void;

  /**
   * Si el menú está deshabilitado
   * @default false
   */
  disabled?: boolean;
}
