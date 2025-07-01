import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export interface NavBarProps {
  children?: ReactNode;
  className?: string;
  logo?: ReactNode;
  title?: string;
}

export interface FooterProps {
  children?: ReactNode;
  className?: string;
  copyright?: string;
  year?: number;
}
