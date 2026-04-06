import { HTMLAttributes, ReactNode } from 'react';

/**
 * Elemento individual del menú
 */
export interface MenuItem {
  /**
   * Identificador único
   */
  key: string;

  /**
   * Etiqueta del elemento
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
   * Si es un separador visual
   * @default false
   */
  divider?: boolean;
}

/**
 * Propiedades del componente Menu
 */
export interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Lista de elementos del menú
   */
  items: MenuItem[];

  /**
   * Key del elemento activo
   */
  activeKey?: string;

  /**
   * Callback al seleccionar un elemento
   */
  onSelect?: (key: string) => void;
}
