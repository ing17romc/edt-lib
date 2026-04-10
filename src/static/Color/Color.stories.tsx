import type { Meta, StoryObj } from '@storybook/react-vite';
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
        story: 'Shows only the font colors.'
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
        story: 'Shows only the background colors.'
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
        story: 'Shows only the SCSS color variables.'
      }
    }
  }
};
