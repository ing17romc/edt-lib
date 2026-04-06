import { HTMLAttributes, ReactNode } from 'react';
import { ComponentVariant } from '../../types';

export type MessageVariant =
  | ComponentVariant.PRIMARY
  | ComponentVariant.SUCCESS
  | ComponentVariant.DANGER
  | ComponentVariant.WARNING;

/**
 * Propiedades del componente Message
 */
export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Contenido del mensaje
   */
  children: ReactNode;

  /**
   * Variante de color/tipo del mensaje
   * @default 'primary'
   */
  variant?: MessageVariant;

  /**
   * Título opcional del mensaje
   */
  title?: string;

  /**
   * Si se puede cerrar el mensaje
   * @default false
   */
  closable?: boolean;

  /**
   * Callback al cerrar el mensaje
   */
  onClose?: () => void;
}
