import type { Preview } from '@storybook/react-vite';
import '../src/styles/index.scss';

const preview: Preview = {
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
  },
};

export default preview;
