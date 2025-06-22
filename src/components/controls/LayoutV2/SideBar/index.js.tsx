import React from 'react'
import Icon from '../../Icon'

/**
 * Componente de barra lateral
 *
 * @param {Object} props
 * @param {Array} props.options - Opciones del menú
 * @param {Function} props.getCurrentPath - Función para manejar cambio de ruta
 * @returns {JSX.Element} Componente de barra lateral
 */
export const SideBar: React.FC<{
  options: Array<{ path: string; name: string; icon: string }>,
  getCurrentPath: (path: string) => void
}> = ({ options, getCurrentPath }) => {
	const renderOption = ({ index, path, name, icon }: { 
		index: number; 
		path: string; 
		name: string; 
		icon: string 
	}) => (
		<button 
			type="button" 
			className='center-vertical' 
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
