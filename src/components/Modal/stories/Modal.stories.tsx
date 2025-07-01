import type { Meta, StoryObj } from '@storybook/react';
import Modal from '..';
import { 
  baseArgs, 
  withFooter, 
  withoutTitle, 
  withCustomSize, 
  withLongContent,
  withCustomCloseText
} from './mocks';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Indica si el modal está abierto o cerrado',
    },
    onClose: {
      action: 'closed',
      description: 'Función que se ejecuta cuando se cierra el modal',
    },
    title: {
      control: 'text',
      description: 'Título del modal',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Tamaño del modal',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Indica si se muestra el botón de cerrar',
    },
    closeButtonText: {
      control: 'text',
      description: 'Texto personalizado para el botón de cerrar',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Indica si el modal se cierra al hacer clic fuera de él',
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'Indica si el modal se cierra al presionar la tecla Escape',
    },
    centerVertically: {
      control: 'boolean',
      description: 'Indica si el modal debe centrarse verticalmente',
    },
    preventScroll: {
      control: 'boolean',
      description: 'Indica si se debe deshabilitar el scroll del body cuando el modal está abierto',
    },
  },
  args: baseArgs,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Modal estándar con título, contenido y botón de cerrar.',
      },
    },
  },
};

export const WithFooter: Story = {
  args: withFooter,
  parameters: {
    docs: {
      description: {
        story: 'Modal con un pie de página personalizado que puede incluir botones de acción.',
      },
    },
  },
};

export const WithoutTitle: Story = {
  args: withoutTitle,
  parameters: {
    docs: {
      description: {
        story: 'Modal sin título ni botón de cerrar. Útil para contenido que maneja su propio cierre.',
      },
    },
  },
};

export const WithCustomSize: Story = {
  args: withCustomSize,
  parameters: {
    docs: {
      description: {
        story: 'Modal con un tamaño personalizado (small, medium, large, xlarge).',
      },
    },
  },
};

export const WithLongContent: Story = {
  args: withLongContent,
  parameters: {
    docs: {
      description: {
        story: 'Modal con contenido largo que genera desplazamiento vertical.',
      },
    },
  },
};

export const WithCustomCloseText: Story = {
  args: withCustomCloseText,
  parameters: {
    docs: {
      description: {
        story: 'Modal con texto personalizado para el botón de cerrar.',
      },
    },
  },
};

// Ejemplo de uso con controles interactivos
export const Interactive: Story = {
  args: {
    ...baseArgs,
    title: 'Modal Interactivo',
    children: 'Usa los controles del panel de Storybook para modificar las propiedades del modal.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo interactivo donde puedes modificar las propiedades del modal usando los controles del panel de Storybook.',
      },
    },
  },
};
