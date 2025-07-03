import type { MessageType } from '../types';

/**
 * Datos de ejemplo para las pruebas del componente Message
 */
export const mockMessages = [
  {
    type: 'success' as MessageType,
    title: '¡Éxito!',
    content: 'La operación se completó correctamente.',
  },
  {
    type: 'info' as MessageType,
    title: 'Información',
    content: 'Este es un mensaje informativo.',
  },
  {
    type: 'warning' as MessageType,
    title: 'Advertencia',
    content: 'Esta acción requiere su atención.',
  },
  {
    type: 'danger' as MessageType,
    title: 'Error',
    content: 'Ha ocurrido un error inesperado.',
  },
];

/**
 * Mock de las clases CSS para las pruebas
 */
export const mockStyles = {
  message: 'message',
  'message-success': 'message-success',
  'message-info': 'message-info',
  'message-warning': 'message-warning',
  'message-danger': 'message-danger',
};
