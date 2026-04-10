import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Message from '../index'
import { ComponentVariant } from '../../../types'
import { defaultArgs, argTypes, parameters } from './mocks'

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  args: {
    ...defaultArgs,
    children: 'This is an informational message with important content.',
  },
  argTypes,
  parameters,
}

export default meta

type Story = StoryObj<typeof Message>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Message variant={ComponentVariant.PRIMARY}>Informational message.</Message>
      <Message variant={ComponentVariant.SUCCESS}>Operation completed successfully.</Message>
      <Message variant={ComponentVariant.DANGER}>An unexpected error has occurred.</Message>
      <Message variant={ComponentVariant.WARNING}>Please review the information before continuing.</Message>
    </div>
  ),
}

export const WithTitle: Story = {
  args: {
    title: 'Message title',
    variant: ComponentVariant.PRIMARY,
    children: 'Detailed message description.',
  },
}

const ClosableMessage = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      {!open && (
        <button type="button" onClick={() => setOpen(true)}>
          Show message
        </button>
      )}
      {open && (
        <Message
          variant={ComponentVariant.SUCCESS}
          title="Saved successfully"
          closable
          onClose={() => setOpen(false)}
        >
          Changes have been saved correctly.
        </Message>
      )}
    </div>
  )
}

export const Closable: Story = {
  render: () => <ClosableMessage />,
}
