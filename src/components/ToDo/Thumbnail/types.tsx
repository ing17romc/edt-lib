import { ImgHTMLAttributes } from 'react';

/**
 * Thumbnail component props
 */
export interface ThumbnailProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image URL
   */
  src: string;

  /**
   * Image alternative text
   */
  alt: string;

  /**
   * Optional caption below the image
   */
  caption?: string;

  /**
   * Whether it is rounded
   * @default false
   */
  rounded?: boolean;

  /**
   * Image width in px
   * @default 120
   */
  width?: number;

  /**
   * Image height in px
   * @default 120
   */
  height?: number;
}
