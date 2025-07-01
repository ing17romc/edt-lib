import React from 'react';
import styles from './styles/Layout.module.scss';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
