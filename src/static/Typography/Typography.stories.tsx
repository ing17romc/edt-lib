import type { Meta, StoryObj } from '@storybook/react';
import Typography from './index';

/**
 * Componente Typography
 * 
 * Este componente muestra ejemplos de estilos tipográficos (headings y párrafos) para la librería EDT.
 * Útil para visualizar y validar la apariencia de los estilos definidos en la librería.
 */
const meta: Meta<typeof Typography> = {
  title: 'Static/Typography',
  component: Typography,
  tags: ['autodocs', 'static'],
  parameters: {
    componentSubtitle: 'Guía de estilos tipográficos',
    docs: {
      description: {
        component: 'Muestra ejemplos de los estilos tipográficos disponibles en la aplicación.'
      },
    },
  },
  // No hay controles ya que el componente no acepta props actualmente
  // Se deja el objeto vacío para futuras extensiones
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Vista por defecto que muestra todos los estilos tipográficos disponibles.'
      }
    }
  }
};
