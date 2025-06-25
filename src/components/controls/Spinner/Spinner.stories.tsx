import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './index';

/**
 * Componente Spinner que muestra un indicador de carga.
 * Proporciona una animación visual para indicar que algo está cargando.
 */
const meta: Meta<typeof Spinner> = {
  title: 'Controls/Spinner',
  component: Spinner,
  tags: ['autodocs', 'controls'],
  parameters: {
    componentSubtitle: 'Componente de carga',
    docs: {
      description: {
        component: 'Un indicador visual que muestra que se está realizando una operación de carga.'
      },
    },
  },
  argTypes: {
    show: {
      description: 'Controla si el spinner es visible o no',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    show: true,
  },
};

export const Hidden: Story = {
  args: {
    show: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'El spinner no se muestra cuando la propiedad `show` es falsa.'
      }
    }
  }
};
