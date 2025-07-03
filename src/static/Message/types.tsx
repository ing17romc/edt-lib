/**
 * Tipos y contratos para el componente Message.
 */

/**
 * Tipos de mensaje disponibles
 */
export type MessageType = 'success' | 'info' | 'warning' | 'danger';

/**
 * Propiedades del componente Message
 */
export interface MessageProps {
  /**
   * Tipo de mensaje a mostrar
   * @default 'info'
   */
  type?: MessageType;
  
  /**
   * Título del mensaje (opcional)
   */
  title?: string;
  
  /**
   * Contenido del mensaje
   */
  children: React.ReactNode;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Estilos en línea
   */
  style?: React.CSSProperties;
}
