import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './index';

// Meta information for the component
const meta = {
  title: 'Controls/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable radio button component that supports different states and configurations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    value: { control: 'text' },
    eventChange: { action: 'changed' },
  },
} as Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof RadioButton>;

// Default story
export const Default: Story = {
  args: {
    id: 'option1',
    name: 'options',
    label: 'Option 1',
    value: '',
  },
};

// Radio button group component
const RadioButtonGroup = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioButton
        id="option1"
        name="options"
        label="Option 1"
        value={selectedValue}
        eventChange={(e) => setSelectedValue(e.target.id)}
      />
      <RadioButton
        id="option2"
        name="options"
        label="Option 2"
        value={selectedValue}
        eventChange={(e) => setSelectedValue(e.target.id)}
      />
      <RadioButton
        id="option3"
        name="options"
        label="Option 3 (Disabled)"
        value={selectedValue}
        disabled
        eventChange={(e) => setSelectedValue(e.target.id)}
      />
    </div>
  );
};

// Group of radio buttons
export const Group: Story = {
  render: () => <RadioButtonGroup />,
};

// Disabled state
export const Disabled: Story = {
  args: {
    id: 'disabled-option',
    name: 'disabled-group',
    label: 'Disabled Option',
    value: '',
    disabled: true,
  },
};

// Required state
export const Required: Story = {
  args: {
    id: 'required-option',
    name: 'required-group',
    label: 'Required Option',
    value: '',
    required: true,
  },
};

// Read-only state
export const ReadOnly: Story = {
  args: {
    id: 'readonly-option',
    name: 'readonly-group',
    label: 'Read-Only Option',
    value: '',
    readOnly: true,
  },
};
