import { HTMLAttributes, ReactNode } from 'react';

/**
 * Elemento de una pestaña
 */
export interface TabItem {
  /**
   * Identificador único del tab
   */
  key: string;

  /**
   * Etiqueta del tab
   */
  label: ReactNode;

  /**
   * Contenido del tab
   */
  content: ReactNode;

  /**
   * Si el tab está deshabilitado
   * @default false
   */
  disabled?: boolean;
}

/**
 * Propiedades del componente Tabs
 */
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Lista de pestañas
   */
  tabs: TabItem[];

  /**
   * Key del tab activo (modo controlado)
   */
  activeKey?: string;

  /**
   * Key del tab activo por defecto (modo no controlado)
   */
  defaultActiveKey?: string;

  /**
   * Callback al cambiar de pestaña
   */
  onChange?: (key: string) => void;
}
