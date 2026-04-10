import type { Meta, StoryObj } from '@storybook/react-vite';
import Modal from '..';
import { 
  baseArgs, 
  withFooter, 
  withoutTitle, 
  withCustomSize, 
  withLongContent,
  withCustomCloseText
} from './mocks';
import { ComponentSize } from '../../types';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the modal is visible.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onClose: {
      action: 'closed',
      description: 'Callback fired when the modal requests to be closed.',
      table: { type: { summary: '() => void' } },
    },
    title: {
      control: 'text',
      description: 'Heading text displayed at the top of the modal.',
      table: { type: { summary: 'string' } },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Controls the maximum width of the modal dialog.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'When true, renders a close button in the modal header.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    closeButtonText: {
      control: 'text',
      description: 'Custom label for the close button.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'Close' } },
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'When true, clicking outside the modal closes it.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'When true, pressing the Escape key closes the modal.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    centerVertically: {
      control: 'boolean',
      description: 'When true, the modal is vertically centered in the viewport.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    preventScroll: {
      control: 'boolean',
      description: 'When true, disables body scrolling while the modal is open.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    children: {
      control: 'text',
      description: 'Main content rendered inside the modal body.',
      table: { type: { summary: 'ReactNode' } },
    },
    footer: {
      control: false,
      description: 'Optional content rendered in the modal footer (e.g. action buttons).',
      table: { type: { summary: 'ReactNode' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A dialog overlay component that renders content in a layer above the page. Supports configurable size, close behaviors, optional action footer, and focus trapping for accessibility.',
      },
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
