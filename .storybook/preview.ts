import React from 'react';
import type { Preview } from '@storybook/react-vite';
import '../src/styles/index.scss';
import ThemeProvider from '../src/components/ThemeProvider';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'system', title: 'System' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as 'light' | 'dark' | 'system';

      return React.createElement(
        ThemeProvider,
        {
          key: theme,
          defaultTheme: theme,
          forcedTheme: theme === 'system' ? undefined : theme,
          style: { minHeight: '100vh', padding: '1.5rem' },
          children: React.createElement(Story),
        },
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: 'light', value: '#f5f5f5' },
        white: { name: 'white', value: '#ffffff' },
        dark: { name: 'dark', value: '#333333' },
      },
    },
    layout: 'centered',
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
    theme: 'light',
  },
};

export default preview;
