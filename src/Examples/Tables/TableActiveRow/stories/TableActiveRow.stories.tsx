import type { Meta, StoryObj } from '@storybook/react-vite';
import TableActiveRow from '..';
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
    status: 1, // Using number to show it also accepts number as status
  },
  {
    name: 'Michael Wilson',
    userName: 'mwilson',
    status: 0, // Using 0 to show inactive status
  },
];

// Storybook component configuration
const meta: Meta<typeof TableActiveRow> = {
  title: 'Examples/Tables/TableActiveRow',
  component: TableActiveRow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Table with selectable rows that highlight on click. Useful for displaying tabular data where interaction with specific rows is needed.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TableActiveRow>;

// Default story
export const Default: Story = {
  args: {
    dataTable: sampleData,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with selectable rows. Click on any row to see the highlight.',
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
        story: 'Table with no data. Shows an empty table without data rows.',
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
        story: 'Table with a single row of data.',
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
        story: 'Table with multiple rows to test scrolling and interaction with many rows.',
      },
    },
  },
};
