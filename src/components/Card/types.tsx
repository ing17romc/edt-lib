import { ReactNode } from 'react';

export enum CardVariant {
  ELEVATED = 'elevated',
  OUTLINED = 'outlined',
  FILLED = 'filled',
}

export interface CardProps {
  /**
   * El contenido principal de la tarjeta
   */
  children: ReactNode;
  /**
   * Título opcional de la tarjeta
   */
  title?: string;
  /**
   * Subtítulo opcional de la tarjeta
   */
  subtitle?: string;
  /**
   * URL de la imagen opcional para la tarjeta
   */
  imageUrl?: string;
  /**
   * Texto alternativo para la imagen
   */
  imageAlt?: string;
  /**
   * Estilo visual de la tarjeta
   * @default CardVariant.ELEVATED
   */
  variant?: CardVariant;
  /**
   * Clase CSS personalizada
   */
  className?: string;
  /**
   * Evento click en la tarjeta
   */
  onClick?: () => void;
}
