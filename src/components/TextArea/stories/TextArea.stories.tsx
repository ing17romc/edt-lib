import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import TextArea from '../';
import { defaultArgs } from './mocks';
import { ComponentSize } from '../../types';

export default {
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
} as Meta;

// Base template
type Story = StoryObj<typeof TextArea>;
export type { Story };

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

export const Default: Story = {
  render: (args) => <ControlledTextArea {...args} />,
  args: {
    ...defaultArgs,
  },
};

// Historia de variantes
export const Variants = () => {
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
Variants.parameters = {
  docs: {
    description: {
      story: 'Available design variants for the text area.',
    },
  },
};

// Historia de tamaños
export const Sizes = () => {
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
Sizes.parameters = {
  docs: {
    description: {
      story: 'Available size options for the text area.',
    },
  },
};

// Historia de estados
export const States = () => {
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
States.parameters = {
  docs: {
    description: {
      story: 'Different field states: default, with pre-filled value, disabled, read-only, required, and error.',
    },
  },
};

// Historia con límite de caracteres
export const WithCharacterLimit = () => {
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
WithCharacterLimit.parameters = {
  docs: {
    description: {
      story: 'Text area with a character limit and a live counter in the helper text.',
    },
  },
};

// Historia con redimensionamiento automático
export const AutoResize = () => {
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
AutoResize.parameters = {
  docs: {
    description: {
      story: 'Área de texto con redimensionamiento automático según el contenido.',
    },
  },
};

// Historia de ancho completo
export const FullWidth = () => {
  const [value, setValue] = useState('');
  
  return (
    <div style={{ width: '100%' }}>
      <TextArea 
        label="Comentario" 
        fullWidth 
        placeholder="Escribe tu comentario aquí..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="Este campo ocupa todo el ancho disponible"
        rows={4}
      />
    </div>
  );
};
FullWidth.parameters = {
  docs: {
    description: {
      story: 'Área de texto que ocupa todo el ancho disponible en su contenedor.',
    },
  },
};
