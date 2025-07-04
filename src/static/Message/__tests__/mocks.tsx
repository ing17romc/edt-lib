import React from 'react';
import type { MessageType, MessageProps } from '../types';

/**
 * Tipos de mensaje disponibles para pruebas
 */
export const messageTypes: MessageType[] = ['success', 'info', 'warning', 'danger'];

/**
 * Datos de ejemplo para las pruebas del componente Message
 */
export const mockMessages: Array<{
  type: MessageType;
  title: string;
  content: string;
}> = [
  {
    type: 'success',
    title: '¡Operación exitosa!',
    content: 'Los cambios se han guardado correctamente.',
  },
  {
    type: 'info',
    title: 'Información importante',
    content: 'Este es un mensaje informativo para el usuario.',
  },
  {
    type: 'warning',
    title: 'Advertencia',
    content: 'Esta acción no se puede deshacer.',
  },
  {
    type: 'danger',
    title: 'Error',
    content: 'Ha ocurrido un error al procesar la solicitud.',
  },
];

/**
 * Props por defecto para el componente Message en pruebas
 */
export const defaultProps: MessageProps = {
  type: 'info',
  children: 'Mensaje de prueba',
};

/**
 * Función para generar props personalizadas para pruebas
 */
export const createTestProps = (
  customProps: Partial<MessageProps> = {}
): MessageProps => ({
  ...defaultProps,
  'data-testid': 'test-message',
  ...customProps,
});

/**
 * Mock para la función onClose
 */
export const mockOnClose = jest.fn();

/**
 * Datos para probar el componente con diferentes combinaciones de props
 */
export const testCases = [
  // Caso básico sin título
  {
    name: 'sin título',
    props: {
      children: 'Mensaje sin título',
    },
  },
  // Caso con título
  {
    name: 'con título',
    props: {
      title: 'Título del mensaje',
      children: 'Contenido del mensaje',
    },
  },
  // Caso con cierre
  {
    name: 'con cierre',
    props: {
      closable: true,
      onClose: jest.fn(), // Reemplazado por un mock de Jest
      children: 'Mensaje cerrable',
    },
  },
  // Caso con HTML en children
  {
    name: 'con HTML en children',
    props: {
      children: (
        <React.Fragment>
          <span>Texto en </span>
          <strong>negrita</strong>
          <span> y más texto</span>
        </React.Fragment>
      ),
    },
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
