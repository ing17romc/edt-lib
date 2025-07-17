import { CardProps, CardVariant } from '../types';

/**
 * Datos de prueba para el componente Card
 */
export const mockCardProps: CardProps = {
  children: 'Contenido de la tarjeta',
  title: 'Título de la tarjeta',
  subtitle: 'Subtítulo opcional',
  imageUrl: 'https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png',
  imageAlt: 'Imagen de ejemplo',
  variant: CardVariant.ELEVATED,
};

/**
 * Datos de prueba para una tarjeta sin imagen
 */
export const mockCardWithoutImage: CardProps = {
  imageUrl: '',
  children: 'Contenido sin imagen',
  title: 'Tarjeta sin imagen',
  subtitle: 'Esta tarjeta no tiene imagen',
};

/**
 * Datos de prueba para una tarjeta clickeable
 */
export const mockClickableCard: CardProps = {
  children: 'Contenido de la tarjeta clickeable',
  title: 'Tarjeta clickeable',
  subtitle: 'Haz clic para ver la acción',
  imageAlt: 'Imagen de ejemplo',
  variant: CardVariant.ELEVATED,
  onClick: () => console.log('Card clicked!'),
};

/**
 * Datos de prueba para una tarjeta con variante Outlined
 */
export const mockOutlinedCard: CardProps = {
  children: 'Contenido de tarjeta con borde',
  title: 'Tarjeta Outlined',
  subtitle: 'Variante con borde',
  imageUrl: '',
  imageAlt: '',
  variant: CardVariant.OUTLINED,
};

/**
 * Datos de prueba para una tarjeta con variante Filled
 */
export const mockFilledCard: CardProps = {
  children: 'Contenido de tarjeta con relleno',
  title: 'Tarjeta Filled',
  subtitle: 'Variante con relleno',
  imageUrl: 'https://w7.pngwing.com/pngs/745/105/png-transparent-pencil-and-paper-illustration-ssc-mts-exam-test-computer-icons-educational-entrance-examination-test-paper-miscellaneous-angle-text-thumbnail.png',
  imageAlt: 'Imagen de ejemplo',
  variant: CardVariant.FILLED,
};
