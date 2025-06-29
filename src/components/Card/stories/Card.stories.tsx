import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardVariant } from '..';
import { mockCardProps, mockCardWithoutImage, mockClickableCard } from './mocks';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    ...mockCardProps,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(CardVariant),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Outlined: Story = {
  args: {
    ...mockCardProps,
    variant: CardVariant.OUTLINED,
  },
};

export const Filled: Story = {
  args: {
    ...mockCardProps,
    variant: CardVariant.FILLED,
  },
};

export const WithoutImage: Story = {
  args: {
    ...mockCardWithoutImage,
  },
};

export const Clickable: Story = {
  args: {
    ...mockClickableCard,
  },
};
