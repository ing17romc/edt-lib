import { DatePickerProps } from '../types'

export const mockOnChange = () => {}

export const defaultArgs: Partial<DatePickerProps> = {
  placeholder: 'DD/MM/YYYY',
  disabled: false,
}

export const argTypes = {
  value: {
    control: 'text',
    description: 'Currently selected date in ISO 8601 format (YYYY-MM-DD).',
    table: { type: { summary: 'string' } },
  },
  min: {
    control: 'text',
    description: 'Earliest selectable date in ISO 8601 format.',
    table: { type: { summary: 'string' } },
  },
  max: {
    control: 'text',
    description: 'Latest selectable date in ISO 8601 format.',
    table: { type: { summary: 'string' } },
  },
  placeholder: {
    control: 'text',
    description: 'Placeholder text shown when no date is selected.',
    table: { type: { summary: 'string' } },
  },
  label: {
    control: 'text',
    description: 'Label displayed above the date input.',
    table: { type: { summary: 'string' } },
  },
  disabled: {
    control: 'boolean',
    description: 'When true, the date picker is non-interactive.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  onChange: {
    action: 'changed',
    description: 'Callback fired with the selected date string when the value changes.',
    table: { type: { summary: '(value: string) => void' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'A date picker field that lets users select a date from a calendar popup. Supports min/max date constraints, a placeholder, and a disabled state.',
    },
  },
}
