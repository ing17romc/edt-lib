import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Selector, SelectorVariant, SelectorSize } from '..';
import { mockOptions, mockGroupedOptions, mockLongListOptions } from '../__tests__/mocks';

// Tipo para opciones agrupadas
type GroupedOption = {
  label: string;
  options: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
  }>;
};

// Extendemos las props para aceptar opciones agrupadas
type SelectorStoryProps = React.ComponentProps<typeof Selector> & {
  options?: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
  } | GroupedOption>;
};

const meta: Meta<SelectorStoryProps> = {
  title: 'Components/Selector',
  component: Selector,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.values(SelectorVariant),
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(SelectorSize),
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
    error: {
      control: 'boolean',
    },
  },
  args: {
    options: mockOptions,
    label: 'Selecciona una opción',
    placeholder: 'Elige una opción',
    variant: SelectorVariant.PRIMARY,
    size: SelectorSize.MEDIUM,
    disabled: false,
    loading: false,
    fullWidth: false,
    error: false,
  },
};

export default meta;

type Story = StoryObj<SelectorStoryProps>;

/**
 * Selector básico con las opciones por defecto.
 */
export const Default: Story = {};

/**
 * Selector sin etiqueta.
 */
export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};

/**
 * Selector con texto de ayuda.
 */
export const WithHelperText: Story = {
  args: {
    helperText: 'Selecciona una opción de la lista',
  },
};

/**
 * Selector con estado de error.
 */
export const ErrorState: Story = {
  args: {
    error: true,
    errorMessage: 'Debes seleccionar una opción',
  },
};

/**
 * Selector deshabilitado.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Selector en estado de carga.
 */
export const Loading: Story = {
  args: {
    loading: true,
  },
};

/**
 * Selector que ocupa todo el ancho disponible.
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

/**
 * Selector con opciones agrupadas.
 */
export const WithOptionGroups: Story = {
  args: {
    options: [], // No usamos las opciones agrupadas aquí ya que se renderizan manualmente
    label: 'Opciones agrupadas',
  },
  render: (args) => {
    // Renderizamos manualmente el select con opciones agrupadas
    return (
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>{args.label}</label>
        <select style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          minWidth: '200px',
        }}>
          {mockGroupedOptions.map((group, index) => (
            <optgroup key={index} label={group.label}>
              {group.options.map((option) => (
                <option 
                  key={option.value.toString()} 
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    );
  },
};

/**
 * Selector con muchas opciones y scroll.
 */
export const WithManyOptions: Story = {
  args: {
    options: mockLongListOptions,
    label: 'Muchas opciones',
  },
};

/**
 * Selector con diferentes tamaños.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Selector 
        options={mockOptions} 
        label="Selector pequeño" 
        size={SelectorSize.SMALL} 
      />
      <Selector 
        options={mockOptions} 
        label="Selector mediano (por defecto)" 
        size={SelectorSize.MEDIUM} 
      />
      <Selector 
        options={mockOptions} 
        label="Selector grande" 
        size={SelectorSize.LARGE} 
      />
    </div>
  ),
};

/**
 * Selector con diferentes variantes.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Selector 
        options={mockOptions} 
        label="Variante primaria (por defecto)" 
        variant={SelectorVariant.PRIMARY} 
      />
      <Selector 
        options={mockOptions} 
        label="Variante secundaria" 
        variant={SelectorVariant.SECONDARY} 
      />
      <Selector 
        options={mockOptions} 
        label="Variante de peligro" 
        variant={SelectorVariant.DANGER} 
      />
      <Selector 
        options={mockOptions} 
        label="Variante de éxito" 
        variant={SelectorVariant.SUCCESS} 
      />
      <Selector 
        options={mockOptions} 
        label="Variante de advertencia" 
        variant={SelectorVariant.WARNING} 
      />
    </div>
  ),
};

/**
 * Selector con opción por defecto seleccionada.
 */
export const WithDefaultValue: Story = {
  args: {
    defaultValue: '2',
    label: 'Con valor por defecto',
  },
};

/**
 * Selector requerido con indicador de campo obligatorio.
 */
export const RequiredField: Story = {
  args: {
    label: 'Campo obligatorio',
    required: true,
  },
};
