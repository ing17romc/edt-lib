/**
 * Types and contracts for the Typography component.
 */

/**
 * Props for the Typography component.
 * @property {boolean} [showCodeExamples] - If true, shows code examples for each typographic element. Defaults to true.
 * @property {string} [className] - Additional CSS class for the main container.
 */
export interface TypographyProps {
  /**
   * If true, shows code examples for each typographic element.
   * @default true
   */
  showCodeExamples?: boolean;
  
  /**
   * Additional CSS class for the main container.
   */
  className?: string;
}

/**
 * Type for the available font sizes in the Typography component.
 */
export type FontSize = '8' | '10' | '12' | '14' | '16' | '18' | '20' | '22';

/**
 * Type for the available line height types in the Typography component.
 */
export type LineHeightType = 'simple' | 'doble' | 'triple';
