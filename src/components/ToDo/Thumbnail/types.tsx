import { ImgHTMLAttributes } from 'react';

/**
 * Propiedades del componente Thumbnail
 */
export interface ThumbnailProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * URL de la imagen
   */
  src: string;

  /**
   * Texto alternativo de la imagen
   */
  alt: string;

  /**
   * Caption opcional bajo la imagen
   */
  caption?: string;

  /**
   * Si es redonda
   * @default false
   */
  rounded?: boolean;

  /**
   * Ancho de la imagen en px
   * @default 120
   */
  width?: number;

  /**
   * Alto de la imagen en px
   * @default 120
   */
  height?: number;
}
