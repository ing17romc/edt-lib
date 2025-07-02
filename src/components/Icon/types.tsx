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

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
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
   * Si es true, el icono se muestra como deshabilitado
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Componente personalizado para renderizar como icono
   */
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  
  /**
   * Clase CSS personalizada
   */
  className?: string;
  
  /**
   * Estilos en línea
   */
  style?: React.CSSProperties;
  
  /**
   * Identificador para pruebas
   */
  'data-testid'?: string;
}
