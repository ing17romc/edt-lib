/**
 * Tipos y contratos para el componente Message.
 * Este componente muestra mensajes de retroalimentación al usuario con diferentes niveles de importancia.
 */

import { HTMLAttributes, ReactNode } from 'react';

/** Tipos de mensaje disponibles */
export type MessageType = 'success' | 'info' | 'warning' | 'danger';

/**
 * Propiedades del componente Message
 * @interface MessageProps
 */
export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  /** 
   * Tipo de mensaje a mostrar 
   * @default 'info'
   */
  type?: MessageType;
  
  /** Título opcional que se muestra en negrita */
  title?: string;
  
  /** Contenido principal del mensaje */
  children: ReactNode;
  
  /** 
   * Permite cerrar el mensaje 
   * @default false
   */
  closable?: boolean;
  
  /** 
   * Función que se ejecuta al cerrar el mensaje
   * Solo se usa si `closable` es `true`
   */
  onClose?: () => void;
  
  /** 
   * Rol ARIA personalizado 
   * @default 'status' para info/success, 'alert' para warning/danger
   */
  role?: 'alert' | 'status' | 'alertdialog';
  
  /** ID para pruebas */
  'data-testid'?: string;
}
