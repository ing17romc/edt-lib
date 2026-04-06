import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NavBar from '..';
import { MockLogo, MockNav } from './mocks';

const meta: Meta<typeof NavBar> = {
  title: 'Layout/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título de la barra de navegación',
    },
    className: {
      control: 'text',
      description: 'Clase CSS adicional',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  render: (args) => (
    <NavBar {...args} logo={<MockLogo />} title="Mi Aplicación">
      <MockNav />
    </NavBar>
  ),
  args: {},
};

export const SoloTitulo: Story = {
  render: (args) => (
    <NavBar {...args} title="Mi Aplicación" />
  ),
  args: {},
};

export const SoloLogo: Story = {
  render: (args) => (
    <NavBar {...args} logo={<MockLogo />} />
  ),
  args: {},
};

export const SinContenido: Story = {
  render: (args) => <NavBar {...args} />,
  args: {},
};
