import React from 'react'
import { TooltipProps } from '../types'

export const defaultTooltipProps: TooltipProps = {
  content: 'Additional information',
  children: <button type="button">Hover me</button>,
}

export const bottomTooltipProps: TooltipProps = {
  content: 'Tooltip bottom',
  placement: 'bottom',
  children: <button type="button">Bottom</button>,
}

export const leftTooltipProps: TooltipProps = {
  content: 'Tooltip left',
  placement: 'left',
  children: <button type="button">Left</button>,
}

export const rightTooltipProps: TooltipProps = {
  content: 'Tooltip right',
  placement: 'right',
  children: <button type="button">Right</button>,
}

export const disabledTooltipProps: TooltipProps = {
  content: 'Not shown',
  disabled: true,
  children: <button type="button">Disabled</button>,
}
