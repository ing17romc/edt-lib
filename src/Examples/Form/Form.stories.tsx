import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Form from './index';

/**
 * Form Component
 * 
 * Componente de formulario para captura y edición de datos personales.
 * Incluye campos de texto, selectores, botones y controles de privacidad.
 */
const meta: Meta<typeof Form> = {
  title: 'Examples/Form',
  component: Form,
  tags: ['autodocs', 'examples'],
  parameters: {
    componentSubtitle: 'Formulario de datos personales',
    docs: {
      description: {
        component: `
Componente de formulario interactivo que incluye:
- Campos de texto para nombre, apellido, DNI, etc.
- Selectores para estado civil y género
- Checkbox para aceptar términos y condiciones
- Validación de campos requeridos
- Manejo de envío de formulario
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Vista por defecto del formulario con valores iniciales',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => {
    // Este ejemplo muestra cómo se vería el formulario deshabilitado
    // En una implementación real, esto se controlaría mediante props
    return (
      <div>
        <p>Este es un ejemplo de cómo se vería el formulario deshabilitado.</p>
        <div style={{ pointerEvents: 'none', opacity: 0.6 }}>
          <Form />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de formulario en estado deshabilitado',
      },
    },
  },
};
