import React from 'react';
import styles from './styles/NavBar.module.scss';
import { NavBarProps } from './types';

const NavBar: React.FC<NavBarProps> = ({ 
  children, 
  className = '', 
  logo, 
  title 
}) => {
  return (
    <header className={`${styles.navbar} ${className}`}>
      <div className={styles.navbarContent}>
        <div className={styles.brand}>
          {logo && <div className={styles.logo}>{logo}</div>}
          {title && <h1 className={styles.title}>{title}</h1>}
        </div>
        {children && <nav className={styles.nav}>{children}</nav>}
      </div>
    </header>
  );
};

export default NavBar;
