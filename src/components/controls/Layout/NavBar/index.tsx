import React from 'react'

/**
 * Componente de barra de navegación
 *
 * @param {Object} props
 * @param {Array} props.leftOptions - Opciones del menú izquierdo
 * @param {Array} props.rightOptions - Opciones del menú derecho
 * @param {string} props.currentPath - Ruta actual
 * @param {Function} props.getCurrentPath - Función para manejar cambio de ruta
 * @returns {JSX.Element} Componente de barra de navegación
 */
const NavBar: React.FC<{
  leftOptions: Array<{ path: string; name: string }>,
  rightOptions: Array<{ path: string; name: string }>,
  currentPath: string,
  getCurrentPath: (path: string) => void
}> = ({ leftOptions, rightOptions, currentPath, getCurrentPath }) => {
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
  )

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

