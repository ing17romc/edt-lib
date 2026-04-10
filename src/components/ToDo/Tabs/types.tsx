import { HTMLAttributes, ReactNode } from 'react';

/**
 * Tab item
 */
export interface TabItem {
  /**
   * Unique tab identifier
   */
  key: string;

  /**
   * Tab label
   */
  label: ReactNode;

  /**
   * Tab content
   */
  content: ReactNode;

  /**
   * Whether the tab is disabled
   * @default false
   */
  disabled?: boolean;
}

/**
 * Tabs component properties
 */
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * List of tabs
   */
  tabs: TabItem[];

  /**
   * Active tab key (controlled mode)
   */
  activeKey?: string;

  /**
   * Default active tab key (uncontrolled mode)
   */
  defaultActiveKey?: string;

  /**
   * Callback when changing tabs
   */
  onChange?: (key: string) => void;
}
