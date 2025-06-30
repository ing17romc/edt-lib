import { HTMLAttributes } from 'react';

export enum IconSize {
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
}

export enum IconVariant {
  SOLID = 'solid',
  OUTLINE = 'outline',
  DUAL = 'dual',
}

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Nombre del icono a mostrar
   */
  name: string;
  
  /**
   * Tamaño del icono
   * @default 'medium'
   */
  size?: IconSize;
  
  /**
   * Estilo del icono
   * @default 'outline'
   */
  variant?: IconVariant;
  
  /**
   * Color principal del icono
   * @default 'currentColor'
   */
  color?: string;
  
  /**
   * Color secundario (solo aplica para variante 'dual')
   */
  secondaryColor?: string;
  
  /**
   * Si es true, el icono hereda el color del elemento padre
   * @default false
   */
  inheritColor?: boolean;
  
  /**
   * Clase CSS personalizada
   */
  className?: string;
  
  /**
   * Estilos en línea
   */
  style?: React.CSSProperties;
}
