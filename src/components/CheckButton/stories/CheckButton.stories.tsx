import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CheckButton from '../index';
import { CheckButtonProps } from '../types';
import { ComponentSize } from '../../types';

// Configuración base para las historias
const meta: Meta<CheckButtonProps> = {
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
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Tamaño',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
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
type Story = StoryObj<typeof meta>;

// Opciones para el grupo de checkboxes
const groupOptions = [
  { id: '1', label: 'Opción 1' },
  { id: '2', label: 'Opción 2' },
  { id: '3', label: 'Opción 3' },
];

// Estilos para el contenedor del grupo
const groupContainerStyle: React.CSSProperties = { 
  display: 'flex', 
  flexDirection: 'column', 
  gap: '12px' 
};

const selectedItemsStyle: React.CSSProperties = { 
  marginTop: '16px' 
};

// Historias
export const Default: Story = {
  render: (args) => <CheckButton {...args} />,
  args: {
    label: 'Opción predeterminada (medium)',
  },
};

export const SizeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CheckButton label={`Tamaño pequeño (${ComponentSize.SMALL})`} size={ComponentSize.SMALL} />
      <CheckButton label={`Tamaño mediano (${ComponentSize.MEDIUM}) - predeterminado`} size={ComponentSize.MEDIUM} />
      <CheckButton label={`Tamaño grande (${ComponentSize.LARGE})`} size={ComponentSize.LARGE} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra los diferentes tamaños disponibles para el botón de verificación.',
      },
    },
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
    label: 'Haz clic para cambiar',
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
          <p>Seleccionados: {selected.length > 0 ? selected.join(', ') : 'Ninguno'}</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un grupo de checkboxes que se pueden seleccionar múltiples opciones.',
      },
    },
  },
};
