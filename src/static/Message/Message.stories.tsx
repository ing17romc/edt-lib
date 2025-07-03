import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Message from './index';
import { mockMessages, defaultArgs, argTypes } from './stories/mocks';
import type { MessageProps } from './types';

const meta: Meta<MessageProps> = {
  title: 'Static/Message',
  component: Message,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes: {
    ...argTypes,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Un componente que muestra mensajes de estado (éxito, información, advertencia y peligro) para proporcionar retroalimentación visual clara a los usuarios.'
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Message>;

/**
 * Mensaje predeterminado
 */
export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

/**
 * Tipos de mensaje disponibles
 */
export const TiposDeMensaje: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {mockMessages.map(({ type, title, content }) => (
        <Message 
          key={type} 
          type={type} 
          title={title}
        >
          {content}
        </Message>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de los diferentes tipos de mensajes disponibles.'
      }
    }
  }
};

/**
 * Mensaje con contenido personalizado
 */
export const ContenidoPersonalizado: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <Message 
        type="success" 
        title="¡Operación exitosa!"
        style={{ marginBottom: '1rem' }}
      >
        El proceso se ha completado correctamente. Puedes ver los resultados en la sección de{' '}
        <button 
          onClick={() => {
            // Simular la navegación a la sección de informes
            console.log('Navegando a la sección de informes');
          }} 
          style={{ 
            background: 'none',
            border: 'none',
            color: 'inherit',
            textDecoration: 'underline',
            padding: 0,
            font: 'inherit',
            cursor: 'pointer',
            outline: 'inherit'
          }}
        >
          informes
        </button>.
      </Message>
      
      <Message 
        type="info"
        title="Nueva característica disponible"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🎉</span>
          <div>
            <p style={{ margin: '0 0 0.5rem 0' }}>Hemos mejorado la interfaz de usuario.</p>
            <button 
              type="button" 
              onClick={() => console.log('Ver novedades')}
              style={{ 
                background: 'none',
                border: '1px solid currentColor',
                color: 'inherit',
                borderRadius: '4px',
                padding: '0.25rem 0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              Ver novedades
            </button>
          </div>
        </div>
      </Message>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de mensajes con contenido HTML personalizado y estilos adicionales.'
      }
    }
  }
};

/**
 * Mensaje sin título
 */
export const SinTitulo: Story = {
  args: {
    ...defaultArgs,
    title: undefined,
    children: 'Este es un mensaje sin título. Útil para mensajes cortos y directos.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un mensaje sin título, mostrando solo el contenido.'
      }
    }
  }
};
