import { within, expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from '..';
import { ComponentSize } from '../../types';
import { 
  baseArgs, 
  withCustomLabels, 
  withManyPages, 
  disabledState, 
  firstPage, 
  lastPage,
  smallSize,
  largeSize
} from './mocks';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages.',
      table: { type: { summary: 'number' } },
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Currently active page (1-based).',
      table: { type: { summary: 'number' } },
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback fired with the new page number when the user navigates.',
      table: { type: { summary: '(page: number) => void' } },
    },
    maxPageButtons: {
      control: { type: 'number', min: 3, max: 10 },
      description: 'Maximum number of page buttons visible at once. Defaults to 5.',
      table: { type: { summary: 'number' }, defaultValue: { summary: '5' } },
    },
    previousLabel: {
      control: 'text',
      description: 'Label for the previous-page button.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '←' } },
    },
    nextLabel: {
      control: 'text',
      description: 'Label for the next-page button.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '→' } },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, all pagination controls are non-interactive.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for the pagination root element.',
      table: { type: { summary: 'string' } },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Size of the pagination buttons.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A navigation component for paginated data sets. Renders numbered page buttons with previous/next controls, configurable size, and a disabled state.',
      },
    },
  },
  args: baseArgs,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: baseArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Previous')).toBeInTheDocument();
    await expect(canvas.getByText('Next')).toBeInTheDocument();
    await expect(canvas.getByText('5')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard pagination with 10 pages and page 5 selected.',
      },
    },
  },
};

export const WithCustomLabels: Story = {
  args: withCustomLabels,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Previous')).toBeInTheDocument();
    await expect(canvas.getByText('Next')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with custom labels for navigation buttons.',
      },
    },
  },
};

export const WithManyPages: Story = {
  args: withManyPages,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ellipsis = canvas.getAllByText('...');
    await expect(ellipsis.length).toBeGreaterThan(0);
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many pages showing ellipsis for navigation.',
      },
    },
  },
};

export const Disabled: Story = {
  args: disabledState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    for (const button of buttons) {
      await expect(button).toBeDisabled();
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled pagination that does not respond to interactions.',
      },
    },
  },
};

export const FirstPage: Story = {
  args: firstPage,
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing the first page with the previous button disabled.',
      },
    },
  },
};

export const LastPage: Story = {
  args: lastPage,
  parameters: {
    docs: {
      description: {
        story: 'Pagination showing the last page.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: smallSize,
  play: async ({ canvasElement }) => {
    await expect(canvasElement.firstElementChild).toHaveClass('pagination--small');
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with small size (SMALL).',
      },
    },
  },
};

export const LargeSize: Story = {
  args: largeSize,
  play: async ({ canvasElement }) => {
    await expect(canvasElement.firstElementChild).toHaveClass('pagination--large');
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with large size (LARGE).',
      },
    },
  },
};
