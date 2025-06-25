import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import { ButtonProps } from './types';

// Meta information for the component
const meta: Meta<typeof Button> = {
  title: 'Components/Controls/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component with various styles and sizes.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The text displayed on the button',
    },
    type: {
      control: {
        type: 'select',
        options: ['PRIMARY', 'SECONDARY', 'DANGER', 'SUCCESS', 'WARNING', 'INFO'],
      },
      description: 'The style variant of the button',
    },
    size: {
      control: {
        type: 'select',
        options: ['SM', 'MD', 'LG'],
      },
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button when true',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default story
const defaultArgs: ButtonProps = {
  title: 'Click me',
  type: 'PRIMARY',
  size: 'MD',
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    ...defaultArgs,
    type: 'SECONDARY',
    title: 'Secondary Button',
  },
};

// Danger variant
export const Danger: Story = {
  args: {
    ...defaultArgs,
    type: 'DANGER',
    title: 'Danger Button',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
    title: 'Disabled Button',
  },
};

// Small size
export const Small: Story = {
  args: {
    ...defaultArgs,
    size: 'SM',
    title: 'Small Button',
  },
};

// Large size
export const Large: Story = {
  args: {
    ...defaultArgs,
    size: 'LG',
    title: 'Large Button',
  },
};

// With click handler
export const WithClickHandler: Story = {
  args: {
    ...defaultArgs,
    title: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};
