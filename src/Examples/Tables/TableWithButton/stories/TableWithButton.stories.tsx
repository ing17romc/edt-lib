import type { Meta, StoryObj } from '@storybook/react-vite';
import TableWithButton from '..';
import type { TableRowData } from '../types';

// Sample data for stories
const sampleData: TableRowData[] = [
  {
    name: 'John Doe',
    userName: 'johndoe',
    status: true,
  },
  {
    name: 'Jane Smith',
    userName: 'janesmith',
    status: false,
  },
  {
    name: 'Robert Johnson',
    userName: 'rjohnson',
    status: true,
  },
  {
    name: 'Emily Davis',
    userName: 'edavis',
    status: 1,
  },
  {
    name: 'Michael Wilson',
    userName: 'mwilson',
    status: 0,
  },
];

// Storybook component configuration
const meta: Meta<typeof TableWithButton> = {
  title: 'Examples/Tables/TableWithButton',
  component: TableWithButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Table that includes action buttons (update and delete) in each row. Ideal for interfaces that require quick actions on individual records.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TableWithButton>;

// Default story
export const Default: Story = {
  args: {
    dataTable: sampleData,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with action buttons in each row. Buttons are configured with sample console actions.',
      },
    },
  },
};

// Empty initial state story
export const EmptyState: Story = {
  args: {
    dataTable: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with no data. Shows only the column headers and button headers.',
      },
    },
  },
};

// Single item story
export const SingleItem: Story = {
  args: {
    dataTable: [sampleData[0]],
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a single row of data and its respective action buttons.',
      },
    },
  },
};

// Many items story
export const ManyItems: Story = {
  args: {
    dataTable: [
      ...sampleData,
      {
        name: 'Sarah Williams',
        userName: 'swilliams',
        status: true,
      },
      {
        name: 'David Brown',
        userName: 'dbrown',
        status: false,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with multiple rows to test vertical scrolling with action buttons in each row.',
      },
    },
  },
};
