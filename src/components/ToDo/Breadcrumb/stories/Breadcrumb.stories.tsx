import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Breadcrumb from '../index'
import { defaultArgs, argTypes } from './mocks'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {}

export const CustomSeparator: Story = {
  args: {
    separator: '>',
  },
}

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Inicio' }],
  },
}

export const DeepNavigation: Story = {
  args: {
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Tecnología', href: '/blog/tecnologia' },
      { label: 'React', href: '/blog/tecnologia/react' },
      { label: 'Componentes' },
    ],
  },
}
