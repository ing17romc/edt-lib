import React from 'react';
import { FooterProps } from './types';

/**
 * Componente Footer que proporciona un contenedor para el pie de página.
 * Permite incluir cualquier contenido dentro de un contenedor con clase layout__footer.
 * 
 * @param {FooterProps} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido a mostrar en el pie de página
 * @returns {JSX.Element} Elemento div con el contenido del pie de página
 */

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <div className="layout__footer" role="contentinfo">{children}</div>;
};

export default Footer;
