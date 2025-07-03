/**
 * Tipos y contratos para el componente Typography.
 */

/**
 * Props para el componente Typography.
 * @property {boolean} [showCodeExamples] - Si es verdadero, muestra ejemplos de código para cada elemento tipográfico. Por defecto es true.
 * @property {string} [className] - Clase CSS adicional para el contenedor principal.
 */
export interface TypographyProps {
  /**
   * Si es verdadero, muestra ejemplos de código para cada elemento tipográfico.
   * @default true
   */
  showCodeExamples?: boolean;
  
  /**
   * Clase CSS adicional para el contenedor principal.
   */
  className?: string;
}

/**
 * Tipo para los tamaños de fuente disponibles en el componente Typography.
 */
export type FontSize = '8' | '10' | '12' | '14' | '16' | '18' | '20' | '22';

/**
 * Tipo para los tipos de interlineado disponibles en el componente Typography.
 */
export type LineHeightType = 'simple' | 'doble' | 'triple';
