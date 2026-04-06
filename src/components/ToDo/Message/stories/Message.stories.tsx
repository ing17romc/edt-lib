import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Message from '../index'
import { ComponentVariant } from '../../../types'
import { defaultArgs, argTypes } from './mocks'

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  args: {
    ...defaultArgs,
    children: 'Este es un mensaje informativo con información importante.',
  },
  argTypes,
}

export default meta

type Story = StoryObj<typeof Message>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Message variant={ComponentVariant.PRIMARY}>Mensaje informativo.</Message>
      <Message variant={ComponentVariant.SUCCESS}>Operación completada con éxito.</Message>
      <Message variant={ComponentVariant.DANGER}>Ha ocurrido un error inesperado.</Message>
      <Message variant={ComponentVariant.WARNING}>Revisa la información antes de continuar.</Message>
    </div>
  ),
}

export const WithTitle: Story = {
  args: {
    title: 'Título del mensaje',
    variant: ComponentVariant.PRIMARY,
    children: 'Descripción detallada del mensaje.',
  },
}

export const Closable: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <div>
        {!open && (
          <button type="button" onClick={() => setOpen(true)}>
            Mostrar mensaje
          </button>
        )}
        {open && (
          <Message
            variant={ComponentVariant.SUCCESS}
            title="Guardado exitoso"
            closable
            onClose={() => setOpen(false)}
          >
            Los cambios se han guardado correctamente.
          </Message>
        )}
      </div>
    )
  },
}
