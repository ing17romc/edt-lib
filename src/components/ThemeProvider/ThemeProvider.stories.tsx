import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import ThemeProvider, { useTheme } from '.';

const ThemePreview = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div
      style={{
        display: 'grid',
        gap: '1rem',
        minWidth: '320px',
        padding: '1.5rem',
        borderRadius: '1rem',
        background: 'var(--color-surface-raised)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-text-primary)',
      }}
    >
      <div>
        <strong>Theme mode:</strong> <span data-testid="theme-mode">{theme}</span>
      </div>
      <div>
        <strong>Resolved theme:</strong> <span data-testid="resolved-theme">{resolvedTheme}</span>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button type="button" onClick={() => setTheme('light')}>
          Light
        </button>
        <button type="button" onClick={() => setTheme('dark')}>
          Dark
        </button>
        <button type="button" onClick={() => setTheme('system')}>
          System
        </button>
      </div>
    </div>
  );
};

const meta: Meta<typeof ThemeProvider> = {
  title: 'Utilities/ThemeProvider',
  component: ThemeProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Provides semantic runtime theming with support for light, dark, and system modes. It is safe to use in SSR environments such as Next.js.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemePreview />
    </ThemeProvider>
  ),
  args: {
    defaultTheme: 'system',
    enableSystem: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('theme-mode')).toBeInTheDocument();
    await expect(canvas.getByTestId('resolved-theme')).toBeInTheDocument();
  },
};

export const ForcedDark: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemePreview />
    </ThemeProvider>
  ),
  args: {
    defaultTheme: 'light',
    forcedTheme: 'dark',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('resolved-theme')).toHaveTextContent('dark');
  },
};
