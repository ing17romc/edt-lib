import type { Meta } from '@storybook/react-vite'
import { SnackbarProps } from '../types'
import { ComponentVariant } from '../../types'

export const mockOnClose = () => {}
export const mockOnAction = () => {}

export const defaultArgs: Partial<SnackbarProps> = {
  message: 'Operation completed successfully',
  variant: ComponentVariant.PRIMARY,
  open: true,
  duration: 0,
}

export const argTypes: NonNullable<Meta<SnackbarProps>['argTypes']> = {
  message: {
    control: { type: 'text' },
    description: 'Main text displayed inside the snackbar.',
    table: { type: { summary: 'string' } },
  },
  variant: {
    control: { type: 'select' },
    options: [
      ComponentVariant.PRIMARY,
      ComponentVariant.SUCCESS,
      ComponentVariant.DANGER,
      ComponentVariant.WARNING,
    ],
    description: 'Color variant conveying the type of feedback.',
    table: {
      type: { summary: 'primary | success | danger | warning' },
      defaultValue: { summary: ComponentVariant.PRIMARY },
    },
  },
  open: {
    control: { type: 'boolean' },
    description: 'Controls visibility of the snackbar.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  duration: {
    control: { type: 'number', min: 0 },
    description: 'Auto-dismiss delay in milliseconds. Set to 0 to disable auto-close.',
    table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
  },
  actionLabel: {
    control: { type: 'text' },
    description: 'Label of the optional action button rendered in the snackbar.',
    table: { type: { summary: 'string' } },
  },
  onClose: {
    action: 'closed',
    description: 'Callback fired when the snackbar is dismissed.',
    table: { type: { summary: '() => void' } },
  },
  onAction: {
    action: 'action',
    description: 'Callback fired when the action button is clicked.',
    table: { type: { summary: '() => void' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'A brief notification that appears at the bottom of the screen to provide feedback. Supports multiple color variants, an optional action button, and configurable auto-dismiss duration.',
    },
  },
}
