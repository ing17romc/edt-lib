import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import Spinner from '..';
import { SpinnerVariant } from '../types';
import { ComponentSize } from '../../types';
import { argTypes, parameters } from './mocks';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes,
  parameters: {
    ...parameters,
    layout: 'centered',
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByLabelText('Loading...');
    await expect(spinner).toBeInTheDocument();
    await expect(spinner).toHaveClass('spinner--medium');
    await expect(spinner).toHaveClass('spinner--primary');
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Spinner size={ComponentSize.SMALL} aria-label="Small" />
      <Spinner size={ComponentSize.MEDIUM} aria-label="Medium" />
      <Spinner size={ComponentSize.LARGE} aria-label="Large" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Small')).toHaveClass('spinner--small');
    await expect(canvas.getByLabelText('Medium')).toHaveClass('spinner--medium');
    await expect(canvas.getByLabelText('Large')).toHaveClass('spinner--large');
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByLabelText('Primary')).toHaveClass('spinner--primary');
    await expect(canvas.getByLabelText('Secondary')).toHaveClass('spinner--secondary');
    await expect(canvas.getByLabelText('Tertiary')).toHaveClass('spinner--tertiary');
    await expect(canvas.getByLabelText('Danger')).toHaveClass('spinner--danger');
    await expect(canvas.getByLabelText('Success')).toHaveClass('spinner--success');
    await expect(canvas.getByLabelText('Warning')).toHaveClass('spinner--warning');
  },
};

export const Pulse: Story = {
  args: {
    pulse: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByLabelText('Loading...');
    await expect(spinner).toHaveClass('spinner--pulse');
  },
};

export const WithCustomLabel: Story = {
  args: {
    'aria-label': 'Please wait while data is loading...',
  },
};
