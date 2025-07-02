import React from 'react';
import styles from './styles/Footer.module.scss';
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = ({ 
  children, 
  className = '', 
  copyright = 'Todos los derechos reservados',
  year = new Date().getFullYear()
}) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.footerContent}>
        {children}
        <div className={styles.copyright}>
          &copy; {year} {copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
