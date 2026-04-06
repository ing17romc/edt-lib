import React from 'react'
import { TooltipProps } from '../types'
import { TooltipPlacement } from '../types'

export const defaultArgs: Partial<TooltipProps> = {
  content: 'Información adicional',
  placement: 'top',
  disabled: false,
}

export const argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'bottom', 'left', 'right'] satisfies TooltipPlacement[],
  },
  disabled: { control: 'boolean' },
  content: { control: 'text' },
}

export const allPlacements: TooltipPlacement[] = ['top', 'bottom', 'left', 'right']
