import { MessageProps } from '../types'
import { ComponentVariant } from '../../../types'

export const mockOnClose = vi.fn()

export const defaultMessageProps: MessageProps = {
  children: 'Este es un mensaje informativo.',
}

export const titleMessageProps: MessageProps = {
  children: 'Descripción del mensaje.',
  title: 'Título del mensaje',
  variant: ComponentVariant.SUCCESS,
}

export const closableMessageProps: MessageProps = {
  children: 'Este mensaje se puede cerrar.',
  closable: true,
  onClose: mockOnClose,
}

export const allMessageVariants: MessageProps['variant'][] = [
  ComponentVariant.PRIMARY,
  ComponentVariant.SUCCESS,
  ComponentVariant.DANGER,
  ComponentVariant.WARNING,
]
