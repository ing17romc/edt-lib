import { CardProps, CardVariant } from '../types';

export const mockCardProps: CardProps = {
  children: 'Contenido de la tarjeta',
  title: 'Título de la tarjeta',
  subtitle: 'Subtítulo opcional',
  imageUrl: 'https://via.placeholder.com/300x160',
  imageAlt: 'Imagen de ejemplo',
  variant: CardVariant.ELEVATED,
};

export const mockCardWithoutImage: CardProps = {
  children: 'Contenido sin imagen',
  title: 'Tarjeta sin imagen',
};

export const mockClickableCard: CardProps = {
  ...mockCardProps,
  onClick: jest.fn(),
  children: 'Tarjeta clickeable',
};
