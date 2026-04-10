import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Snackbar from '../index'
import { ComponentVariant } from '../../../types'
import { defaultArgs, argTypes, parameters } from './mocks'

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
  parameters,
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

const WithCloseSnackbar = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      {!open && (
        <button type="button" onClick={() => setOpen(true)}>
          Show snackbar
        </button>
      )}
      <Snackbar
        message="Message with close button"
        open={open}
        duration={0}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export const WithClose: Story = {
  render: () => <WithCloseSnackbar />,
}

const WithActionSnackbar = () => {
  const [open, setOpen] = useState(true)
  return (
    <Snackbar
      message="File deleted"
      variant={ComponentVariant.DANGER}
      open={open}
      duration={0}
      actionLabel="Undo"
      onAction={() => alert('Action executed')}
      onClose={() => setOpen(false)}
    />
  )
}

export const WithAction: Story = {
  render: () => <WithActionSnackbar />,
}

const AutoCloseSnackbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        Show snackbar (3s)
      </button>
      <Snackbar
        message="Closes in 3 seconds"
        variant={ComponentVariant.SUCCESS}
        open={open}
        duration={3000}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export const AutoClose: Story = {
  render: () => <AutoCloseSnackbar />,
}
