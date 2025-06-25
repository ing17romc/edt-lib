import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import './color.scss';
import Color from './index';

const meta: Meta<typeof Color> = {
  title: 'Static/Color',
  component: Color,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A component that displays color examples including font colors, background colors, and SCSS color variables.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Color>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default implementation of the Color component showing all color examples.'
      }
    }
  }
};

export const WithCustomTitle: Story = {
  render: () => (
    <div>
      <h1>Custom Color Palette</h1>
      <Color />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of the Color component with a custom title.'
      }
    }
  }
};
