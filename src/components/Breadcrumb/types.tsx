import { AnchorHTMLAttributes } from 'react';

/**
 * Individual Breadcrumb item
 */
export interface BreadcrumbItem {
  /**
   * Item text
   */
  label: string;

  /**
   * Link URL (if undefined, rendered as plain text — active item)
   */
  href?: string;
}

/**
 * Breadcrumb component properties
 */
export interface BreadcrumbProps {
  /**
   * List of breadcrumb items
   */
  items: BreadcrumbItem[];

  /**
   * Separator between items
   * @default '/'
   */
  separator?: string;

  /**
   * Additional props for anchors
   */
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;

  /**
   * Additional CSS class for the container
   */
  className?: string;
}
