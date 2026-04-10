import { ReactNode } from 'react';

export enum CardVariant {
  ELEVATED = 'elevated',
  OUTLINED = 'outlined',
  FILLED = 'filled',
}

export interface CardProps {
  /**
   * Main content of the card
   */
  children: ReactNode;
  /**
   * Optional card title
   */
  title?: string;
  /**
   * Optional card subtitle
   */
  subtitle?: string;
  /**
   * Optional image URL for the card
   */
  imageUrl?: string;
  /**
   * Alternative text for the image
   */
  imageAlt?: string;
  /**
   * Visual style of the card
   * @default CardVariant.ELEVATED
   */
  variant?: CardVariant;
  /**
   * Custom CSS class
   */
  className?: string;
  /**
   * Click event on the card
   */
  onClick?: () => void;
}
