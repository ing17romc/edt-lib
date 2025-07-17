import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardVariant } from '..';
import { mockCardProps, mockCardWithoutImage, mockClickableCard, mockOutlinedCard, mockFilledCard } from './mocks';
import './CardStories.scss';

/**
 * El componente `Card` es un contenedor versátil que muestra contenido relacionado en una superficie clara y delimitada.
 * Soporta múltiples variantes visuales, imágenes opcionales y comportamiento clickeable.
 * 
 * ### Características principales:
 * - Múltiples variantes visuales (elevada, outline, etc.)
 * - Soporte para imágenes opcionales
 * - Comportamiento clickeable opcional
 * - Contenido personalizable
 * 
 * ### Uso recomendado:
 * - Para agrupar información relacionada
 * - Como tarjetas de producto
 * - Para mostrar resúmenes de artículos
 * - Como elementos de navegación
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs', 'card', 'surface', 'container'],
  args: {
    ...mockCardProps,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(CardVariant),
      description: 'Variante visual de la tarjeta',
      table: {
        type: { summary: 'CardVariant' },
        defaultValue: { summary: 'elevated' },
      },
    },
    title: {
      control: 'text',
      description: 'Título principal de la tarjeta',
    },
    subtitle: {
      control: 'text',
      description: 'Subtítulo opcional',
    },
    imageUrl: {
      control: 'text',
      description: 'URL de la imagen a mostrar en la parte superior',
    },
    imageAlt: {
      control: 'text',
      description: 'Texto alternativo para la imagen',
    },

    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un componente de tarjeta flexible que puede contener cualquier tipo de contenido.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * Tarjeta estándar con imagen y contenido básico.
 * Esta es la variante por defecto del componente Card.
 */
export const Default: Story = {
  args: {
    ...mockCardProps,
    onClick: undefined,
  },
};

/**
 * Tarjeta con variante de borde (outlined).
 * Ideal para destacar contenido sin un fondo sólido.
 */
export const Outlined: Story = {
  args: {
    ...mockOutlinedCard,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante con borde que resalta el contenido sin necesidad de un fondo sólido.',
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
 * Tarjeta con variante de relleno (filled).
 * Proporciona un fondo sólido para mayor contraste.
 */
export const Filled: Story = {
  args: {
    ...mockFilledCard,
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Variante con fondo sólido para mayor contraste y énfasis visual.',
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
 * Tarjeta sin imagen que muestra solo el contenido de texto.
 * Útil cuando el contenido es más importante que la imagen.
 */
export const WithoutImage: Story = {
  args: {
    ...mockCardWithoutImage,
    onClick: undefined,
    children: (
      <div>
        <p>Esta es una tarjeta que no incluye una imagen.</p>
        <p>Ideal para contenido que no requiere soporte visual.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de una tarjeta que solo muestra texto sin imagen.',
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
 * Tarjeta clickeable que responde a eventos de clic.
 * Útil para navegación o para mostrar más detalles.
 */
export const Clickable: Story = {
  args: {
    ...mockClickableCard,
    onClick: () => alert('Card clicked!'),
    title: 'Tarjeta clickeable',
    subtitle: 'Haz clic para ver la acción',
    children: (
      <div>
        <p>Esta tarjeta tiene un manejador de clics.</p>
        <p>Intenta hacer clic en cualquier parte de la tarjeta.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Tarjeta que puede ser clickeada y responde a eventos de clic.',
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
