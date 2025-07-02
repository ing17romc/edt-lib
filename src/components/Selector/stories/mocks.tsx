import React from 'react';
import type { Meta } from '@storybook/react';
import { Selector, SelectorVariant, SelectorSize } from '..';
import { SelectorOption } from '../types';

// Mock Data
export const mockOptions: SelectorOption[] = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
  { value: '3', label: 'Opción 3 (Deshabilitada)', disabled: true },
  { value: '4', label: 'Opción 4' },
];

export const mockGroupedOptions = [
  {
    label: 'Grupo 1',
    options: [
      { value: '1-1', label: 'Opción 1.1' },
      { value: '1-2', label: 'Opción 1.2' },
    ],
  },
  {
    label: 'Grupo 2',
    options: [
      { value: '2-1', label: 'Opción 2.1' },
      { value: '2-2', label: 'Opción 2.2 (Deshabilitada)', disabled: true },
    ],
  },
];

export const mockLongListOptions: SelectorOption[] = Array.from({ length: 50 }, (_, i) => ({
  value: `${i + 1}`,
  label: `Opción ${i + 1}`,
}));



// Story Arguments
export const defaultArgs = {
  options: mockOptions,
  label: 'Selecciona una opción',
  placeholder: 'Elige una opción',
  variant: SelectorVariant.PRIMARY,
  size: SelectorSize.MEDIUM,
  disabled: false,
  loading: false,
  fullWidth: false,
  error: false,
};

export const withoutLabelArgs = {
  ...defaultArgs,
  label: undefined,
};

export const withHelperTextArgs = {
  ...defaultArgs,
  helperText: 'Selecciona una opción de la lista',
};

export const errorStateArgs = {
  ...defaultArgs,
  error: true,
  errorMessage: 'Debes seleccionar una opción',
};

export const disabledArgs = {
  ...defaultArgs,
  disabled: true,
};

export const loadingArgs = {
  ...defaultArgs,
  loading: true,
};

export const fullWidthArgs = {
  ...defaultArgs,
  fullWidth: true,
};

export const withManyOptionsArgs = {
  ...defaultArgs,
  options: mockLongListOptions,
  label: 'Muchas opciones',
};

// Custom Render Components for Stories
export const OptionGroupsComponent = () => (
  <div>
    <label htmlFor="grouped-selector" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
      Opciones agrupadas
    </label>
    <select
      id="grouped-selector"
      style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        minWidth: '200px',
      }}
    >
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

export const SizesComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Selector {...defaultArgs} label="Selector pequeño" size={SelectorSize.SMALL} />
    <Selector {...defaultArgs} label="Selector mediano (por defecto)" size={SelectorSize.MEDIUM} />
    <Selector {...defaultArgs} label="Selector grande" size={SelectorSize.LARGE} />
  </div>
);
