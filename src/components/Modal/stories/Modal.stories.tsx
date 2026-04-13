import { within, expect } from 'storybook/test';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { level: 2, name: /modal title/i })).toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: /^close$/i })).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard modal with title, content, and close button.',
      },
    },
  },
};

export const WithFooter: Story = {
  args: withFooter,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Cancel')).toBeInTheDocument();
    await expect(canvas.getByText('Save Changes')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with a custom footer that can include action buttons.',
      },
    },
  },
};

export const WithoutTitle: Story = {
  args: withoutTitle,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('heading')).not.toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal without title or close button. Useful for content that handles its own closing.',
      },
    },
  },
};

export const WithCustomSize: Story = {
  args: withCustomSize,
  play: async ({ canvasElement }) => {
    await expect(canvasElement.querySelector('.large')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with a custom size (small, medium, large, xlarge).',
      },
    },
  },
};

export const WithLongContent: Story = {
  args: withLongContent,
  parameters: {
    docs: {
      description: {
        story: 'Modal with long content that generates vertical scrolling.',
      },
    },
  },
};

export const WithCustomCloseText: Story = {
  args: withCustomCloseText,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: /close window/i })).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with custom text for the close button.',
      },
    },
  },
};

// Example of usage with interactive controls
export const Interactive: Story = {
  args: {
    ...baseArgs,
    title: 'Interactive Modal',
    children: 'Use the Storybook panel controls to modify the modal properties.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example where you can modify the modal properties using the Storybook panel controls.',
      },
    },
  },
};
