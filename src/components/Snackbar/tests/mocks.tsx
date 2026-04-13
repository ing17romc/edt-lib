import { SnackbarProps } from '../types'
import { ComponentVariant } from '../../types'

export const mockOnClose = vi.fn()
export const mockOnAction = vi.fn()

export const defaultSnackbarProps: SnackbarProps = {
  message: 'Operation completed successfully',
  open: true,
  duration: 0,
}

export const closableSnackbarProps: SnackbarProps = {
  message: 'Message with close button',
  open: true,
  duration: 0,
  onClose: mockOnClose,
}

export const actionSnackbarProps: SnackbarProps = {
  message: 'File deleted',
  open: true,
  duration: 0,
  onClose: mockOnClose,
  actionLabel: 'Undo',
  onAction: mockOnAction,
}

export const allSnackbarVariants: SnackbarProps['variant'][] = [
  ComponentVariant.PRIMARY,
  ComponentVariant.SUCCESS,
  ComponentVariant.DANGER,
  ComponentVariant.WARNING,
]
