import React from 'react';
import { BreadcrumbProps } from './types';

/**
 * Componente Breadcrumb que muestra la ruta de navegación actual en la aplicación.
 * Permite a los usuarios navegar entre diferentes secciones manteniendo un contexto visual.
 * 
 * @param {BreadcrumbProps} props - Propiedades del componente
 * @param {BreadcrumbOption[]} props.options - Lista de elementos del breadcrumb, cada uno con una URL y texto
 * @param {(url: string) => void} props.getCurrentPath - Función que maneja el cambio de ruta al hacer clic en un elemento
 * @returns {JSX.Element} Elemento nav con la ruta de navegación actual
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  options,
  getCurrentPath,
  className = '',
  separator = '/',
}) => {
  const handleClick = (
    url: string, 
    disabled?: boolean, 
    event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (disabled) {
      event?.preventDefault();
      return;
    }
    if (event) {
      getCurrentPath?.(url, event);
    } else {
      getCurrentPath?.(url, {} as React.MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className={`breadcrumb ${className}`.trim()}>
        {options.map((element, index) => (
          <React.Fragment key={index}>
            <li className={`breadcrumb-item ${element.className || ''}`.trim()}>
              <button
                type="button"
                onClick={(e) => handleClick(element.url, element.disabled, e)}
                className={`breadcrumb-button ${element.disabled ? 'disabled' : ''}`.trim()}
                disabled={element.disabled}
                tabIndex={element.disabled ? -1 : 0}
                aria-label={`Navegar a ${element.text}`}
                aria-disabled={element.disabled}
              >
                {element.text}
              </button>
            </li>
            {index < options.length - 1 && (
              <li className="breadcrumb-separator" aria-hidden="true">
                {separator}
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
