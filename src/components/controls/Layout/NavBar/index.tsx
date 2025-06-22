/**
/**
 * NavBar Component (Layout)
 *
 * Barra de navegación principal para la estructura de layout.
 * Permite mostrar enlaces a la izquierda y derecha, y resalta la ruta actual.
 *
 * @param {LayoutNavBarProps} props - Propiedades del componente NavBar.
 * @param {LayoutNavBarOption[]} props.leftOptions - Opciones del menú izquierdo.
 * @param {LayoutNavBarOption[]} props.rightOptions - Opciones del menú derecho.
 * @param {string} props.currentPath - Ruta actualmente activa.
 * @param {(path: string) => void} props.getCurrentPath - Función callback para manejar el cambio de ruta.
 * @returns {JSX.Element} Un elemento de barra de navegación con opciones a la izquierda y derecha y resaltado de la ruta actual.
 */
import React from 'react';
import type { LayoutNavBarProps } from './types';

const NavBar: React.FC<LayoutNavBarProps> = ({ leftOptions, rightOptions, currentPath, getCurrentPath }) => {
  const renderOption = (index: number, path: string, name: string) => (
    <button
      type="button"
      key={index}
      className={path === currentPath ? 'active' : ''}
      onClick={() => getCurrentPath(path)}
      aria-current={path === currentPath ? 'page' : undefined}
      tabIndex={0}
    >
      {name}
    </button>
  );

  return (
    <nav className='layout__nav-bar bg-primary-1' aria-label="Navegación principal">
      <div className='grid-primary'>
        <div className='start-1 size-12'>
          <div className='topnav font-22'>
            {leftOptions?.map((element, index) =>
              renderOption(index, element.path, element.name)
            )}
            {rightOptions?.map((element, index) =>
              renderOption(index, element.path, element.name)
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

