import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Title, TitleSize, TitleVariant } from '..';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: Object.values(TitleSize),
      description: 'Tamaño del título (h1-h6)',
      table: {
        type: { summary: 'TitleSize' },
        defaultValue: { summary: 'h1' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(TitleVariant),
      description: 'Variante de color del título',
      table: {
        type: { summary: 'TitleVariant' },
        defaultValue: { summary: 'dark' },
      },
    },
    children: {
      control: 'text',
      description: 'Contenido del título',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    bold: {
      control: 'boolean',
      description: 'Si es true, el título se muestra en negrita',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    italic: {
      control: 'boolean',
      description: 'Si es true, el título se muestra en cursiva',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    underline: {
      control: 'boolean',
      description: 'Si es true, el título se muestra subrayado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    strikethrough: {
      control: 'boolean',
      description: 'Si es true, el título se muestra tachado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Alineación del texto',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    block: {
      control: 'boolean',
      description: 'Si es true, el título ocupa todo el ancho disponible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    noWrap: {
      control: 'boolean',
      description: 'Si es true, el texto no se rompe en varias líneas',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Función que se ejecuta al hacer clic en el título',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    children: 'Título de ejemplo',
    size: TitleSize.H1,
    variant: TitleVariant.DARK,
  } as const,
};

export default meta;

type Story = StoryObj<typeof Title>;

// Historia por defecto
export const Default: Story = {};

// Historia con todas las propiedades
export const WithAllProps: Story = {
  args: {
    children: 'Título con todas las propiedades',
    size: TitleSize.H2,
    variant: TitleVariant.PRIMARY,
    bold: true,
    italic: true,
    underline: true,
    strikethrough: false,
    align: 'center',
    block: true,
    noWrap: false,
  },
};

// Historia con diferentes tamaños
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {Object.values(TitleSize).map((size) => (
        <Title key={size} size={size}>
          Título {size.toUpperCase()}
        </Title>
      ))}
    </div>
  ),
};

// Historia con diferentes variantes de color
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {Object.values(TitleVariant).map((variant) => (
        <Title key={variant} variant={variant}>
          Variante {variant}
        </Title>
      ))}
    </div>
  ),
};

// Historia con diferentes estilos de texto
export const TextStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Title>Estilo normal</Title>
      <Title bold>Negrita</Title>
      <Title italic>Cursiva</Title>
      <Title underline>Subrayado</Title>
      <Title strikethrough>Tachado</Title>
      <Title bold italic>Negrita y cursiva</Title>
    </div>
  ),
};

// Historia con diferentes alineaciones
export const Alignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Title align="left">Alineación izquierda</Title>
      <Title align="center">Alineación centrada</Title>
      <Title align="right">Alineación derecha</Title>
      <Title 
        align="justify" 
        style={{ maxWidth: '300px' }}
      >
        Texto justificado: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Title>
    </div>
  ),
};

// Historia con comportamiento de bloque
export const Block: Story = {
  render: () => (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <Title 
        block 
        style={{ 
          display: 'block',
          backgroundColor: '#f0f0f0',
          padding: '8px',
          marginBottom: '8px'
        }}
      >
        Título en bloque (ocupa todo el ancho)
      </Title>
      <p>Contenido debajo del título</p>
    </div>
  ),
};

// Historia con no-wrap
export const NoWrap: Story = {
  render: () => (
    <div style={{ width: '200px', border: '1px solid #ccc', padding: '1rem' }}>
      <Title noWrap>
        Este texto no se romperá en varias líneas aunque sea muy largo y no quepa en el contenedor
      </Title>
      <Title>
        Este texto sí se romperá en varias líneas si no cabe en el contenedor
      </Title>
      <p>El título de arriba debería mostrarse en una sola línea con puntos suspensivos</p>
    </div>
  ),
};

// Historia con manejador de clic
export const Clickable: Story = {
  args: {
    children: 'Haz clic en este título',
    onClick: () => alert('¡Título clickeado!'),
  },
};
