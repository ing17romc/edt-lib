import { HTMLAttributes, ReactNode } from 'react';

/**
 * Carousel slide
 */
export interface CarouselSlide {
  /**
   * Unique identifier
   */
  key: string;

  /**
   * Slide content
   */
  content: ReactNode;
}

/**
 * CarouselSnapped component props
 */
export interface CarouselSnappedProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Carousel slides
   */
  slides: CarouselSlide[];

  /**
   * Whether to show navigation buttons
   * @default true
   */
  showNavigation?: boolean;

  /**
   * Whether to show position indicators
   * @default true
   */
  showIndicators?: boolean;

  /**
   * Initial active index
   * @default 0
   */
  defaultIndex?: number;

  /**
   * Callback when changing slides
   */
  onChange?: (index: number) => void;
}
