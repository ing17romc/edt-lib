import { HTMLAttributes, ReactNode } from 'react';

/**
 * Available sizes for the Title component
 */
export enum TitleSize {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

/**
 * Available color variants for the Title component
 */
export enum TitleVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
}

/**
 * Custom properties of the Title component
 */
export interface TitleCustomProps {
  /**
   * Title size (corresponds to h1-h6 elements)
   * @default 'h1'
   */
  size?: TitleSize;
  
  /**
   * Title color variant
   * @default 'dark'
   */
  variant?: TitleVariant;
  
  /**
   * Title content
   */
  children: ReactNode;
  
  /**
   * If true, the title will be displayed in bold
   * @default false
   */
  bold?: boolean;
  
  /**
   * If true, the title will be displayed in italic
   * @default false
   */
  italic?: boolean;
  
  /**
   * If true, the title will be displayed underlined
   * @default false
   */
  underline?: boolean;
  
  /**
   * If true, the title will be displayed with strikethrough
   * @default false
   */
  strikethrough?: boolean;
  
  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  
  /**
   * If true, the title will be a block element
   * @default true
   */
  block?: boolean;
  
  /**
   * If true, the text will not wrap to multiple lines
   * @default false
   */
  noWrap?: boolean;
}

/**
 * Title component props extending standard HTML properties
 */
export type TitleProps = TitleCustomProps & Omit<HTMLAttributes<HTMLHeadingElement>, keyof TitleCustomProps>;

/**
 * Type for valid HTML heading tags
 */
export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
