import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Message from './index';

export default {
  title: 'Static/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Componente para mostrar mensajes de retroalimentación al usuario con diferentes niveles de importancia.'
      },
    },
  },
  args: {
    children: 'Mensaje de ejemplo',
    title: 'Título del mensaje',
    type: 'info',
    closable: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'danger'],
      description: 'Tipo de mensaje',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: 'text',
      description: 'Título opcional',
    },
    children: {
      control: 'text',
      description: 'Contenido principal',
    },
    closable: {
      control: 'boolean',
      description: 'Permite cerrar el mensaje',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onClose: {
      action: 'onClose',
      description: 'Manejador de cierre',
    },
  },
} as Meta<typeof Message>;

type Story = StoryObj<typeof Message>;

export const Default: Story = {};

export const WithTitle: Story = {
  args: {
    title: 'Título del mensaje',
    children: 'Este es un mensaje con título.',
  },
};

export const Closable: Story = {
  args: {
    title: 'Mensaje importante',
    children: 'Este mensaje se puede cerrar.',
    closable: true,
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Message type="success" title="Éxito">
        Operación completada correctamente.
      </Message>
      <Message type="info" title="Información">
        Este es un mensaje informativo.
      </Message>
      <Message type="warning" title="Advertencia">
        Esta acción no se puede deshacer.
      </Message>
      <Message type="danger" title="Error">
        Ha ocurrido un error al procesar la solicitud.
      </Message>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Message type="info" title="Actualización disponible">
      <div>
        <p>Nuevas características disponibles:</p>
        <ul style={{ margin: '0.5rem 0 0 1rem', paddingLeft: '1rem' }}>
          <li>Mejoras en el rendimiento</li>
          <li>Nuevas funcionalidades</li>
          <li>Correcciones de errores</li>
        </ul>
      </div>
    </Message>
  ),
};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
    children: 'Este es un mensaje sin título. Útil para mensajes cortos y directos.',
  },
};
