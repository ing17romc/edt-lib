import { ButtonHTMLAttributes } from 'react';
import { IconVariant } from '../Icon/types';

// Tipos compatibles con los botones existentes
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'color'> {
  /**
   * Nombre del icono a mostrar
   */
  icon: string;
  
  /**
   * Tamaño del botón
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * Variante visual del botón
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Si el botón ocupa todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Si muestra un indicador de carga
   * @default false
   */
  loading?: boolean;
  
  /**
   * Color del icono
   */
  iconColor?: string;
  
  /**
   * Tamaño del icono. Si no se especifica, se calcula en base al tamaño del botón
   */
  iconSize?: string | number;
  
  /**
   * Estilo del icono
   * @default 'outline'
   */
  iconVariant?: IconVariant;
  
  /**
   * Clase CSS adicional para el botón
   */
  className?: string;
  
  /**
   * Clase CSS adicional para el icono
   */
  iconClassName?: string;
  
  /**
   * Estilos en línea para el botón
   */
  buttonStyle?: React.CSSProperties;
  
  /**
   * Estilos en línea para el icono
   */
  iconStyle?: React.CSSProperties;
  
  /**
   * Texto accesible para lectores de pantalla
   */
  'aria-label': string;
}

// Mapa de tamaños de icono basado en el tamaño del botón
export const iconSizeMap: Record<ButtonSize, string> = {
  small: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
} as const;
