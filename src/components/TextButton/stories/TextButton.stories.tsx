import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import TextButton from '../';
import { argTypes, parameters, defaultArgs, allColors, allSizes } from './mocks';

const meta: Meta<typeof TextButton> = {
  title: 'Components/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  argTypes,
  parameters,
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /text button/i });
    await expect(button).toHaveClass('textButton');
    await expect(button).toHaveClass('size-medium');
    await expect(button).toHaveClass('color-primary');
    await expect(button).toHaveClass('underline-hover');
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      {allSizes.map((size) => (
        <TextButton key={size} size={size}>
          {size.charAt(0).toUpperCase() + size.slice(1)}
        </TextButton>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[0]).toHaveClass('size-small');
    await expect(buttons[1]).toHaveClass('size-medium');
    await expect(buttons[2]).toHaveClass('size-large');
  },
  parameters: {
    docs: {
      description: {
        story: 'Available sizes for the TextButton component.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      {allColors.map((color) => (
        <TextButton key={color} color={color}>
          {color!.charAt(0).toUpperCase() + color!.slice(1)}
        </TextButton>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Available color variants for the TextButton component.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <TextButton>Normal</TextButton>
      <TextButton disabled>Disabled</TextButton>
      <TextButton loading>Loading</TextButton>
      <TextButton fullWidth>Full width</TextButton>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');
    await expect(buttons[1]).toBeDisabled();
    await expect(buttons[2]).toHaveClass('loading');
    await expect(buttons[3]).toHaveClass('fullWidth');
  },
  parameters: {
    docs: {
      description: {
        story: 'Different interaction states: default, disabled, loading, and full-width.',
      },
    },
  },
};

export const Underline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <TextButton underline="none">None</TextButton>
      <TextButton underline="hover">Hover</TextButton>
      <TextButton underline="always">Always</TextButton>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [noneBtn, hoverBtn, alwaysBtn] = canvas.getAllByRole('button');
    await expect(noneBtn).toHaveClass('underline-none');
    await expect(hoverBtn).toHaveClass('underline-hover');
    await expect(alwaysBtn).toHaveClass('underline-always');
  },
  parameters: {
    docs: {
      description: {
        story: 'Underline display options: none, on hover, or always visible.',
      },
    },
  },
};
