import { HTMLAttributes } from 'react';

export enum SpinnerSize {
  XSMALL = 'xsmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
}

export enum SpinnerVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  LIGHT = 'light',
  DARK = 'dark',
}

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Tamaño del spinner
   * @default 'medium'
   */
  size?: SpinnerSize;
  
  /**
   * Variante de color del spinner
   * @default 'primary'
   */
  variant?: SpinnerVariant;
  
  /**
   * Si es true, el spinner será de tipo "pulso" en lugar de giratorio
   * @default false
   */
  pulse?: boolean;
  
  /**
   * Texto accesible para lectores de pantalla
   * @default 'Cargando...'
   */
  'aria-label'?: string;
  
  /**
   * Clase CSS personalizada
   */
  className?: string;
}
