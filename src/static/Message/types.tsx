/**
 * Tipos y contratos para el componente Message.
 * Este componente muestra mensajes de retroalimentación al usuario con diferentes niveles de importancia.
 */

/**
 * Tipos de mensaje disponibles
 * @enum {string}
 * @property {string} success - Indica una acción exitosa
 * @property {string} info - Proporciona información neutral
 * @property {string} warning - Indica una advertencia que requiere atención
 * @property {string} danger - Indica un error o problema crítico
 */
export type MessageType = 'success' | 'info' | 'warning' | 'danger';

/**
 * Propiedades del componente Message
 * @interface MessageProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Tipo de mensaje a mostrar
   * @default 'info'
   */
  type?: MessageType;
  
  /**
   * Título del mensaje (opcional)
   * Si se proporciona, se muestra en negrita al principio del mensaje
   */
  title?: string;
  
  /**
   * Contenido principal del mensaje
   */
  children: React.ReactNode;
  
  /**
   * Indica si el mensaje puede ser cerrado por el usuario
   * @default false
   */
  closable?: boolean;
  
  /**
   * Función que se ejecuta cuando el usuario cierra el mensaje
   * Solo se usa si `closable` es `true`
   */
  onClose?: () => void;
  
  /**
   * Rol ARIA para accesibilidad
   * @default 'status' para info/success, 'alert' para warning/error
   */
  role?: 'alert' | 'status' | 'alertdialog';
  
  /**
   * ID único para propósitos de prueba
   */
  'data-testid'?: string;
}
