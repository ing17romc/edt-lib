import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Menu from '../index'
import { defaultArgs, argTypes } from './mocks'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
}

export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {}

export const WithActiveItem: Story = {
  args: {
    activeKey: 'item2',
  },
}

export const WithDivider: Story = {
  args: {
    items: [
      { key: 'profile', label: 'Perfil' },
      { key: 'settings', label: 'Configuración' },
      { key: 'sep', label: '', divider: true },
      { key: 'logout', label: 'Cerrar sesión' },
    ],
  },
}

export const WithIcons: Story = {
  render: () => (
    <Menu
      items={[
        { key: 'home', label: 'Inicio', icon: '🏠' },
        { key: 'settings', label: 'Ajustes', icon: '⚙️' },
        { key: 'sep', label: '', divider: true },
        { key: 'disabled', label: 'Sin acceso', disabled: true },
      ]}
    />
  ),
}
