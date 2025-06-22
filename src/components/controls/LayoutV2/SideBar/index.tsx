import React from 'react';
import Icon from '../../Icon';
import type { SideBarProps, SideBarOption } from './types';

/**
 * SideBar Component
 *
 * Barra lateral de navegación para mostrar opciones de menú con íconos.
 * Permite navegar entre rutas usando una función callback.
 *
 * @param {SideBarProps} props - Propiedades del componente SideBar.
 * @param {SideBarOption[]} props.options - Opciones del menú lateral.
 * @param {(path: string) => void} props.getCurrentPath - Función callback para manejar el cambio de ruta.
 * @returns {JSX.Element} Un elemento de barra lateral con botones de navegación.
 */
const SideBar: React.FC<SideBarProps> = ({ options, getCurrentPath }) => {
  const renderOption = ({ index, path, name, icon }: SideBarOption & { index: number }) => (
    <button
      type="button"
      className="center-vertical"
      key={index}
      onClick={() => getCurrentPath(path)}
      aria-label={`Ir a ${name}`}
			tabIndex={0}
		>
			<Icon name={icon} />
			{name}
		</button>
	)

	return (
		<nav className="sidebar" aria-label="Menú lateral">
			{options?.map((element, index) =>
				renderOption({
					index,
					path: element.path,
					name: element.name,
					icon: element.icon
				})
				)}
		</nav>
	)
}

export default SideBar

