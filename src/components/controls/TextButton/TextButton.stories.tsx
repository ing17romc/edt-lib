import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextButton from './index';
import { ControlStyle } from './types';

export default {
  title: 'Controls/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable text button component that supports different styles and states.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['PRIMARY', 'SECONDARY', 'DANGER', 'SUCCESS', 'WARNING', 'INFO'] as ControlStyle[],
      description: 'The style variant of the button',
      table: {
        type: { summary: 'ControlStyle' },
        defaultValue: { summary: 'PRIMARY' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function to call when button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    text: {
      control: 'text',
      description: 'The text to display on the button',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the button',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta<typeof TextButton>;

type Story = StoryObj<typeof TextButton>;

export const Primary: Story = {
  args: {
    id: 'primary-button',
    text: 'Primary Button',
    type: 'PRIMARY',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    id: 'secondary-button',
    text: 'Secondary Button',
    type: 'SECONDARY',
  },
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    id: 'danger-button',
    text: 'Danger Button',
    type: 'DANGER',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    id: 'disabled-button',
    text: 'Disabled Button',
    disabled: true,
  },
};

const Template: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <TextButton {...args} text="Primary" type="PRIMARY" id="btn1" />
      <TextButton {...args} text="Secondary" type="SECONDARY" id="btn2" />
      <TextButton {...args} text="Danger" type="DANGER" id="btn3" />
      <TextButton {...args} text="Success" type="SUCCESS" id="btn4" />
      <TextButton {...args} text="Warning" type="WARNING" id="btn5" />
      <TextButton {...args} text="Info" type="INFO" id="btn6" />
    </div>
  ),
};

export const AllVariants = {
  ...Template,
  parameters: {
    docs: {
      description: {
        story: 'All available button variants in a row',
      },
    },
  },
};
