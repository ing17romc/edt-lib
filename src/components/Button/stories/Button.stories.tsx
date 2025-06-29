import type { Meta, StoryObj } from '@storybook/react';
import Button from '..';
import { ButtonVariant, ButtonSize } from '../types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.values(ButtonVariant),
      },
      description: 'Variante visual del botón',
      table: {
        type: { summary: Object.values(ButtonVariant).join(' | ') },
        defaultValue: { summary: ButtonVariant.PRIMARY },
      },
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(ButtonSize),
      },
      description: 'Tamaño del botón',
      table: {
        type: { summary: Object.values(ButtonSize).join(' | ') },
        defaultValue: { summary: ButtonSize.MEDIUM },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Si el botón está deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Si muestra un indicador de carga',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Si el botón ocupa todo el ancho disponible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
      description: 'Tipo de botón HTML',
      table: {
        type: { summary: 'button | submit | reset' },
        defaultValue: { summary: 'button' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Función que se ejecuta al hacer clic',
      table: {
        category: 'Events',
      },
    },
  },
  args: {
    children: 'Click me',
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MEDIUM,
    disabled: false,
    loading: false,
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Historias básicas
export const Primary: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: ButtonVariant.TERTIARY,
    children: 'Tertiary Button',
  },
};

export const Danger: Story = {
  args: {
    variant: ButtonVariant.DANGER,
    children: 'Danger Button',
  },
};

export const Success: Story = {
  args: {
    variant: ButtonVariant.SUCCESS,
    children: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    variant: ButtonVariant.WARNING,
    children: 'Warning Button',
  },
};

// Historias de estados
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
};

// Historias de tamaños
export const Small: Story = {
  args: {
    size: ButtonSize.SMALL,
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: ButtonSize.LARGE,
    children: 'Large Button',
  },
};

// Historia de ancho completo
export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
};

// Historia con ícono
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span style={{ marginRight: '8px' }}>⭐</span>
        Button with Icon
      </>
    ),
  },
};

// Historia personalizada
export const CustomButton: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.LARGE,
    children: 'Custom Button',
    style: {
      borderRadius: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  },
};
