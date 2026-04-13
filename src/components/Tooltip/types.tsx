import { HTMLAttributes, ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

/**
 * Tooltip component props
 */
export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Tooltip content
   */
  content: ReactNode;

  /**
   * Element that triggers the tooltip
   */
  children: ReactNode;

  /**
   * Tooltip position relative to the child element
   * @default 'top'
   */
  placement?: TooltipPlacement;

  /**
   * Whether the tooltip is disabled
   * @default false
   */
  disabled?: boolean;
}
