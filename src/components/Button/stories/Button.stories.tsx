import type { Meta, StoryObj } from '@storybook/react';
import Button from '..';
import { buttonStories, variants, sizes } from './mocks';
import { ButtonVariant, ButtonSize } from '../types';

const meta = {
  title: 'Components/Button',
  ...buttonStories,
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

// Historias básicas
export const Default: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MEDIUM,
  },
};

// Variantes
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      {variants.map(({ variant, label }) => (
        <div key={variant} style={{ marginBottom: '1rem' }}>
          <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
            {label}
          </div>
          <Button variant={variant}>
            {label} Button
          </Button>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

// Tamaños
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end' }}>
      {sizes.map(({ size, label }) => (
        <div key={size} style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
            {label}
          </div>
          <Button size={size}>
            {size} Button
          </Button>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

// Estados
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>Disabled</div>
        <Button disabled>Disabled Button</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', maxWidth: '300px' }}>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>Full Width</div>
        <Button fullWidth>Full Width Button</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

// Combinaciones
export const Combinations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {variants.map(({ variant, label: variantLabel }) => (
        <div key={variant}>
          <div style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#666', fontWeight: '500' }}>
            {variantLabel} Variant
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {sizes.map(({ size, label: sizeLabel }) => (
              <div key={`${variant}-${size}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#888' }}>{sizeLabel}</div>
                <Button variant={variant} size={size}>
                  {sizeLabel}
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};
