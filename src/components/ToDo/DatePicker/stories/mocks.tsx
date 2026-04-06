import { DatePickerProps } from '../types'

export const mockOnChange = jest.fn()

export const defaultArgs: Partial<DatePickerProps> = {
  placeholder: 'DD/MM/YYYY',
  disabled: false,
}

export const argTypes = {
  value: { control: 'text' },
  min: { control: 'text' },
  max: { control: 'text' },
  placeholder: { control: 'text' },
  label: { control: 'text' },
  disabled: { control: 'boolean' },
}
