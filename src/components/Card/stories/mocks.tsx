import type { Meta } from '@storybook/react-vite';
import { CardProps, CardVariant } from '../types';

/**
 * Test data for the Card component
 */
export const mockCardProps: CardProps = {
  children: 'Card content',
  title: 'Card Title',
  subtitle: 'Optional subtitle',
  imageUrl: 'https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png',
  imageAlt: 'Example image',
  variant: CardVariant.ELEVATED,
};

/**
 * Test data for a card without image
 */
export const mockCardWithoutImage: CardProps = {
  imageUrl: '',
  children: 'Content without image',
  title: 'Card without image',
  subtitle: 'This card has no image',
};

/**
 * Test data for a clickable card
 */
export const mockClickableCard: CardProps = {
  children: 'Clickable card content',
  title: 'Clickable card',
  subtitle: 'Click to see the action',
  imageAlt: 'Example image',
  variant: CardVariant.ELEVATED,
  onClick: () => console.log('Card clicked!'),
};

/**
 * Test data for a card with Outlined variant
 */
export const mockOutlinedCard: CardProps = {
  children: 'Outlined card content',
  title: 'Outlined Card',
  subtitle: 'Outlined variant',
  imageUrl: '',
  imageAlt: '',
  variant: CardVariant.OUTLINED,
};

/**
 * Test data for a card with Filled variant
 */
export const mockFilledCard: CardProps = {
  children: 'Filled card content',
  title: 'Filled Card',
  subtitle: 'Filled variant',
  imageUrl: 'https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png',
  imageAlt: 'Example image',
  variant: CardVariant.FILLED,
};

export const argTypes: Meta<CardProps>['argTypes'] = {
  variant: {
    control: 'select',
    options: Object.values(CardVariant),
    description: 'Visual variant of the card that determines its elevation and border style.',
    table: {
      type: { summary: Object.values(CardVariant).join(' | ') },
      defaultValue: { summary: CardVariant.ELEVATED },
    },
  },
  title: {
    control: 'text',
    description: 'Main heading text displayed at the top of the card body.',
    table: { type: { summary: 'string' } },
  },
  subtitle: {
    control: 'text',
    description: 'Optional secondary text shown beneath the title.',
    table: { type: { summary: 'string' } },
  },
  imageUrl: {
    control: 'text',
    description: 'URL of the image rendered at the top of the card. Leave empty to hide the image area.',
    table: { type: { summary: 'string' } },
  },
  imageAlt: {
    control: 'text',
    description: 'Accessible alt text for the card image.',
    table: { type: { summary: 'string' } },
  },
  children: {
    control: 'text',
    description: 'Content rendered inside the card body, below the title and subtitle.',
    table: { type: { summary: 'ReactNode' } },
  },
  onClick: {
    action: 'clicked',
    description: 'When provided, the card becomes interactive and fires this callback on click.',
    table: { type: { summary: '() => void' } },
  },
  className: {
    control: 'text',
    description: 'Additional CSS class names for the card root element.',
    table: { type: { summary: 'string' } },
  },
};

export const parameters = {
  layout: 'centered',
  docs: {
    description: {
      component:
        'A flexible surface component used to group and display related content. Supports multiple visual variants, optional images, titles, subtitles, and an interactive (clickable) mode.',
    },
  },
};
