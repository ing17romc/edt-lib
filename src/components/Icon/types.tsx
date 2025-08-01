import { HTMLAttributes } from 'react';
import { ComponentSize } from '../types';

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
  size?: ComponentSize;
  
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
