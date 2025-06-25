import { Meta, StoryObj } from '@storybook/react';
import ImageButton from '.';
import { IconName } from '../Icon/types';

export default {
  title: 'Controls/ImageButton',
  component: ImageButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A button component that displays an icon with optional text. It can be used for various actions in the application.',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'required' },
      },
    },
    text: {
      control: 'text',
      description: 'Text to display as the button label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'required' },
      },
    },
    icon: {
      control: 'select',
      options: [
        'add', 'remove', 'edit', 'delete', 'search',
        'save', 'cancel', 'check', 'warning', 'info',
        'help', 'close'
      ] as IconName[],
      description: 'Icon to display on the button',
      table: {
        type: { summary: 'IconName' },
        defaultValue: { summary: 'required' },
      },
    },
    size: {
      control: 'select',
      options: ['SM', 'MD', 'LG', 'XL'],
      description: 'Size of the button and icon',
      table: {
        type: { summary: 'IconSize' },
        defaultValue: { summary: 'MD' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} as Meta<typeof ImageButton>;

type Story = StoryObj<typeof ImageButton>;

export const Default: Story = {
  args: {
    id: 'default-button',
    text: 'Click me',
    icon: 'add' as IconName,
    size: 'MD',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    id: 'disabled-button',
    text: 'Disabled Button',
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    id: 'large-button',
    text: 'Large Button',
    size: 'LG',
  },
};

export const WithCustomIcon: Story = {
  args: {
    ...Default.args,
    id: 'custom-icon-button',
    text: 'Settings',
    icon: 'settings' as IconName,
  },
};
