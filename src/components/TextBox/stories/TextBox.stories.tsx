import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import TextBox from '../';
import { defaultArgs } from './mocks';
import { ComponentSize } from '../../types';

const meta = {
  title: 'Components/TextBox',
  component: TextBox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'Visual style variant of the input field.',
      table: {
        type: { summary: 'outlined | filled | standard' },
        defaultValue: { summary: 'outlined' },
      },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Size of the input field.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'HTML input type.',
      table: {
        type: { summary: 'text | email | password | number | tel | url | search' },
        defaultValue: { summary: 'text' },
      },
    },
    error: {
      control: 'boolean',
      description: 'When true, applies error styling to the field.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, the field is non-interactive.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'When true, the field stretches to fill its container width.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      description: 'When true, the value can be read but not edited.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A single-line text input field. Supports outlined, filled, and standard variants, multiple sizes, input type selection, and optional start/end adornments.',
      },
    },
  },
} satisfies Meta<typeof TextBox>;

export default meta;

type Story = StoryObj<typeof meta>;

const ControlledTextBox = (args: React.ComponentProps<typeof TextBox>) => {
  const [value, setValue] = useState('');
  return (
    <TextBox
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const TextBoxStatesStory = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <TextBox
        label="Default field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <TextBox
        label="Field with default value"
        defaultValue="Default value"
      />
      <TextBox
        label="Disabled field"
        disabled
        placeholder="You cannot type here"
      />
      <TextBox
        label="Read-only field"
        readOnly
        value="This text cannot be edited"
      />
      <TextBox
        label="Required field"
        required
        placeholder="This field is mandatory"
      />
      <TextBox
        label="Field with error"
        error
        helperText="Error message"
        defaultValue="Invalid value"
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ControlledTextBox {...args} />,
  args: defaultArgs,
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <TextBox label="Outlined" variant="outlined" placeholder="Outlined" />
      <TextBox label="Filled" variant="filled" placeholder="Filled" />
      <TextBox label="Standard" variant="standard" placeholder="Standard" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Available design variants for the text field.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <TextBox label="Small" size={ComponentSize.SMALL} placeholder="Small size" />
      <TextBox label="Medium" size={ComponentSize.MEDIUM} placeholder="Medium size" />
      <TextBox label="Large" size={ComponentSize.LARGE} placeholder="Large size" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Available size options for the text field.',
      },
    },
  },
};

export const States: Story = {
  render: () => <TextBoxStatesStory />,
  parameters: {
    docs: {
      description: {
        story: 'Different field states: default, with value, disabled, read-only, required, and error.',
      },
    },
  },
};

export const WithAdornments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <TextBox
        label="With start icon"
        startAdornment={
          <span style={{ fontSize: '20px' }}>&#128269;</span>
        }
        placeholder="Search..."
      />
      <TextBox
        label="With end icon"
        endAdornment={
          <span style={{ fontSize: '20px' }}>&#128274;</span>
        }
        type="password"
        placeholder="Password"
      />
      <TextBox
        label="With icons on both sides"
        startAdornment={
          <span style={{ fontSize: '20px' }}>&#128290;</span>
        }
        endAdornment={
          <span style={{ fontSize: '14px', color: '#666' }}>Numbers</span>
        }
        type="number"
        placeholder="Numbers only"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text fields with optional start or end adornments (icons or text elements).',
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <TextBox
        label="Full-width field"
        fullWidth
        placeholder="This field fills the full available width"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text field that expands to fill the full width of its container.',
      },
    },
  },
};
