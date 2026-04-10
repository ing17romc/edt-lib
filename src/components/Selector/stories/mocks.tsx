import React from 'react';

import { Selector, SelectorVariant } from '..';
import { SelectorOption } from '../types';
import { ComponentSize } from '../../types';

// Mock Data
export const mockOptions: SelectorOption[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3 (Disabled)', disabled: true },
  { value: '4', label: 'Option 4' },
];

export const mockGroupedOptions = [
  {
    label: 'Grupo 1',
    options: [
      { value: '1-1', label: 'Option 1.1' },
      { value: '1-2', label: 'Option 1.2' },
    ],
  },
  {
    label: 'Grupo 2',
    options: [
      { value: '2-1', label: 'Option 2.1' },
      { value: '2-2', label: 'Option 2.2 (Disabled)', disabled: true },
    ],
  },
];

export const mockLongListOptions: SelectorOption[] = Array.from({ length: 50 }, (_, i) => ({
  value: `${i + 1}`,
  label: `Option ${i + 1}`,
}));



// Story Arguments
export const defaultArgs = {
  options: mockOptions,
  label: 'Select an option',
  placeholder: 'Choose an option',
  variant: SelectorVariant.PRIMARY,
  size: ComponentSize.MEDIUM,
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
  helperText: 'Select an option from the list',
};

export const errorStateArgs = {
  ...defaultArgs,
  error: true,
  errorMessage: 'You must select an option',
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
  label: 'Many options',
};

// Custom Render Components for Stories
export const OptionGroupsComponent = () => (
  <div>
    <label htmlFor="grouped-selector" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
      Grouped options
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
    <Selector {...defaultArgs} label="Small selector" size={ComponentSize.SMALL} />
    <Selector {...defaultArgs} label="Medium selector (default)" size={ComponentSize.MEDIUM} />
    <Selector {...defaultArgs} label="Large selector" size={ComponentSize.LARGE} />
  </div>
);
