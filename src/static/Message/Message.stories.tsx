import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Message from './index';
import { mockMessages } from './__tests__/mocks';
import type { MessageProps } from './types';

const meta: Meta<MessageProps> = {
  title: 'Static/Message',
  component: Message,
  tags: ['autodocs'],
  args: {
    type: 'info',
    children: 'Mensaje de ejemplo',
    title: 'Título del mensaje',
    closable: false,
    'data-testid': 'message-story',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'danger'],
      description: 'Tipo de mensaje a mostrar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: 'text',
      description: 'Título opcional del mensaje',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: 'text',
      description: 'Contenido principal del mensaje',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Indica si el mensaje puede ser cerrado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClose: {
      action: 'closed',
      description: 'Función que se ejecuta al cerrar el mensaje',
      table: {
        type: { summary: '() => void' },
      },
    },
    className: {
      control: 'text',
      description: 'Clase CSS personalizada',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Estilos en línea',
      table: {
        type: { summary: 'CSSProperties' },
      },
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Un componente que muestra mensajes de estado (éxito, información, advertencia y peligro) para proporcionar retroalimentación visual clara a los usuarios. Incluye soporte para iconos, cierre opcional y es completamente accesible.'
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Message>;

/**
 * Mensaje predeterminado
 * 
 * Ejemplo básico de un mensaje con las configuraciones por defecto.
 */
export const Default: Story = {
  args: {
    type: 'info',
    children: 'Mensaje de ejemplo',
    title: 'Título del mensaje',
    closable: false,
    'data-testid': 'message-story',
  },
  parameters: {
    docs: {
      description: {
        story: 'Mensaje básico con la configuración por defecto. Por defecto es de tipo "info".'
      }
    }
  }
};

/**
 * Tipos de mensaje disponibles
 * 
 * Muestra los diferentes estilos de mensaje según su tipo.
 */
export const TiposDeMensaje: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      {mockMessages.map(({ type, title, content }) => (
        <div key={type}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </h3>
          <Message 
            type={type}
            title={title}
            style={{ marginBottom: '1rem' }}
          >
            {content}
          </Message>
          
          <Message 
            type={type}
            closable
            onClose={() => console.log(`Mensaje ${type} cerrado`)}
          >
            {content} (cerrable)
          </Message>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de los diferentes tipos de mensajes disponibles, incluyendo versiones cerrables de cada uno.'
      }
    }
  }
};

/**
 * Mensaje con contenido personalizado
 * 
 * Ejemplos de mensajes con contenido HTML personalizado y estilos adicionales.
 */
export const ContenidoPersonalizado: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Mensaje con enlace personalizado */}
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>Mensaje con enlace personalizado</h3>
        <Message 
          type="success" 
          title="¡Operación exitosa!"
          style={{ marginBottom: '1rem' }}
        >
          {`El proceso se ha completado correctamente. Puedes ver los resultados en la sección de `}
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
              outline: 'inherit',
              fontWeight: 'bold'
            }}
          >
            informes
          </button>
          {'.'}
        </Message>
      </div>
      
      {/* Mensaje con iconos personalizados */}
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>Mensaje con contenido personalizado</h3>
        <Message 
          type="info"
          title="Nueva característica disponible"
          closable
          onClose={() => console.log('Mensaje de característica cerrado')}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🎉</span>
            <div>
              <p style={{ margin: '0 0 0.5rem 0' }}>Hemos mejorado la interfaz de usuario.</p>
              <p style={{ margin: 0 }}>¡Descubre las novedades en el panel de control!</p>
            </div>
          </div>
        </Message>
      </div>
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
    type: 'info',
    children: 'Este es un mensaje sin título. Útil para mensajes cortos y directos.',
    title: undefined,
    closable: false,
    'data-testid': 'message-story'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un mensaje sin título, mostrando solo el contenido.'
      }
    }
  }
};
