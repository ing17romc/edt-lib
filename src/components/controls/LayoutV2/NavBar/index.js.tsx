import React from 'react'
import ImageButton from '../../ImageButton'

/**
 * Componente de barra de navegación
 *
 * @param {Object} props
 * @param {Array} props.leftOptions - Opciones del menú izquierdo
 * @param {Array} props.rightOptions - Opciones del menú derecho
 * @param {Function} props.getCurrentPath - Función para manejar cambio de ruta
 * @returns {JSX.Element} Componente de barra de navegación
 */
export const NavBar: React.FC<{
  leftOptions: Array<{ path: string; name: string; icon?: string }>,
  rightOptions: Array<{ path: string; name: string; icon?: string }>,
  getCurrentPath: (path: string) => void
}> = ({ leftOptions, rightOptions, getCurrentPath }) => {
	const renderOption = ({ index, path, name, icon, isRight }: { 
		index: number; 
		path: string; 
		name: string; 
		icon?: string; 
		isRight: boolean 
	}) => {
		if (icon) {
			return (
				<button 
					type="button" 
					key={index} 
					className={isRight ? 'container-navbar split' : 'container-navbar'}
					onClick={() => getCurrentPath(path)}
					aria-label={`Ir a ${name}`}
					tabIndex={0}
				>
					<ImageButton 
						id={`id_${index.toString()}`} 
						text={name} 
						icon={icon}
					/>
				</button>
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
