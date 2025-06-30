import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '..';
import { SpinnerSize, SpinnerVariant } from '../types';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(SpinnerSize),
      description: 'Tamaño del spinner',
      table: {
        defaultValue: { summary: SpinnerSize.MEDIUM },
      },
    },
    variant: {
      control: 'select',
      options: Object.values(SpinnerVariant),
      description: 'Variante de color del spinner',
      table: {
        defaultValue: { summary: SpinnerVariant.PRIMARY },
      },
    },
    pulse: {
      control: { type: 'boolean' },
      description: 'Si es true, muestra un spinner de tipo pulso',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    'aria-label': {
      control: 'text',
      description: 'Texto accesible para lectores de pantalla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cargando...' },
      },
    },
  },
  args: {
    size: SpinnerSize.MEDIUM,
    variant: SpinnerVariant.PRIMARY,
    pulse: false,
    'aria-label': 'Cargando...',
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Spinner size={SpinnerSize.XSMALL} aria-label="Extra pequeño" />
      <Spinner size={SpinnerSize.SMALL} aria-label="Pequeño" />
      <Spinner size={SpinnerSize.MEDIUM} aria-label="Mediano" />
      <Spinner size={SpinnerSize.LARGE} aria-label="Grande" />
      <Spinner size={SpinnerSize.XLARGE} aria-label="Extra grande" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Spinner variant={SpinnerVariant.PRIMARY} aria-label="Primario" />
      <Spinner variant={SpinnerVariant.SECONDARY} aria-label="Secundario" />
      <Spinner variant={SpinnerVariant.TERTIARY} aria-label="Terciario" />
      <Spinner variant={SpinnerVariant.DANGER} aria-label="Peligro" />
      <Spinner variant={SpinnerVariant.SUCCESS} aria-label="Éxito" />
      <Spinner variant={SpinnerVariant.WARNING} aria-label="Advertencia" />
    </div>
  ),
};

export const Pulse: Story = {
  args: {
    pulse: true,
  },
};

export const WithCustomLabel: Story = {
  args: {
    'aria-label': 'Espere mientras se cargan los datos...',
  },
};
