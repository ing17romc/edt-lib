import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CheckButton from '../index';

const meta: Meta<typeof CheckButton> = {
  title: 'Components/CheckButton',
  component: CheckButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto que se muestra junto al checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Estado del checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
    },
    onChange: {
      action: 'changed',
      description: 'Función que se ejecuta al cambiar el estado',
    },
    className: {
      control: 'text',
      description: 'Clase CSS personalizada',
    },
  },
  args: {
    label: 'Opción de ejemplo',
    checked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof CheckButton>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Opción seleccionada',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Opción deshabilitada',
  },
};

export const Large: Story = {
  args: {
    label: 'Opción grande',
    className: 'check-button--large',
  },
};

export const Small: Story = {
  args: {
    label: 'Opción pequeña',
    className: 'check-button--small',
  },
};

interface InteractiveTemplateProps {
  label?: string;
  disabled?: boolean;
  className?: string;
}

const InteractiveTemplate = (args: InteractiveTemplateProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <CheckButton
      {...args}
      checked={checked}
      onChange={(isChecked) => setChecked(isChecked)}
    />
  );
};

export const Interactive: Story = {
  render: InteractiveTemplate,
  args: {
    label: 'Haz clic para cambiar',
  },
};

// Grupo de checkboxes
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

    const options = [
      { id: '1', label: 'Opción 1' },
      { id: '2', label: 'Opción 2' },
      { id: '3', label: 'Opción 3' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {options.map((option) => (
          <CheckButton
            key={option.id}
            label={option.label}
            checked={selected.includes(option.id)}
            onChange={() => handleChange(option.id)}
          />
        ))}
        <div style={{ marginTop: '16px' }}>
          <p>Seleccionados: {selected.length > 0 ? selected.join(', ') : 'Ninguno'}</p>
        </div>
      </div>
    );
  },
};
