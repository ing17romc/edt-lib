import { HTMLAttributes } from 'react';

export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Nivel del heading (h1-h6) */
  level?: TitleLevel;
  /** Clase CSS adicional */
  className?: string;
  /** Estilos CSS en línea */
  style?: React.CSSProperties;
  /** Contenido del título */
  children: React.ReactNode;
}

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
