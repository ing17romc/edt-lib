import { MessageProps } from '../types'
import { ComponentVariant } from '../../types'

export const mockOnClose = vi.fn()

export const defaultMessageProps: MessageProps = {
  children: 'This is an informational message.',
}

export const titleMessageProps: MessageProps = {
  children: 'Message description.',
  title: 'Message title',
  variant: ComponentVariant.SUCCESS,
}

export const closableMessageProps: MessageProps = {
  children: 'This message can be closed.',
  closable: true,
  onClose: mockOnClose,
}

export const allMessageVariants: MessageProps['variant'][] = [
  ComponentVariant.PRIMARY,
  ComponentVariant.SUCCESS,
  ComponentVariant.DANGER,
  ComponentVariant.WARNING,
]
