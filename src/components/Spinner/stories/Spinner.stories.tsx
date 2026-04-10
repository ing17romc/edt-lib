import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Spinner from '..';
import { SpinnerVariant } from '../types';
import { ComponentSize } from '../../types';
import { argTypes, parameters } from './mocks';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes,
  parameters,
  args: {
    size: ComponentSize.MEDIUM,
    variant: SpinnerVariant.PRIMARY,
    pulse: false,
    'aria-label': 'Loading...',
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
      <Spinner size={ComponentSize.SMALL} aria-label="Small" />
      <Spinner size={ComponentSize.MEDIUM} aria-label="Medium" />
      <Spinner size={ComponentSize.LARGE} aria-label="Large" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Spinner variant={SpinnerVariant.PRIMARY} aria-label="Primary" />
      <Spinner variant={SpinnerVariant.SECONDARY} aria-label="Secondary" />
      <Spinner variant={SpinnerVariant.TERTIARY} aria-label="Tertiary" />
      <Spinner variant={SpinnerVariant.DANGER} aria-label="Danger" />
      <Spinner variant={SpinnerVariant.SUCCESS} aria-label="Success" />
      <Spinner variant={SpinnerVariant.WARNING} aria-label="Warning" />
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
    'aria-label': 'Please wait while data is loading...',
  },
};
