import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextBox from './index';
import { TextBoxProps } from './types';

const meta: Meta<typeof TextBox> = {
  title: 'Controls/TextBox',
  component: TextBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un componente de campo de texto personalizable con múltiples opciones de configuración.',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'ID único para el campo de entrada',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Valor actual del campo',
      table: {
        type: { summary: 'string' },
      },
    },
    titleTop: {
      control: 'text',
      description: 'Título que aparece encima del campo',
      table: {
        type: { summary: 'string' },
      },
    },
    titleBottom: {
      control: 'text',
      description: 'Texto descriptivo debajo del campo',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de marcador de posición',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Indica si el campo es obligatorio',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isPassword: {
      control: 'boolean',
      description: 'Indica si el campo es de tipo contraseña',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indica si el campo está deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Indica si el campo es de solo lectura',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    noPaste: {
      control: 'boolean',
      description: 'Indica si está deshabilitado el pegado de texto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    noCopy: {
      control: 'boolean',
      description: 'Indica si está deshabilitada la copia de texto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: { type: 'number', min: 100, max: 1000, step: 10 },
      description: 'Ancho del campo en píxeles',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      },
    },
    eventChange: {
      action: 'changed',
      description: 'Manejador del evento de cambio',
      table: {
        type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    eventFocus: {
      action: 'focused',
      description: 'Manejador del evento de foco',
      table: {
        type: { summary: '(e: React.FocusEvent<HTMLInputElement>) => void' },
      },
    },
    eventBlur: {
      action: 'blurred',
      description: 'Manejador del evento de pérdida de foco',
      table: {
        type: { summary: '(e: React.FocusEvent<HTMLInputElement>) => void' },
      },
    },
    eventKeyDown: {
      action: 'keyDown',
      description: 'Manejador del evento de tecla presionada',
      table: {
        type: { summary: '(e: React.KeyboardEvent<HTMLInputElement>) => void' },
      },
    },
  },
  args: {
    id: 'default-textbox',
    value: '',
    placeholder: 'Escribe algo...',
    size: 200,
  },
};

export default meta;
type Story = StoryObj<typeof TextBox>;

/**
 * TextBox básico con las propiedades mínimas requeridas
 */
export const Default: Story = {
  args: {
    id: 'basic-textbox',
    value: 'Texto de ejemplo',
  },
};

/**
 * TextBox con títulos superior e inferior
 */
export const WithTitles: Story = {
  args: {
    id: 'with-titles',
    titleTop: 'Título superior',
    titleBottom: 'Texto de ayuda o descripción',
    value: '',
  },
};

/**
 * TextBox deshabilitado
 */
export const Disabled: Story = {
  args: {
    id: 'disabled-textbox',
    value: 'Campo deshabilitado',
    disabled: true,
  },
};

/**
 * TextBox de solo lectura
 */
export const ReadOnly: Story = {
  args: {
    id: 'readonly-textbox',
    value: 'Este texto no se puede modificar',
    readOnly: true,
  },
};

/**
 * Campo de contraseña
 */
export const Password: Story = {
  args: {
    id: 'password-textbox',
    isPassword: true,
    value: 'micontraseña',
    placeholder: 'Ingresa tu contraseña',
  },
};

/**
 * TextBox con restricciones de copiado y pegado
 */
export const WithCopyPasteRestrictions: Story = {
  args: {
    id: 'restricted-textbox',
    value: 'No se puede copiar ni pegar aquí',
    noCopy: true,
    noPaste: true,
  },
};

/**
 * TextBox con ancho personalizado
 */
export const CustomWidth: Story = {
  args: {
    id: 'custom-width-textbox',
    value: 'Campo más ancho',
    size: 300,
  },
};

/**
 * TextBox con todas las propiedades
 */
export const FullFeatured: Story = {
  args: {
    id: 'full-featured-textbox',
    titleTop: 'Información personal',
    placeholder: 'Escribe tu nombre completo',
    titleBottom: 'Campo obligatorio',
    value: 'Juan Pérez',
    required: true,
    size: 250,
  },
};
