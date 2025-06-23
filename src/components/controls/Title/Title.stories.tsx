import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Title from './index';

const meta: Meta<typeof Title> = {
  title: 'Controls/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Nivel del heading (h1-h6)',
    },
    className: { control: 'text', description: 'Clase CSS adicional' },
    style: { control: 'object', description: 'Estilos CSS en línea' },
    children: { control: 'text', description: 'Contenido del título' },
  },
  args: {
    level: 1,
    children: 'Título principal',
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'Título principal',
  },
};

export const Niveles: Story = {
  render: (args) => (
    <>
      <Title level={1}>Título h1</Title>
      <Title level={2}>Título h2</Title>
      <Title level={3}>Título h3</Title>
      <Title level={4}>Título h4</Title>
      <Title level={5}>Título h5</Title>
      <Title level={6}>Título h6</Title>
    </>
  ),
};

export const Personalizado: Story = {
  args: {
    level: 2,
    className: 'custom-title',
    style: { color: 'tomato', fontWeight: 'bold' },
    children: 'Título personalizado',
  },
};
