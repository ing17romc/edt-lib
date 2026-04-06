import { HTMLAttributes, ReactNode } from 'react';

/**
 * Diapositiva del carrusel
 */
export interface CarouselSlide {
  /**
   * Identificador único
   */
  key: string;

  /**
   * Contenido de la diapositiva
   */
  content: ReactNode;
}

/**
 * Propiedades del componente CarouselSnapped
 */
export interface CarouselSnappedProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Diapositivas del carrusel
   */
  slides: CarouselSlide[];

  /**
   * Si muestra botones de navegación
   * @default true
   */
  showNavigation?: boolean;

  /**
   * Si muestra indicadores de posición
   * @default true
   */
  showIndicators?: boolean;

  /**
   * Índice activo inicial
   * @default 0
   */
  defaultIndex?: number;

  /**
   * Callback al cambiar de slide
   */
  onChange?: (index: number) => void;
}
