import { SnackbarProps } from '../types'
import { ComponentVariant } from '../../../types'

export const mockOnClose = vi.fn()
export const mockOnAction = vi.fn()

export const defaultArgs: Partial<SnackbarProps> = {
  message: 'Operación realizada con éxito',
  variant: ComponentVariant.PRIMARY,
  open: true,
  duration: 0,
}

export const argTypes = {
  message: { control: 'text' },
  variant: {
    control: { type: 'select' },
    options: [
      ComponentVariant.PRIMARY,
      ComponentVariant.SUCCESS,
      ComponentVariant.DANGER,
      ComponentVariant.WARNING,
    ],
  },
  open: { control: 'boolean' },
  duration: { control: { type: 'number', min: 0 } },
  actionLabel: { control: 'text' },
}
