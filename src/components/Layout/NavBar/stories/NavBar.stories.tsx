import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import NavBar from '..';
import { MockLogo, MockNav } from './mocks';

const meta: Meta<typeof NavBar> = {
  title: 'Layout/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Application or page title displayed in the navigation bar.',
      table: { type: { summary: 'string' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name for the root element.',
      table: { type: { summary: 'string' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A top navigation bar that combines a logo slot, an optional title, and navigation link children. Sticks to the top of the page and spans full width.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  render: (args) => (
    <NavBar {...args} logo={<MockLogo />} title="My App">
      <MockNav />
    </NavBar>
  ),
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('My App')).toBeInTheDocument();
    await expect(canvas.getByText('Inicio')).toBeInTheDocument();
    await expect(canvas.getByText('Acerca de')).toBeInTheDocument();
    await expect(canvas.getByText('Contacto')).toBeInTheDocument();
  },
};

export const TitleOnly: Story = {
  render: (args) => (
    <NavBar {...args} title="My App" />
  ),
  args: {},
};

export const LogoOnly: Story = {
  render: (args) => (
    <NavBar {...args} logo={<MockLogo />} />
  ),
  args: {},
};

export const Empty: Story = {
  render: (args) => <NavBar {...args} />,
  args: {},
};
