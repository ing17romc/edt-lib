import { HTMLAttributes, ReactNode } from 'react';

export type FloatingMenuPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

/**
 * Floating menu item
 */
export interface FloatingMenuItem {
  /**
   * Unique identifier
   */
  key: string;

  /**
   * Visible label
   */
  label: ReactNode;

  /**
   * Icon (optional)
   */
  icon?: ReactNode;

  /**
   * Whether it is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether it is a separator
   * @default false
   */
  divider?: boolean;
}

/**
 * FloatingMenu component properties
 */
export interface FloatingMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /**
   * Element that opens the menu (trigger)
   */
  trigger: ReactNode;

  /**
   * Menu items
   */
  items: FloatingMenuItem[];

  /**
   * Menu position relative to the trigger
   * @default 'bottom-start'
   */
  placement?: FloatingMenuPlacement;

  /**
   * Callback when selecting an item
   */
  onSelect?: (key: string) => void;

  /**
   * Whether the menu is disabled
   * @default false
   */
  disabled?: boolean;
}
