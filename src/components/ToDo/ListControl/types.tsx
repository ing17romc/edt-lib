import { HTMLAttributes, ReactNode } from 'react';

/**
 * List item
 */
export interface ListControlItem {
  /**
   * Unique identifier
   */
  key: string;

  /**
   * Main content of the item
   */
  label: ReactNode;

  /**
   * Secondary description
   */
  description?: string;

  /**
   * Whether the item is selected
   * @default false
   */
  selected?: boolean;

  /**
   * Whether it is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * ListControl component properties
 */
export interface ListControlProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * List items
   */
  items: ListControlItem[];

  /**
   * Callback when selecting an item
   */
  onSelect?: (key: string) => void;

  /**
   * Whether it allows multiple selection
   * @default false
   */
  multiSelect?: boolean;
}
