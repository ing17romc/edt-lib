import React from 'react';
import { MenuProps } from './types';

/**
 * Componente Menu que proporciona una interfaz de navegación con íconos.
 * Permite mostrar opciones de navegación con íconos y manejar cambios de ruta.
 * 
 * @param {MenuProps} props - Propiedades del componente
 * @param {MenuOption[]} props.options - Lista de opciones del menú con path, icono y nombre
 * @param {(path: string) => void} props.getCurrentPath - Función que se ejecuta al seleccionar una opción
 * @returns {JSX.Element} Elemento nav con el menú de navegación
 */

export const Menu: React.FC<MenuProps> = ({ options, getCurrentPath }) => (
  <nav role="navigation" aria-label="Menú principal">
    <div className="grid-primary">
      {options.map((option, index) => (
        <div key={index} className="size-3 padding-v-30">
          <button 
            type="button" 
            className="container-option" 
            onClick={() => getCurrentPath(option.path)}
            role="menuitem"
            tabIndex={0}
            aria-label={option.name}
          >
            <div className="material-icons">{option.icon}</div>
            <hr />
            <span>{option.name}</span>
          </button>
        </div>
      ))}
    </div>
  </nav>
);


