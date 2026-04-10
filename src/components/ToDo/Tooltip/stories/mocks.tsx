import { TooltipProps } from '../types'
import { TooltipPlacement } from '../types'

export const defaultArgs: Partial<TooltipProps> = {
  content: 'Additional information',
  placement: 'top',
  disabled: false,
}

export const argTypes = {
  content: {
    control: 'text',
    description: 'Text or node displayed inside the tooltip bubble.',
    table: { type: { summary: 'ReactNode' } },
  },
  placement: {
    control: { type: 'select' },
    options: ['top', 'bottom', 'left', 'right'] satisfies TooltipPlacement[],
    description: 'Position of the tooltip relative to its trigger element.',
    table: {
      type: { summary: 'top | bottom | left | right' },
      defaultValue: { summary: 'top' },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'When true, the tooltip is not shown.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'A lightweight tooltip that appears on hover or focus around a trigger element. Supports four placement positions and can be conditionally disabled.',
    },
  },
}

export const allPlacements: TooltipPlacement[] = ['top', 'bottom', 'left', 'right']
