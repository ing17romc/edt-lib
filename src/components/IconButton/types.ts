import { ButtonHTMLAttributes } from 'react';
import { IconVariant } from '../Icon/types';

/**
 * Variantes de estilo disponibles para el botón de icono
 */
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning';

/**
 * Tamaños disponibles para el botón de icono
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Propiedades del componente IconButton
 */
export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'color'> {
  /**
   * Nombre del icono a mostrar. Debe ser un nombre de icono válido.
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
   * Color personalizado para el icono. Sobrescribe el color por defecto.
   */
  iconColor?: string;
  
  /**
   * Tamaño personalizado para el icono. Sobrescribe el tamaño calculado.
   */
  iconSize?: string | number;
  
  /**
   * Estilo del icono (sólido, contorno, etc.)
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
