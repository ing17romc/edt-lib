import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import TextArea from '../';
import { defaultArgs } from './mocks';
import { ComponentSize } from '../../types';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'Visual style variant of the text area.',
      table: {
        type: { summary: 'outlined | filled | standard' },
        defaultValue: { summary: 'outlined' },
      },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Size of the text area field.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Minimum number of visible text rows.',
      table: { type: { summary: 'number' } },
    },
    maxLength: {
      control: { type: 'number', min: 1 },
      description: 'Maximum number of characters the user can enter.',
      table: { type: { summary: 'number' } },
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
    autoResize: {
      control: 'boolean',
      description: 'When true, the field height adjusts automatically as the user types.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A multi-line text input field. Supports outlined, filled, and standard variants, multiple sizes, character limits, and automatic height resizing.',
      },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story
const ControlledTextArea = (args: React.ComponentProps<typeof TextArea>) => {
  const [value, setValue] = useState('');
  return (
    <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const TextAreaVariantsStory = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <TextArea
        label="Outlined"
        variant="outlined"
        placeholder="Outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextArea
        label="Filled"
        variant="filled"
        placeholder="Filled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextArea
        label="Standard"
        variant="standard"
        placeholder="Standard"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const TextAreaSizesStory = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <TextArea
        label="Small"
        size={ComponentSize.SMALL}
        placeholder="Small size"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextArea
        label="Medium"
        size={ComponentSize.MEDIUM}
        placeholder="Medium size"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextArea
        label="Large"
        size={ComponentSize.LARGE}
        placeholder="Large size"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const TextAreaStatesStory = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <TextArea
        label="Default field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <TextArea
        label="Field with default value"
        defaultValue="This is the default content in the text area. You can edit it."
        rows={4}
      />
      <TextArea
        label="Disabled field"
        disabled
        value="This text area is disabled"
        rows={2}
      />
      <TextArea
        label="Read-only field"
        readOnly
        value="This text area is read-only. Its content cannot be edited."
        rows={3}
      />
      <TextArea
        label="Required field"
        required
        placeholder="This field is mandatory"
        rows={2}
      />
      <TextArea
        label="Field with error"
        error
        helperText="This field is required"
        value="Invalid value"
        rows={2}
      />
    </div>
  );
};

const TextAreaCharacterLimitStory = () => {
  const [value, setValue] = useState('');
  const maxLength = 100;

  return (
    <div style={{ maxWidth: '600px' }}>
      <TextArea
        label="Comment"
        placeholder="Write your comment (max 100 characters)"
        maxLength={maxLength}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText={`${value.length}/${maxLength} characters`}
        rows={4}
      />
    </div>
  );
};

const TextAreaAutoResizeStory = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ maxWidth: '600px' }}>
      <TextArea
        label="Description"
        placeholder="Write a description (will resize automatically)"
        autoResize
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="The text area grows automatically as you type"
        minRows={2}
        maxRows={8}
      />
    </div>
  );
};

const TextAreaFullWidthStory = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ width: '100%' }}>
      <TextArea
        label="Comment"
        fullWidth
        placeholder="Write your comment here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="This field spans the full available width"
        rows={4}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    ...defaultArgs,
  },
};

export const Variants: Story = {
  render: () => <TextAreaVariantsStory />,
  parameters: {
    docs: {
      description: {
        story: 'Available design variants for the text area.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => <TextAreaSizesStory />,
  parameters: {
    docs: {
      description: {
        story: 'Available size options for the text area.',
      },
    },
  },
};

export const States: Story = {
  render: () => <TextAreaStatesStory />,
  parameters: {
    docs: {
      description: {
        story: 'Different field states: default, with pre-filled value, disabled, read-only, required, and error.',
      },
    },
  },
};

export const WithCharacterLimit: Story = {
  render: () => <TextAreaCharacterLimitStory />,
  parameters: {
    docs: {
      description: {
        story: 'Text area with a character limit and a live counter in the helper text.',
      },
    },
  },
};

export const AutoResize: Story = {
  render: () => <TextAreaAutoResizeStory />,
  parameters: {
    docs: {
      description: {
        story: 'Text area with automatic resizing based on its content.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => <TextAreaFullWidthStory />,
  parameters: {
    docs: {
      description: {
        story: 'Text area that expands to fill the full available width of its container.',
      },
    },
  },
};
