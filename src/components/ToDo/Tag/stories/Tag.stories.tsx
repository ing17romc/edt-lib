import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Tag from '..';
import { defaultArgs, argTypes, allVariants, allSizes, parameters } from './mocks';
import { ComponentVariant, ComponentSize } from '../../../types';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes,
  args: defaultArgs,
  parameters,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { children: 'Tag label' },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {allVariants.map((variant) => (
        <Tag key={variant} variant={variant as ComponentVariant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Tag>
      ))}
    </div>
  ),
  parameters: { docs: { source: { code: null } } },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      {allSizes.map((size) => (
        <Tag key={size} size={size as ComponentSize}>
          {size.charAt(0).toUpperCase() + size.slice(1)}
        </Tag>
      ))}
    </div>
  ),
  parameters: { docs: { source: { code: null } } },
};

export const Closable: Story = {
  args: { children: 'Close tag', closable: true },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};
