import { Meta } from '@storybook/react';
import { ComponentSize, ComponentVariant } from '../../types';

// Configuración de la meta para las historias
export const meta: Meta = {
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'text' },
      description: 'Nombre del icono a mostrar',
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
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning'],
      description: 'Variante visual del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"primary"' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Si el botón está deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Si muestra un indicador de carga',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Si el botón ocupa todo el ancho disponible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconVariant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'dual'],
      description: 'Estilo del icono',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"outline"' },
      },
    },
    iconColor: {
      control: { type: 'color' },
      description: 'Color personalizado para el icono',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Manejador de clic',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: {
    icon: 'home',
    'aria-label': 'Botón de ejemplo',
    size: 'medium',
    variant: 'primary',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconVariant: 'outline',
  },
};

// Opciones de tamaños para mostrar en las historias
export const sizeOptions: { size: ComponentSize; label: string }[] = [
  { size: ComponentSize.SMALL, label: 'Pequeño' },
  { size: ComponentSize.MEDIUM, label: 'Mediano' },
  { size: ComponentSize.LARGE, label: 'Grande' },
];

// Opciones de variantes para mostrar en las historias
export const variantOptions: { variant: ComponentVariant; label: string }[] = [
  { variant: ComponentVariant.PRIMARY, label: 'Primario' },
  { variant: ComponentVariant.SECONDARY, label: 'Secundario' },
  { variant: ComponentVariant.TERTIARY, label: 'Terciario' },
  { variant: ComponentVariant.DANGER, label: 'Peligro' },
  { variant: ComponentVariant.SUCCESS, label: 'Éxito' },
  { variant: ComponentVariant.WARNING, label: 'Advertencia' },
];

// Iconos de ejemplo para mostrar en las historias
export const exampleIcons = [
  'home',
  'star',
  'settings',
  'search',
  'notifications',
  'menu',
  'close',
  'arrow_back',
  'arrow_forward',
  'check',
];

// Estilos para los contenedores de las historias
export const containerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: '16px',
};

export const itemContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  minWidth: '80px',
};
