import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Footer from '..';
import { MockFooterContent } from './mocks';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    copyright: {
      control: 'text',
      description: 'Texto de copyright',
    },
    year: {
      control: 'number',
      description: 'Año del copyright',
    },
    className: {
      control: 'text',
      description: 'Clase CSS adicional',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: (args) => (
    <Footer {...args}>
      <MockFooterContent />
    </Footer>
  ),
  args: {
    copyright: 'Todos los derechos reservados',
    year: new Date().getFullYear(),
  },
};

export const SoloDerechos: Story = {
  render: (args) => <Footer {...args} />,
  args: {
    copyright: 'Todos los derechos reservados',
    year: new Date().getFullYear(),
  },
};

export const TextoPersonalizado: Story = {
  render: (args) => <Footer {...args} />,
  args: {
    copyright: 'Mi Empresa S.A.',
    year: 2025,
  },
};
