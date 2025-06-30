import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '..';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Nombre del icono a mostrar',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning'],
      description: 'Variante visual del botón',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Si el botón está deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Si muestra un indicador de carga',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Si el botón ocupa todo el ancho disponible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    iconVariant: {
      control: 'select',
      options: ['solid', 'outline', 'dual'],
      description: 'Estilo del icono',
      table: {
        defaultValue: { summary: 'outline' },
      },
    },
    iconColor: {
      control: 'color',
      description: 'Color personalizado para el icono',
    },
    onClick: {
      action: 'clicked',
      description: 'Manejador de clic',
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

export default meta;

type Story = StoryObj<typeof IconButton>;

// Historia por defecto
export const Default: Story = {
  args: {
    'aria-label': 'Botón de inicio',
  },
};

// Tamaños
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon="home" size="small" aria-label="Pequeño" />
      <IconButton icon="home" size="medium" aria-label="Mediano" />
      <IconButton icon="home" size="large" aria-label="Grande" />
    </div>
  ),
};

// Variantes
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon="star" variant="primary" aria-label="Primario" />
      <IconButton icon="star" variant="secondary" aria-label="Secundario" />
      <IconButton icon="star" variant="tertiary" aria-label="Terciario" />
      <IconButton icon="star" variant="danger" aria-label="Peligro" />
      <IconButton icon="star" variant="success" aria-label="Éxito" />
      <IconButton icon="star" variant="warning" aria-label="Advertencia" />
    </div>
  ),
};

// Estados
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon="check" aria-label="Normal" />
      <IconButton icon="check" disabled aria-label="Deshabilitado" />
      <IconButton icon="check" loading aria-label="Cargando" />
    </div>
  ),
};

// Iconos personalizados
export const CustomIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon="home" aria-label="Inicio" />
      <IconButton icon="settings" variant="secondary" aria-label="Configuración" />
      <IconButton icon="search" variant="tertiary" aria-label="Buscar" />
      <IconButton icon="heart" variant="danger" aria-label="Favorito" />
      <IconButton icon="download" variant="success" aria-label="Descargar" />
      <IconButton icon="bell" variant="warning" aria-label="Notificaciones" />
    </div>
  ),
};

// Con color personalizado
export const WithCustomColor: Story = {
  args: {
    icon: 'favorite',
    iconColor: '#ff4081',
    'aria-label': 'Favorito rosa',
  },
};

// Con variante de icono
export const WithIconVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon="star" iconVariant="outline" aria-label="Contorno" />
      <IconButton icon="star" iconVariant="solid" aria-label="Sólido" />
      <IconButton icon="star" iconVariant="dual" aria-label="Dual" />
    </div>
  ),
};

// Ancho completo
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <IconButton 
        icon="add" 
        fullWidth 
        aria-label="Agregar" 
        style={{ marginBottom: '8px' }} 
      />
      <IconButton 
        icon="delete" 
        variant="danger" 
        fullWidth 
        aria-label="Eliminar" 
      />
    </div>
  ),
};
