import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/docs/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-vitest'],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    config.base = '/edt-lib/';
    return config;
  },
};

export default config;
