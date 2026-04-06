import React from 'react'
import { TooltipProps } from '../types'

export const defaultTooltipProps: TooltipProps = {
  content: 'Información adicional',
  children: <button type="button">Hover me</button>,
}

export const bottomTooltipProps: TooltipProps = {
  content: 'Tooltip abajo',
  placement: 'bottom',
  children: <button type="button">Bottom</button>,
}

export const leftTooltipProps: TooltipProps = {
  content: 'Tooltip izquierda',
  placement: 'left',
  children: <button type="button">Left</button>,
}

export const rightTooltipProps: TooltipProps = {
  content: 'Tooltip derecha',
  placement: 'right',
  children: <button type="button">Right</button>,
}

export const disabledTooltipProps: TooltipProps = {
  content: 'No se muestra',
  disabled: true,
  children: <button type="button">Disabled</button>,
}
