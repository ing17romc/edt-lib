import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './index';

const meta: Meta<typeof Pagination> = {
  title: 'Controls/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalCount: {
      control: { type: 'number', min: 1 },
      description: 'Total number of items to paginate',
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page',
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Function called when page is changed',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
  args: {
    totalCount: 10,
    currentPage: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export const ManyPages: Story = {
  args: {
    totalCount: 50,
    currentPage: 25,
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'custom-pagination',
  },
};
