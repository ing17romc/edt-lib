/**
 * Tipos y contratos para el componente Color.
 */

/**
 * Props para el componente Color.
 */
export interface ColorProps {
  /**
   * Clase CSS personalizada para el contenedor principal
   */
  className?: string;
  
  /**
   * Si es verdadero, muestra solo los colores de fuente
   */
  showFontColors?: boolean;
  
  /**
   * Si es verdadero, muestra solo los colores de fondo
   */
  showBackgroundColors?: boolean;
  
  /**
   * Si es verdadero, muestra las variables de color SCSS
   */
  showScssVariables?: boolean;
}

/**
 * Tipo para las categorías de colores
 */
export type ColorCategory = 'font' | 'background' | 'variable';

/**
 * Interfaz para los grupos de colores
 */
export interface ColorGroup {
  title: string;
  type: ColorCategory;
  items: string[];
}
