import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import FloatingMenu from '../index'
import { defaultArgs, argTypes } from './mocks'

const meta: Meta<typeof FloatingMenu> = {
  title: 'Components/FloatingMenu',
  component: FloatingMenu,
  tags: ['autodocs'],
  args: {
    ...defaultArgs,
    trigger: <button type="button">Opciones ▾</button>,
  },
  argTypes,
}

export default meta

type Story = StoryObj<typeof FloatingMenu>

export const Default: Story = {}

export const BottomEnd: Story = {
  args: { placement: 'bottom-end' },
}

export const WithIcons: Story = {
  args: {
    items: [
      { key: 'edit', label: 'Editar', icon: '✏️' },
      { key: 'duplicate', label: 'Duplicar', icon: '📋' },
      { key: 'sep', label: '', divider: true },
      { key: 'delete', label: 'Eliminar', icon: '🗑️' },
    ],
  },
}

export const Disabled: Story = {
  args: { disabled: true },
}
