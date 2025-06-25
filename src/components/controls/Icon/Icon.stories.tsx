import type { Meta, StoryObj } from '@storybook/react';
import Icon from './index';
import { IconName } from './types';

/**
 * Componente Icon que muestra un ícono de Material Icons.
 * Proporciona una interfaz consistente para mostrar íconos en la aplicación.
 */
const meta: Meta<typeof Icon> = {
  title: 'Controls/Icon',
  component: Icon,
  tags: ['autodocs', 'controls'],
  parameters: {
    componentSubtitle: 'Componente de ícono',
    docs: {
      description: {
        component: 'Muestra un ícono de Material Icons con diferentes tamaños y estilos.'
      },
    },
  },
  argTypes: {
    name: {
      description: 'Nombre del ícono a mostrar',
      control: 'select',
      options: [
        'add', 'remove', 'edit', 'delete', 'search', 
        'save', 'cancel', 'check', 'warning', 'info', 'help', 'close'
      ] as IconName[],
      table: {
        type: { summary: 'IconName' },
      },
    },
    size: {
      description: 'Tamaño del ícono',
      control: 'select',
      options: ['SM', 'MD', 'LG'],
      table: {
        type: { summary: 'IconSize' },
        defaultValue: { summary: 'MD' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'add',
    size: 'MD',
  },
};

export const Small: Story = {
  args: {
    name: 'search',
    size: 'SM',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ícono pequeño (SM)'
      }
    }
  }
};

export const Large: Story = {
  args: {
    name: 'info',
    size: 'LG',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ícono grande (LG)'
      }
    }
  }
};

// Story para mostrar todos los íconos disponibles
export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
      {[
        'add', 'remove', 'edit', 'delete', 'search',
        'save', 'cancel', 'check', 'warning', 'info', 'help', 'close'
      ].map((icon) => (
        <div key={icon} style={{ textAlign: 'center', padding: '10px' }}>
          <Icon name={icon as IconName} size="MD" />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{icon}</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra todos los íconos disponibles en la biblioteca.'
      }
    }
  }
};
