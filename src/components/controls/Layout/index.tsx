import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import type { LayoutProps } from './types';

/**
 * Layout Component principal
 *
 * Componente de layout general que estructura la aplicación con barra de navegación, contenido principal y footer.
 * Permite configurar menús izquierdo y derecho, así como el contenido principal y el pie de página.
 *
 * @param {LayoutProps} props - Propiedades del componente Layout.
 * @param {LayoutMenuOption[]} props.leftOptions - Opciones del menú izquierdo.
 * @param {LayoutMenuOption[]} props.rightOptions - Opciones del menú derecho.
 * @param {React.ReactNode} props.footer - Contenido del footer.
 * @param {React.ReactNode} props.children - Contenido principal.
 * @param {(path: string) => void} props.getCurrentPath - Función callback para manejar el cambio de ruta.
 * @returns {JSX.Element} Estructura de layout general con navegación, contenido y footer.
 */
export const Layout: React.FC<LayoutProps> = ({ leftOptions, rightOptions, footer, children, getCurrentPath }) => (
  <div role="main">
    <div className='layout bg-white'>
      <NavBar
        leftOptions={leftOptions}
        rightOptions={rightOptions}
        getCurrentPath={getCurrentPath}
      />
      <div className='layout__content' role="region" aria-label="Contenido principal">
        {children}
      </div>
      <Footer>
        {footer}
      </Footer>
    </div>
  </div>
)

export default Layout
