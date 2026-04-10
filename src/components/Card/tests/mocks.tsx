import { CardProps, CardVariant } from '../types';

export const mockCardProps: CardProps = {
  children: 'Card content',
  title: 'Card Title',
  subtitle: 'Optional subtitle',
  imageUrl: 'https://via.placeholder.com/300x160',
  imageAlt: 'Example image',
  variant: CardVariant.ELEVATED,
};

export const mockCardWithoutImage: CardProps = {
  children: 'Content without image',
  title: 'Card without image',
};

export const mockClickableCard: CardProps = {
  ...mockCardProps,
  onClick: vi.fn(),
  children: 'Clickable card',
};
