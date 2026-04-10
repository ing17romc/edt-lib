import React from 'react';
import type { StoryObj } from '@storybook/react-vite';
import { IconVariant } from '../../Icon/types';
import IconButton from '..';
import { 
  meta, 
  parameters,
  sizeOptions, 
  variantOptions, 
  containerStyle, 
  itemContainerStyle 
} from './mocks';
import { ComponentVariant } from '../../types';

// Merge parameters into the meta exported from mocks
const metaWithComponent = {
  title: 'Components/IconButton',
  ...meta,
  component: IconButton,
  parameters,
};

export default metaWithComponent;

type Story = StoryObj<typeof IconButton>;

// Default story
export const Default: Story = {
  args: {
    'aria-label': 'Home button',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={containerStyle}>
      {sizeOptions.map(({ size, label }) => (
        <div key={size} style={itemContainerStyle}>
          <IconButton 
            icon="home" 
            size={size} 
            aria-label={`${label} button`} 
          />
          <span>{label}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows the different sizes available for the IconButton component.',
      },
    },
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div style={containerStyle}>
      {variantOptions.map(({ variant, label }) => (
        <div key={variant} style={itemContainerStyle}>
          <IconButton 
            icon="star" 
            variant={variant} 
            aria-label={`${label} button`} 
          />
          <span>{label}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows the different style variants available for the IconButton component.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon="check" aria-label="Normal" />
      <IconButton icon="check" disabled aria-label="Disabled" />
      <IconButton icon="check" loading aria-label="Loading" />
    </div>
  ),
};

// Custom icons
export const CustomIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon="home" aria-label="Home" />
      <IconButton icon="settings" variant={ComponentVariant.SECONDARY} aria-label="Settings" />
      <IconButton icon="search" variant={ComponentVariant.TERTIARY} aria-label="Search" />
      <IconButton icon="heart" variant={ComponentVariant.DANGER} aria-label="Favorite" />
      <IconButton icon="download" variant={ComponentVariant.SUCCESS} aria-label="Download" />
      <IconButton icon="bell" variant={ComponentVariant.WARNING} aria-label="Notifications" />
    </div>
  ),
};

// With custom color
export const WithCustomColor: Story = {
  args: {
    icon: 'favorite',
    iconColor: '#ff4081',
    'aria-label': 'Pink favorite',
  },
};

// With icon variant
export const WithIconVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton icon="star" iconVariant={IconVariant.OUTLINE} aria-label="Outline" />
      <IconButton icon="star" iconVariant={IconVariant.SOLID} aria-label="Solid" />
      <IconButton icon="star" iconVariant={IconVariant.DUAL} aria-label="Dual" />
    </div>
  ),
};

// Full width
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <IconButton 
        icon="add" 
        fullWidth 
        aria-label="Add" 
        style={{ marginBottom: '8px' }} 
      />
      <IconButton 
        icon="delete" 
        variant={ComponentVariant.DANGER} 
        fullWidth 
        aria-label="Delete" 
      />
    </div>
  ),
};
