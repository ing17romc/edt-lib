import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Snackbar from '../index'
import { ComponentVariant } from '../../../types'
import { defaultArgs, argTypes } from './mocks'

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
}

export default meta

type Story = StoryObj<typeof Snackbar>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Snackbar message="Primary notification" variant={ComponentVariant.PRIMARY} open />
      <Snackbar message="Success notification" variant={ComponentVariant.SUCCESS} open />
      <Snackbar message="Danger notification" variant={ComponentVariant.DANGER} open />
      <Snackbar message="Warning notification" variant={ComponentVariant.WARNING} open />
    </div>
  ),
}

export const WithClose: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <div>
        {!open && (
          <button type="button" onClick={() => setOpen(true)}>
            Mostrar snackbar
          </button>
        )}
        <Snackbar
          message="Mensaje con botón de cierre"
          open={open}
          duration={0}
          onClose={() => setOpen(false)}
        />
      </div>
    )
  },
}

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Snackbar
        message="Archivo eliminado"
        variant={ComponentVariant.DANGER}
        open={open}
        duration={0}
        actionLabel="Deshacer"
        onAction={() => alert('Acción ejecutada')}
        onClose={() => setOpen(false)}
      />
    )
  },
}

export const AutoClose: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <button type="button" onClick={() => setOpen(true)}>
          Mostrar snackbar (3s)
        </button>
        <Snackbar
          message="Se cerrará en 3 segundos"
          variant={ComponentVariant.SUCCESS}
          open={open}
          duration={3000}
          onClose={() => setOpen(false)}
        />
      </div>
    )
  },
}
