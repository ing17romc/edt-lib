/**
 * Types and contracts for the Color component.
 */

/**
 * Props for the Color component.
 */
export interface ColorProps {
  /**
   * Custom CSS class for the main container
   */
  className?: string;
  
  /**
   * If true, shows only font colors
   */
  showFontColors?: boolean;
  
  /**
   * If true, shows only background colors
   */
  showBackgroundColors?: boolean;
  
  /**
   * If true, shows SCSS color variables
   */
  showScssVariables?: boolean;
}

/**
 * Type for color categories
 */
export type ColorCategory = 'font' | 'background' | 'variable';

/**
 * Interface for color groups
 */
export interface ColorGroup {
  title: string;
  type: ColorCategory;
  items: string[];
}
