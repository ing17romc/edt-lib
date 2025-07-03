import type { Meta, StoryObj } from '@storybook/react';
import './color.scss';
import Color from './index';
import { defaultArgs, argTypes, parameters } from './stories/mocks';

const meta: Meta<typeof Color> = {
  title: 'Static/Color',
  component: Color,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
  parameters,
};

export default meta;

type Story = StoryObj<typeof Color>;

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const FontColorsOnly: Story = {
  args: {
    showFontColors: true,
    showBackgroundColors: false,
    showScssVariables: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra solo los colores de fuente.'
      }
    }
  }
};

export const BackgroundColorsOnly: Story = {
  args: {
    showFontColors: false,
    showBackgroundColors: true,
    showScssVariables: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra solo los colores de fondo.'
      }
    }
  }
};

export const ScssVariablesOnly: Story = {
  args: {
    showFontColors: false,
    showBackgroundColors: false,
    showScssVariables: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra solo las variables SCSS de color.'
      }
    }
  }
};
