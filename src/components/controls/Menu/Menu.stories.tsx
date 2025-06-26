import type { Meta, StoryObj } from '@storybook/react';
import Menu from './index';
import { mockOptions } from './__test__/mocks';

const meta: Meta<typeof Menu> = {
  title: 'Controls/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of menu options to display',
    },
    getCurrentPath: {
      action: 'pathChanged',
      description: 'Callback function when a menu item is clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    options: mockOptions,
    getCurrentPath: (path: string) => console.log(`Navigating to: ${path}`),
  },
};

export const Empty: Story = {
  args: {
    options: [],
    getCurrentPath: (path: string) => console.log(`Navigating to: ${path}`),
  },
};

export const SingleItem: Story = {
  args: {
    options: [
      {
        path: '/dashboard',
        icon: 'dashboard',
        name: 'Dashboard',
      },
    ],
    getCurrentPath: (path: string) => console.log(`Navigating to: ${path}`),
  },
};
