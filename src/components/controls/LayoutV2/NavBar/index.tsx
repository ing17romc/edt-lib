import React from 'react';
import ImageButton from '../../ImageButton';
import type { NavBarProps } from './types';

/**
 * NavBar Component
 *
 * Barra de navegación flexible para aplicaciones, permite mostrar enlaces a la izquierda y derecha,
 * y manejar la navegación mediante una función de callback.
 *
 * @param {NavBarProps} props - Propiedades del componente NavBar.
 * @param {NavBarOption[]} props.leftOptions - Opciones del menú izquierdo.
 * @param {NavBarOption[]} props.rightOptions - Opciones del menú derecho.
 * @param {(path: string) => void} props.getCurrentPath - Función callback para manejar el cambio de ruta.
 * @returns {JSX.Element} Un elemento de barra de navegación con opciones a la izquierda y derecha.
 */
const NavBar: React.FC<NavBarProps> = ({ leftOptions, rightOptions, getCurrentPath }) => {
  const renderOption = ({ index, path, name, icon, isRight }: { 
    index: number; 
    path: string; 
    name: string; 
    icon?: string; 
    isRight: boolean 
  }) => {
    if (icon) {
      return (
        <ImageButton
          key={index}
          id={`id_${index.toString()}`}
          text={name}
          icon={icon}
          onClick={() => getCurrentPath(path)}
          aria-label={`Ir a ${name}`}
          className={isRight ? 'container-navbar split' : 'container-navbar'}
        />
      )
    } else {
      return (
        <button 
          type="button" 
          key={index}
          className={isRight ? 'split' : ''}
          onClick={() => getCurrentPath(path)}
          aria-label={`Ir a ${name}`}
          tabIndex={0}
        >
          {name}
        </button>
      )
    }
  }

  return (
    <nav className="topnav" aria-label="Navegación principal">
      {leftOptions?.map((element, index) =>
        renderOption({
          index,
          path: element.path,
          name: element.name,
          icon: element.icon,
          isRight: false
        })
      )}
      {rightOptions?.map((element, index) =>
        renderOption({
          index,
          path: element.path,
          name: element.name,
          icon: element.icon,
          isRight: true
        })
      )}
    </nav>
  )
}

export default NavBar;
