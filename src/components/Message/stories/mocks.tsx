import type { Meta } from '@storybook/react-vite'
import { MessageProps } from '../types'
import { ComponentVariant } from '../../types'

export const mockOnClose = () => {}

export const defaultArgs: Partial<MessageProps> = {
  variant: ComponentVariant.PRIMARY,
  closable: false,
}

export const argTypes: NonNullable<Meta<MessageProps>['argTypes']> = {
  variant: {
    control: { type: 'select' },
    options: [
      ComponentVariant.PRIMARY,
      ComponentVariant.SUCCESS,
      ComponentVariant.DANGER,
      ComponentVariant.WARNING,
    ],
    description: 'Color variant that conveys the intent of the message.',
    table: {
      type: { summary: 'primary | success | danger | warning' },
      defaultValue: { summary: ComponentVariant.PRIMARY },
    },
  },
  closable: {
    control: { type: 'boolean' },
    description: 'When true, a dismiss button is shown to close the message.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  title: {
    control: { type: 'text' },
    description: 'Optional bold title rendered above the message body.',
    table: { type: { summary: 'string' } },
  },
  children: {
    control: { type: 'text' },
    description: 'Main message content.',
    table: { type: { summary: 'ReactNode' } },
  },
  onClose: {
    action: 'closed',
    description: 'Callback fired when the dismiss button is clicked.',
    table: { type: { summary: '() => void' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'An inline message banner for displaying feedback such as info, success, warning, or error states. Supports an optional title, body content, and a dismissible close button.',
    },
  },
}
