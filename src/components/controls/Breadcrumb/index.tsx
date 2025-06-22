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
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ options, getCurrentPath }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {options.map((element, index) => (
        <li key={index} className="breadcrumb-item">
          <button 
            type="button" 
            onClick={() => getCurrentPath(element.url)} 
            className="breadcrumb-button"
            
            tabIndex={0}
            aria-label={`Navegar a ${element.text}`}
          >
            {element.text}
          </button>
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
