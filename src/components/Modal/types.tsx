import { ReactNode } from 'react';
import { ComponentSize } from '../types';

export interface ModalProps {
  /**
   * Indica si el modal está abierto o cerrado
   * @default false
   */
  isOpen: boolean;
  
  /**
   * Función que se ejecuta cuando se cierra el modal
   */
  onClose: () => void;
  
  /**
   * Título del modal
   */
  title?: string;
  
  /**
   * Contenido del modal
   */
  children: ReactNode;
  
  /**
   * Tamaño del modal
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * Indica si se debe mostrar el botón de cerrar
   * @default true
   */
  showCloseButton?: boolean;
  
  /**
   * Texto personalizado para el botón de cerrar
   */
  closeButtonText?: string;
  
  /**
   * Indica si el modal debe cerrarse al hacer clic fuera de él
   * @default true
   */
  closeOnOverlayClick?: boolean;
  
  /**
   * Indica si el modal debe cerrarse al presionar la tecla Escape
   * @default true
   */
  closeOnEsc?: boolean;
  
  /**
   * Clase CSS personalizada para el contenedor del modal
   */
  className?: string;
  
  /**
   * Estilos en línea para el contenedor del modal
   */
  style?: React.CSSProperties;
  
  /**
   * Elemento que se renderiza en el pie del modal
   */
  footer?: ReactNode;
  
  /**
   * Indica si el modal debe centrarse verticalmente
   * @default true
   */
  centerVertically?: boolean;
  
  /**
   * Indica si el modal debe deshabilitar el scroll del body cuando está abierto
   * @default true
   */
  preventScroll?: boolean;
}
