import { SnackbarProps } from '../types'
import { ComponentVariant } from '../../../types'

export const mockOnClose = jest.fn()
export const mockOnAction = jest.fn()

export const defaultSnackbarProps: SnackbarProps = {
  message: 'Operación realizada con éxito',
  open: true,
  duration: 0,
}

export const closableSnackbarProps: SnackbarProps = {
  message: 'Mensaje con botón de cierre',
  open: true,
  duration: 0,
  onClose: mockOnClose,
}

export const actionSnackbarProps: SnackbarProps = {
  message: 'Archivo eliminado',
  open: true,
  duration: 0,
  onClose: mockOnClose,
  actionLabel: 'Deshacer',
  onAction: mockOnAction,
}

export const allSnackbarVariants: SnackbarProps['variant'][] = [
  ComponentVariant.PRIMARY,
  ComponentVariant.SUCCESS,
  ComponentVariant.DANGER,
  ComponentVariant.WARNING,
]
