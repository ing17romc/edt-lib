import { Meta } from '@storybook/react';
import { Title, TitleSize, TitleVariant } from '..';

export default {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Componente de título con múltiples variantes y tamaños',
  },
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
  },
} as Meta<typeof Title>;

export const withAllPropsArgs = {
  children: 'Título con todas las propiedades',
  size: TitleSize.H2,
  variant: TitleVariant.PRIMARY,
  bold: true,
  italic: true,
  underline: true,
  strikethrough: false,
  align: 'center' as const,
  block: true,
  noWrap: false,
  onClick: () => {
    console.log('Title clicked');
  },
};
