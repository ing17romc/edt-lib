import React from 'react';

/**
 * Propiedades del componente Spinner
 */
export interface SpinnerProps {
  /**
   * Controla si el spinner es visible o no
   * @default false
   */
  show: boolean;
}

/**
 * Tipo que representa el componente Spinner
 */
export type SpinnerComponent = React.FC<SpinnerProps>;
