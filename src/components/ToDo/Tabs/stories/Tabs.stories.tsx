import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Tabs from '../index'
import { defaultArgs } from './mocks'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: defaultArgs,
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {}

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { key: 't1', label: 'Activo', content: <div>Pestaña activa</div> },
      { key: 't2', label: 'Deshabilitado', content: <div>No accesible</div>, disabled: true },
      { key: 't3', label: 'Normal', content: <div>Pestaña normal</div> },
    ],
  },
}

export const DefaultActiveSecond: Story = {
  args: {
    defaultActiveKey: 'tab2',
    tabs: [
      { key: 'tab1', label: 'Primera', content: <div>Contenido 1</div> },
      { key: 'tab2', label: 'Segunda', content: <div>Contenido 2 (activo)</div> },
      { key: 'tab3', label: 'Tercera', content: <div>Contenido 3</div> },
    ],
  },
}
