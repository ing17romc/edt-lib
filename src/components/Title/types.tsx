import { HTMLAttributes, ReactNode } from 'react';

/**
 * Tamaños disponibles para el componente Title
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
 * Variantes de color disponibles para el componente Title
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
 * Propiedades personalizadas del componente Title
 */
interface TitleCustomProps {
  /**
   * Tamaño del título (corresponde a los elementos h1-h6)
   * @default 'h1'
   */
  size?: TitleSize;
  
  /**
   * Variante de color del título
   * @default 'dark'
   */
  variant?: TitleVariant;
  
  /**
   * Contenido del título
   */
  children: ReactNode;
  
  /**
   * Si es true, el título se mostrará en negrita
   * @default false
   */
  bold?: boolean;
  
  /**
   * Si es true, el título se mostrará en cursiva
   * @default false
   */
  italic?: boolean;
  
  /**
   * Si es true, el título se mostrará subrayado
   * @default false
   */
  underline?: boolean;
  
  /**
   * Si es true, el título se mostrará tachado
   * @default false
   */
  strikethrough?: boolean;
  
  /**
   * Alineación del texto
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  
  /**
   * Si es true, el título será un elemento de bloque
   * @default true
   */
  block?: boolean;
  
  /**
   * Si es true, el texto no se romperá en varias líneas
   * @default false
   */
  noWrap?: boolean;
}

/**
 * Propiedades del componente Title que extiende las propiedades HTML estándar
 */
export type TitleProps = TitleCustomProps & Omit<HTMLAttributes<HTMLHeadingElement>, keyof TitleCustomProps>;

/**
 * Tipo para las etiquetas de encabezado HTML válidas
 */
export type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
