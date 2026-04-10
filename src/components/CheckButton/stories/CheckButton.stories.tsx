import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import CheckButton from '../index';
import { CheckButtonProps } from '../types';
import { ComponentSize } from '../../types';

// Base configuration for stories
const meta: Meta<CheckButtonProps> = {
  title: 'Components/CheckButton',
  component: CheckButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text label displayed next to the checkbox.',
      table: { type: { summary: 'string' } },
    },
    checked: {
      control: 'boolean',
      description: 'Controls the checked state of the checkbox.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, the checkbox is non-interactive and visually muted.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Size of the checkbox and its label.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the checked state changes.',
      table: { type: { summary: '(checked: boolean) => void' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for the root element.',
      table: { type: { summary: 'string' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A styled checkbox component that wraps a native input with a label. Supports multiple sizes, controlled and uncontrolled usage, and a disabled state.',
      },
    },
  },
  args: {
    label: 'Option label',
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Options for the checkbox group
const groupOptions = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
  { id: '3', label: 'Option 3' },
];

// Styles for the group container
const groupContainerStyle: React.CSSProperties = { 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '12px' 
};

const selectedItemsStyle: React.CSSProperties = { 
  marginTop: '16px' 
};

// Stories
export const Default: Story = {
  render: (args) => <CheckButton {...args} />,
  args: {
    label: 'Default option (medium)',
  },
};

export const SizeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CheckButton label={`Small size (${ComponentSize.SMALL})`} size={ComponentSize.SMALL} />
      <CheckButton label={`Medium size (${ComponentSize.MEDIUM}) - default`} size={ComponentSize.MEDIUM} />
      <CheckButton label={`Large size (${ComponentSize.LARGE})`} size={ComponentSize.LARGE} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing the different sizes available for the checkbox button.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled option',
  },
};

export const Large: Story = {
  args: {
    label: 'Large option',
    className: 'check-button--large',
  },
};

export const Small: Story = {
  args: {
    label: 'Small option',
    className: 'check-button--small',
  },
};

export const Interactive: Story = {
  render: function InteractiveTemplate(args) {
    const [checked, setChecked] = useState(false);
    return (
      <CheckButton
        {...args}
        checked={checked}
        onChange={(isChecked: boolean) => setChecked(isChecked)}
      />
    );
  },
  args: {
    label: 'Click to toggle',
  },
};

export const Group: Story = {
  render: function GroupRender() {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (value: string) => {
      setSelected(prev => 
        prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    };

    return (
      <div style={groupContainerStyle}>
        {groupOptions.map((option) => (
          <CheckButton
            key={option.id}
            label={option.label}
            checked={selected.includes(option.id)}
            onChange={() => handleChange(option.id)}
          />
        ))}
        <div style={selectedItemsStyle}>
          <p>Selected: {selected.length > 0 ? selected.join(', ') : 'None'}</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a checkbox group where multiple options can be selected.',
      },
    },
  },
};
