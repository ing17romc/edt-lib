import { HTMLAttributes, ReactNode } from 'react';

/**
 * Individual menu item
 */
export interface MenuItem {
  /**
   * Unique identifier
   */
  key: string;

  /**
   * Item label
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
   * Whether it is a visual separator
   * @default false
   */
  divider?: boolean;
}

/**
 * Menu component props
 */
export interface MenuProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onSelect'> {
  /**
   * List of menu items
   */
  items: MenuItem[];

  /**
   * Key of the active element
   */
  activeKey?: string;

  /**
   * Callback when selecting an item
   */
  onSelect?: (key: string) => void;
}
