import type { Meta, StoryObj } from '@storybook/react-vite';
import TableWithPagination from '..';
import type { TableRowData } from '../types';

// Sample data for stories
const generateSampleData = (count: number): TableRowData[] => {
  const names = ['John', 'Jane', 'Robert', 'Emily', 'Michael', 'Sarah', 'David', 'Emma', 'James', 'Olivia'];
  const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez'];
  
  return Array.from({ length: count }, (_, i) => ({
    name: `${names[i % names.length]} ${lastNames[i % lastNames.length]}`,
    userName: `${(names[i % names.length] + lastNames[i % lastNames.length]).toLowerCase()}`,
    status: i % 3 === 0 ? true : i % 3 === 1 ? false : 1,
  }));
};

const smallDataset = generateSampleData(5);
const mediumDataset = generateSampleData(15);
const largeDataset = generateSampleData(50);

// Storybook component configuration
const meta: Meta<typeof TableWithPagination> = {
  title: 'Examples/Tables/TableWithPagination',
  component: TableWithPagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Table with pagination that allows navigating between pages of data and adjusting the number of rows shown per page. Ideal for large data sets that need to be divided into manageable pages.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TableWithPagination>;

// Default story
export const Default: Story = {
  args: {
    dataTable: mediumDataset,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with pagination showing 15 items by default, distributed across multiple pages as needed.',
      },
    },
  },
};

// Small dataset story
export const SmallDataset: Story = {
  args: {
    dataTable: smallDataset,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a small data set (less than one page).',
      },
    },
  },
};

// Large dataset story
export const LargeDataset: Story = {
  args: {
    dataTable: largeDataset,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a large data set (multiple pages) to test full pagination.',
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
        story: 'Table with no data. Shows a message indicating that no data is available.',
      },
    },
  },
};
