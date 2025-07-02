import type { StoryObj, Meta } from '@storybook/react';
import { Selector, SelectorVariant, SelectorSize } from '..';
import {
  defaultArgs,
  withoutLabelArgs,
  withHelperTextArgs,
  errorStateArgs,
  disabledArgs,
  loadingArgs,
  fullWidthArgs,
  withManyOptionsArgs,
  OptionGroupsComponent,
  SizesComponent,
  mockOptions,
} from './mocks';

const meta: Meta<typeof Selector> = {
  title: 'Components/Selector',
  component: Selector,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: Object.values(SelectorVariant) },
    },
    size: {
      control: { type: 'select', options: Object.values(SelectorSize) },
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Selector>;

export const Default: Story = {
  args: defaultArgs,
};

export const WithoutLabel: Story = {
  args: withoutLabelArgs,
};

export const WithHelperText: Story = {
  args: withHelperTextArgs,
};

export const ErrorState: Story = {
  args: errorStateArgs,
};

export const Disabled: Story = {
  args: disabledArgs,
};

export const Loading: Story = {
  args: loadingArgs,
};

export const FullWidth: Story = {
  args: fullWidthArgs,
};

export const WithManyOptions: Story = {
  args: withManyOptionsArgs,
};

export const WithOptionGroups: Story = {
  render: () => <OptionGroupsComponent />,
};

export const Sizes: Story = {
  render: () => <SizesComponent />,
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
