import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '..';
import { mockCardProps, mockCardWithoutImage, mockClickableCard, mockOutlinedCard, mockFilledCard, argTypes, parameters } from './mocks';
import styles from '../styles/Card.module.scss';

/**
 * The `Card` component is a versatile container that displays related content on a clear, delimited surface.
 * It supports multiple visual variants, optional images, and clickable behavior.
 * 
 * ### Key features:
 * - Multiple visual variants (elevated, outline, etc.)
 * - Support for optional images
 * - Optional clickable behavior
 * - Customizable content
 * 
 * ### Recommended usage:
 * - To group related information
 * - As product cards
 * - To display article summaries
 * - As navigation elements
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs', 'card', 'surface', 'container'],
  args: {
    ...mockCardProps,
  },
  argTypes,
  parameters,
  decorators: [
    (Story) => (
      <div className={styles['story-card']}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * Standard card with image and basic content.
 * This is the default variant of the Card component.
 */
export const Default: Story = {
  args: {
    ...mockCardProps,
    onClick: undefined,
  },
};

/**
 * Card with outlined variant.
 * Ideal for highlighting content without a solid background.
 */
export const Outlined: Story = {
  args: {
    ...mockOutlinedCard,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Outlined variant that highlights content without a solid background.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="card-story">
        <Story />
      </div>
    ),
  ],
};

/**
 * Card with filled variant.
 * Provides a solid background for greater contrast.
 */
export const Filled: Story = {
  args: {
    ...mockFilledCard,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Variant with solid background for greater contrast and visual emphasis.',
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <div className="card-story">
        <Story />
      </div>
    ),
  ],
};

/**
 * Card without image that shows only text content.
 * Useful when content is more important than the image.
 */
export const WithoutImage: Story = {
  args: {
    ...mockCardWithoutImage,
    onClick: undefined,
    children: (
      <div>
        <p>This is a card that does not include an image.</p>
        <p>Ideal for content that does not require visual support.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a card that only shows text without an image.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="card-story">
        <Story />
      </div>
    ),
  ],
};

/**
 * Clickable card that responds to click events.
 * Useful for navigation or showing more details.
 */
export const Clickable: Story = {
  args: {
    ...mockClickableCard,
    onClick: () => alert('Card clicked!'),
    title: 'Clickable card',
    subtitle: 'Click to see the action',
    children: (
      <div>
        <p>This card has a click handler.</p>
        <p>Try clicking anywhere on the card.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Card that can be clicked and responds to click events.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="card-story">
        <Story />
      </div>
    ),
  ],
};
