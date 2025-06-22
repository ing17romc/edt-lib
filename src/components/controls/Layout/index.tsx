import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

/**
 * Componente Layout principal
 *
 * @param {Object} props
 * @param {Array} props.leftOptions - Opciones del menú izquierdo
 * @param {Array} props.rightOptions - Opciones del menú derecho
 * @param {ReactNode} props.footer - Contenido del footer
 * @param {ReactNode} props.children - Contenido principal
 * @param {Function} props.getCurrentPath - Función para manejar cambio de ruta
 * @param {string} props.currentPath - Ruta actual
 * @returns {JSX.Element} Componente Layout
 */
export const Layout: React.FC<{
  leftOptions: Array<{ path: string; name: string; icon: string }>,
  rightOptions: Array<{ path: string; name: string; icon: string }>,
  footer: React.ReactNode,
  children: React.ReactNode,
  getCurrentPath: (path: string) => void,
  currentPath: string
}> = ({ leftOptions, rightOptions, footer, children, getCurrentPath, currentPath }) => (
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
