import { CardProps, CardVariant } from '../types';

/**
 * Datos de prueba para el componente Card
 */
export const mockCardProps: CardProps = {
  children: 'Contenido de la tarjeta',
  title: 'Título de la tarjeta',
  subtitle: 'Subtítulo opcional',
  imageUrl: 'https://via.placeholder.com/300x160',
  imageAlt: 'Imagen de ejemplo',
  variant: CardVariant.ELEVATED,
};

/**
 * Datos de prueba para una tarjeta sin imagen
 */
export const mockCardWithoutImage: CardProps = {
  children: 'Contenido sin imagen',
  title: 'Tarjeta sin imagen',
  subtitle: 'Esta tarjeta no tiene imagen',
};

/**
 * Datos de prueba para una tarjeta clickeable
 */
export const mockClickableCard: CardProps = {
  ...mockCardProps,
  title: 'Tarjeta clickeable',
  subtitle: 'Haz clic para ver la acción',
  onClick: () => console.log('Card clicked!'),
};
