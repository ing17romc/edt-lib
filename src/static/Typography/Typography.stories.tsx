import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Typography from './index';
import { mockTypographyProps } from './__tests__/mocks';

/**
 * # Componente Typography
 * 
 * El componente Typography es una guía visual que muestra todos los estilos tipográficos 
 * disponibles en la aplicación, incluyendo encabezados, párrafos y ejemplos de interlineado.
 * 
 * Este componente es especialmente útil para:
 * - Visualizar la jerarquía tipográfica del diseño
 * - Asegurar la consistencia visual en toda la aplicación
 * - Documentar los estilos tipográficos para el equipo de desarrollo
 */
const meta: Meta<typeof Typography> = {
  title: 'Static/Typography',
  component: Typography,
  tags: ['autodocs', 'static'],
  parameters: {
    componentSubtitle: 'Guía de estilos tipográficos',
    docs: {
      description: {
        component: (
          'Muestra ejemplos de los estilos tipográficos disponibles en la aplicación, ' +
          'incluyendo encabezados (h1-h6), párrafos con diferentes tamaños y ejemplos de interlineado.'
        ),
      },
    },
  },
  argTypes: {
    showCodeExamples: {
      control: 'boolean',
      description: 'Muestra ejemplos de código para cada elemento tipográfico',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Clase CSS adicional para el contenedor principal',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    ...mockTypographyProps,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Typography>;

/**
 * ## Vista por defecto
 * 
 * Muestra todos los estilos tipográficos con ejemplos de código para cada elemento.
 * Incluye encabezados (h1-h6), párrafos con diferentes tamaños y ejemplos de interlineado.
 */
export const Default: Story = {
  args: {
    showCodeExamples: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra todos los estilos tipográficos con ejemplos de código para cada elemento.'
      }
    }
  }
};

/**
 * ## Sin ejemplos de código
 * 
 * Muestra los estilos tipográficos sin los ejemplos de código, útil para una vista más limpia.
 */
export const WithoutCodeExamples: Story = {
  args: {
    showCodeExamples: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra los estilos tipográficos sin los ejemplos de código, ideal para revisiones de diseño.'
      }
    }
  }
};

/**
 * ## Con clase personalizada
 * 
 * Demuestra cómo se puede personalizar el componente aplicando una clase CSS personalizada.
 */
export const WithCustomClass: Story = {
  args: {
    className: 'custom-typography',
    showCodeExamples: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra cómo aplicar una clase CSS personalizada al contenedor principal del componente.'
      }
    }
  },
  decorators: [
    (Story) => (
      <>
        <style>
          {`
            .custom-typography {
              border: 2px dashed #e0e0e0;
              border-radius: 8px;
              padding: 1.5rem;
              background-color: #f9f9f9;
            }
            .custom-typography h1,
            .custom-typography h2 {
              color: #2c3e50;
            }
          `}
        </style>
        <Story />
      </>
    ),
  ],
};

/**
 * ## En contexto
 * 
 * Muestra el componente Typography en un contexto similar al de una aplicación real,
 * con un encabezado, contenido y pie de página.
 */
export const InContext: Story = {
  args: {
    showCodeExamples: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo del componente Typography en un contexto similar al de una aplicación real.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="app-layout">
        <header style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          borderBottom: '1px solid #e0e0e0',
          marginBottom: '2rem'
        }}>
          <h1 style={{ margin: 0 }}>Aplicación de Ejemplo</h1>
          <p style={{ margin: '0.5rem 0 0', color: '#666' }}>Barra de navegación</p>
        </header>
        
        <main style={{ padding: '0 1rem' }}>
          <Story />
        </main>
        
        <footer style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          borderTop: '1px solid #e0e0e0',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: '#666'
        }}>
          © 2023 Mi Aplicación. Todos los derechos reservados.
        </footer>
      </div>
    ),
  ],
};
