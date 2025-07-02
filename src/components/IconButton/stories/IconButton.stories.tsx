import React from 'react';
import type { StoryObj } from '@storybook/react';
import IconButton from '..';
import { 
  meta, 
  sizeOptions, 
  variantOptions, 
  containerStyle, 
  itemContainerStyle 
} from './mocks';

// Usamos la configuración de meta desde el archivo de mocks
const metaWithComponent = {
  ...meta,
  component: IconButton,
};

// Exportamos la configuración de meta con el componente
export default metaWithComponent;

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
    <div style={containerStyle}>
      {sizeOptions.map(({ size, label }) => (
        <div key={size} style={itemContainerStyle}>
          <IconButton 
            icon="home" 
            size={size} 
            aria-label={`Botón ${label}`} 
          />
          <span>{label}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra los diferentes tamaños disponibles para el componente IconButton.',
      },
    },
  },
};

// Variantes
export const Variants: Story = {
  render: () => (
    <div style={containerStyle}>
      {variantOptions.map(({ variant, label }) => (
        <div key={variant} style={itemContainerStyle}>
          <IconButton 
            icon="star" 
            variant={variant} 
            aria-label={`Botón ${label}`} 
          />
          <span>{label}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra las diferentes variantes de estilo disponibles para el componente IconButton.',
      },
    },
  },
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
