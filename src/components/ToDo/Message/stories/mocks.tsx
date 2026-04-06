import { MessageProps } from '../types'
import { ComponentVariant } from '../../../types'

export const mockOnClose = vi.fn()

export const defaultArgs: Partial<MessageProps> = {
  variant: ComponentVariant.PRIMARY,
  closable: false,
}

export const argTypes = {
  variant: {
    control: { type: 'select' },
    options: [
      ComponentVariant.PRIMARY,
      ComponentVariant.SUCCESS,
      ComponentVariant.DANGER,
      ComponentVariant.WARNING,
    ],
  },
  closable: { control: 'boolean' },
  title: { control: 'text' },
}
