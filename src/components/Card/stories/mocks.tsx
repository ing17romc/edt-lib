import type { Meta } from '@storybook/react-vite';
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
