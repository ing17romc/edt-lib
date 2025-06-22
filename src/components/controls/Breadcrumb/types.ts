import { FC } from 'react';

export interface BreadcrumbOption {
  url: string;
  text: string;
}

export interface BreadcrumbProps {
  options: BreadcrumbOption[];
  getCurrentPath: (url: string) => void;
}

export type BreadcrumbComponent = FC<BreadcrumbProps>;

export type { BreadcrumbProps, BreadcrumbOption, BreadcrumbComponent };
