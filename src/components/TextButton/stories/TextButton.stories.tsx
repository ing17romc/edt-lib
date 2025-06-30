import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextButton from '../';
import type { TextButtonProps } from '../types';

export default {
  title: 'Components/TextButton',
  component: TextButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'error', 'success', 'warning', 'inherit'],
      },
    },
    underline: {
      control: {
        type: 'select',
        options: ['none', 'hover', 'always'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  parameters: {
    componentSubtitle: 'Botón de texto para acciones secundarias',
    docs: {
      description: {
        component: 'Un botón de texto para acciones secundarias que no necesitan mucha atención. Ideal para acciones menos importantes o como alternativa a los enlaces.',
      },
    },
  },
} as Meta;

// Plantilla base para las historias
const Template: StoryFn<TextButtonProps> = (args) => <TextButton {...args} />;

// Historia por defecto
export const Default = Template.bind({});
Default.args = {
  children: 'Botón de texto',
  color: 'primary',
  size: 'medium',
  underline: 'hover',
};

// Historia con controles interactivos
export const Interactive = Template.bind({});
Interactive.args = {
  ...Default.args,
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'Usa los controles en el panel de controles para cambiar las propiedades del botón de texto.',
    },
  },
};

// Historia de tamaños
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <TextButton size="small">Pequeño</TextButton>
    <TextButton size="medium">Mediano</TextButton>
    <TextButton size="large">Grande</TextButton>
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
      story: 'Diferentes tamaños de botones de texto. Controla el tamaño con la propiedad `size`.',
    },
  },
};

// Historia de colores
export const Colors = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
    <TextButton color="primary">Primario</TextButton>
    <TextButton color="secondary">Secundario</TextButton>
    <TextButton color="error">Error</TextButton>
    <TextButton color="success">Éxito</TextButton>
    <TextButton color="warning">Advertencia</TextButton>
    <TextButton color="inherit">Heredado</TextButton>
  </div>
);
Colors.parameters = {
  docs: {
    description: {
      story: 'Diferentes colores para el botón de texto. Controla el color con la propiedad `color`.',
    },
  },
};

// Historia de estados
export const States = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
    <TextButton>Normal</TextButton>
    <TextButton disabled>Deshabilitado</TextButton>
    <TextButton loading>Cargando</TextButton>
    <TextButton fullWidth>Ancho completo</TextButton>
  </div>
);
States.parameters = {
  docs: {
    description: {
      story: 'Diferentes estados del botón de texto: normal, deshabilitado, cargando y ancho completo.',
    },
  },
};

// Historia de subrayado
export const Underline = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <TextButton underline="none">Sin subrayado</TextButton>
    <TextButton underline="hover">Subrayado al pasar</TextButton>
    <TextButton underline="always">Siempre subrayado</TextButton>
  </div>
);
Underline.parameters = {
  docs: {
    description: {
      story: 'Diferentes estilos de subrayado para el botón de texto. Controla el subrayado con la propiedad `underline`.',
    },
  },
};
