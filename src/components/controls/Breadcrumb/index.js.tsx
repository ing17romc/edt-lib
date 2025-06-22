import React from 'react'

/**
 * Componente Breadcrumb para mostrar la ruta de navegación
 *
 * @param {Object} props
 * @param {Array} props.options - Lista de elementos del breadcrumb
 * @param {Function} props.getCurrentPath - Función para manejar el cambio de ruta
 * @returns {JSX.Element} Componente Breadcrumb
 */
export const Breadcrumb: React.FC<{ 
  options: Array<{ url: string; text: string }>, 
  getCurrentPath: (url: string) => void 
}> = ({ options, getCurrentPath }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {options.map((element, index) => (
        <li key={index} className="breadcrumb-item">
          <button 
            type="button" 
            onClick={() => getCurrentPath(element.url)} 
            className="breadcrumb-button"
            role="link"
            tabIndex={0}
          >
            {element.text}
          </button>
        </li>
      ))}
    </ol>
  </nav>
)



export default Breadcrumb
