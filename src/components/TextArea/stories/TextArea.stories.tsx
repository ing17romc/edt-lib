import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextArea from '../';
import type { TextAreaProps } from '../types';
import { defaultArgs } from './mocks';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'filled', 'standard'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    rows: { control: { type: 'number', min: 1, max: 20 } },
    maxLength: { control: { type: 'number', min: 1 } },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    required: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    autoResize: { control: 'boolean' },
  },
  parameters: {
    componentSubtitle: 'Área de texto de múltiples líneas',
    docs: {
      description: {
        component: 'Un componente de área de texto que permite la entrada de texto de múltiples líneas. Soporta diferentes variantes, tamaños y redimensionamiento automático.'
      },
    },
  },
} as Meta;

// Plantilla base para las historias
const Template: StoryFn<TextAreaProps> = (args) => {
  const [value, setValue] = useState('');
  return (
    <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// Historia por defecto
export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

// Historia con controles interactivos
export const Interactive = Template.bind({});
Interactive.args = {
  ...defaultArgs,
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Usa los controles en el panel de controles para cambiar las propiedades del área de texto.',
    },
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
      story: 'Diferentes variantes de diseño para el área de texto.',
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
        size="small" 
        placeholder="Small size" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextArea 
        label="Medium" 
        size="medium" 
        placeholder="Medium size" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextArea 
        label="Large" 
        size="large" 
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
      story: 'Diferentes tamaños para el área de texto.',
    },
  },
};

// Historia de estados
export const States = () => {
  const [value, setValue] = useState('');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <TextArea 
        label="Campo normal" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe algo..."
      />
      <TextArea 
        label="Campo con valor por defecto" 
        defaultValue="Este es un valor por defecto en el área de texto. Puedes editar este contenido."
        rows={4}
      />
      <TextArea 
        label="Campo deshabilitado" 
        disabled 
        value="Este es un área de texto deshabilitada"
        rows={2}
      />
      <TextArea 
        label="Campo de solo lectura" 
        readOnly 
        value="Este es un área de texto de solo lectura. No se puede editar este contenido."
        rows={3}
      />
      <TextArea 
        label="Campo requerido" 
        required 
        placeholder="Este campo es obligatorio"
        rows={2}
      />
      <TextArea 
        label="Campo con error" 
        error 
        helperText="Este campo es requerido"
        value="Valor incorrecto"
        rows={2}
      />
    </div>
  );
};
States.parameters = {
  docs: {
    description: {
      story: 'Diferentes estados del área de texto: normal, con valor, deshabilitado, solo lectura, requerido y con error.',
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
        label="Comentario"
        placeholder="Escribe tu comentario (máx. 100 caracteres)"
        maxLength={maxLength}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText={`${value.length}/${maxLength} caracteres`}
        rows={4}
      />
    </div>
  );
};
WithCharacterLimit.parameters = {
  docs: {
    description: {
      story: 'Área de texto con límite de caracteres y contador.',
    },
  },
};

// Historia con redimensionamiento automático
export const AutoResize = () => {
  const [value, setValue] = useState('');
  
  return (
    <div style={{ maxWidth: '600px' }}>
      <TextArea
        label="Descripción"
        placeholder="Escribe una descripción (se ajustará automáticamente)"
        autoResize
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="El área de texto se ajusta automáticamente según el contenido"
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
