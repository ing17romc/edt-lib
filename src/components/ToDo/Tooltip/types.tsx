import { HTMLAttributes, ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

/**
 * Propiedades del componente Tooltip
 */
export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Contenido del tooltip
   */
  content: ReactNode;

  /**
   * Elemento que activa el tooltip
   */
  children: ReactNode;

  /**
   * Posición del tooltip relativa al elemento hijo
   * @default 'top'
   */
  placement?: TooltipPlacement;

  /**
   * Si el tooltip está deshabilitado
   * @default false
   */
  disabled?: boolean;
}
