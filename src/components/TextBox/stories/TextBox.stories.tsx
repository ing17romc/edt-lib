import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import TextBox from '../';
import type { TextBoxProps } from '../types';
import { defaultArgs } from './mocks';
import { ComponentSize } from '../../types';

export default {
  title: 'Components/TextBox',
  component: TextBox,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'filled', 'standard'],
      },
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
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      },
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    required: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
  parameters: {
    componentSubtitle: 'Campo de entrada de texto de una sola línea',
    docs: {
      description: {
        component: 'Un componente de campo de texto que permite la entrada de texto de una sola línea. Soporta diferentes variantes, tamaños y estados.'
      },
    },
  },
} as Meta;

// Plantilla base para las historias
const Template: StoryFn<TextBoxProps> = (args) => {
  const [value, setValue] = useState('');
  return (
    <TextBox
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// Historia por defecto
export const Default = Template.bind({});
Default.args = defaultArgs;

// Historia con controles interactivos
export const Interactive = Template.bind({});
Interactive.args = {
  ...defaultArgs,
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Usa los controles en el panel de controles para cambiar las propiedades del campo de texto.',
    },
  },
};

// Historia de variantes
export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
    <TextBox label="Outlined" variant="outlined" placeholder="Outlined" />
    <TextBox label="Filled" variant="filled" placeholder="Filled" />
    <TextBox label="Standard" variant="standard" placeholder="Standard" />
  </div>
);
Variants.parameters = {
  docs: {
    description: {
      story: 'Diferentes variantes de diseño para el campo de texto.',
    },
  },
};

// Historia de tamaños
export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
    <TextBox label="Small" size={ComponentSize.SMALL} placeholder="Small size" />
    <TextBox label="Medium" size={ComponentSize.MEDIUM} placeholder="Medium size" />
    <TextBox label="Large" size={ComponentSize.LARGE} placeholder="Large size" />
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'Diferentes tamaños para el campo de texto.',
    },
  },
};

// Historia de estados
export const States = () => {
  const [value, setValue] = useState('');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <TextBox 
        label="Campo normal" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe algo..."
      />
      <TextBox 
        label="Campo con valor por defecto" 
        defaultValue="Valor por defecto"
      />
      <TextBox 
        label="Campo deshabilitado" 
        disabled 
        placeholder="No puedes escribir aquí"
      />
      <TextBox 
        label="Campo de solo lectura" 
        readOnly 
        value="Este texto no se puede editar"
      />
      <TextBox 
        label="Campo requerido" 
        required 
        placeholder="Este campo es obligatorio"
      />
      <TextBox 
        label="Campo con error" 
        error 
        helperText="Mensaje de error"
        defaultValue="Valor incorrecto"
      />
    </div>
  );
};
States.parameters = {
  docs: {
    description: {
      story: 'Diferentes estados del campo de texto: normal, con valor, deshabilitado, solo lectura, requerido y con error.',
    },
  },
};

// Historia con adornos
export const WithAdornments = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
    <TextBox 
      label="Con icono al inicio"
      startAdornment={
        <span style={{ fontSize: '20px' }}>🔍</span>
      }
      placeholder="Buscar..."
    />
    <TextBox 
      label="Con icono al final"
      endAdornment={
        <span style={{ fontSize: '20px' }}>🔒</span>
      }
      type="password"
      placeholder="Contraseña"
    />
    <TextBox 
      label="Con iconos en ambos lados"
      startAdornment={
        <span style={{ fontSize: '20px' }}>🔢</span>
      }
      endAdornment={
        <span style={{ fontSize: '14px', color: '#666' }}>Números</span>
      }
      type="number"
      placeholder="Solo números"
    />
  </div>
);
WithAdornments.parameters = {
  docs: {
    description: {
      story: 'Campos de texto con iconos u otros elementos decorativos.',
    },
  },
};

// Historia de ancho completo
export const FullWidth = () => (
  <div style={{ width: '100%' }}>
    <TextBox 
      label="Campo de ancho completo" 
      fullWidth 
      placeholder="Este campo ocupa todo el ancho disponible"
    />
  </div>
);
FullWidth.parameters = {
  docs: {
    description: {
      story: 'Campo de texto que ocupa todo el ancho disponible en su contenedor.',
    },
  },
};
