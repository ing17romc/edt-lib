import type { Meta } from '@storybook/react';
import type { MessageType, MessageProps } from '../types';

/**
 * Datos de ejemplo para los mensajes
 */
export const mockMessages: Array<{
  type: MessageType;
  title: string;
  content: string;
}> = [
  {
    type: 'success',
    title: '¡Éxito!',
    content: 'La operación se completó correctamente.',
  },
  {
    type: 'info',
    title: 'Información',
    content: 'Este es un mensaje informativo.',
  },
  {
    type: 'warning',
    title: 'Advertencia',
    content: 'Esta acción requiere su atención.',
  },
  {
    type: 'danger',
    title: 'Error',
    content: 'Ha ocurrido un error inesperado.',
  },
];

/**
 * Tipos de mensaje disponibles para los controles de Storybook
 */
export const messageTypes: MessageType[] = ['success', 'info', 'warning', 'danger'];

/**
 * Argumentos por defecto para el componente Message
 */
export const defaultArgs: Partial<MessageProps> = {
  type: 'info',
  title: 'Título del mensaje',
  children: 'Contenido del mensaje de ejemplo.',
};


/**
 * Controles para los argumentos en Storybook
 */
export const argTypes: Meta<typeof defaultArgs>['argTypes'] = {
  type: {
    control: { type: 'select' },
    options: messageTypes,
    description: 'Tipo de mensaje a mostrar',
    table: {
      type: { summary: messageTypes.map(t => `'${t}'`).join(' | ') },
      defaultValue: { summary: 'info' },
    },
  },
  title: {
    control: { type: 'text' },
    description: 'Título opcional del mensaje',
    table: {
      type: { summary: 'string' },
    },
  },
  children: {
    control: { type: 'text' },
    description: 'Contenido del mensaje',
    table: {
      type: { summary: 'ReactNode' },
    },
  },
  className: {
    control: { type: 'text' },
    description: 'Clases CSS adicionales',
    table: {
      type: { summary: 'string' },
    },
  },
};
