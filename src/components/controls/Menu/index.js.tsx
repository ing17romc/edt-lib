import React from 'react'

/**
 * Componente Menu para mostrar opciones de navegación
 * @author Rafael Orlando Márquez Cedeño
 *
 * @param {Object} props
 * @param {Array} props.options - Lista de opciones del menú
 * @param {Function} props.getCurrentPath - Función para manejar el cambio de ruta
 * @returns {JSX.Element} Componente Menu
 */
export const Menu: React.FC<{
  options: Array<{ path: string; icon: string; name: string }>,
  getCurrentPath: (path: string) => void
}> = ({ options, getCurrentPath }) => (
  <nav role="navigation" aria-label="Menú principal">
    <div className='grid-primary'>
      {options.map((element, index) => (
        <div key={index} className='size-3 padding-v-30'>
          <button 
            type="button" 
            className='container-option' 
            onClick={() => getCurrentPath(element.path)}
            role="menuitem"
            tabIndex={0}
          >
            <div className='material-icons'>{element.icon}</div>
            <hr />
            <span>{element.name}</span>
          </button>
        </div>
      ))}
    </div>
  </nav>
)


