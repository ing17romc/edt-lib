import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Breadcrumb from '../Breadcrumb';
import type { LayoutV2Props } from './types';

/**
 * LayoutV2 Component
 *
 * Componente de layout avanzado que integra barra de navegación, barra lateral, breadcrumbs y contenido principal.
 * Permite mostrar u ocultar la barra lateral y configurar las opciones de navegación y breadcrumbs.
 *
 * @param {LayoutV2Props} props - Propiedades del componente LayoutV2.
 * @param {LayoutV2SideOption[]} props.sideOptions - Opciones del menú lateral.
 * @param {LayoutV2NavOption[]} props.leftOptions - Opciones del menú de navegación izquierdo.
 * @param {LayoutV2NavOption[]} props.rightOptions - Opciones del menú de navegación derecho.
 * @param {React.ReactNode} props.children - Contenido principal.
 * @param {(path: string) => void} props.getCurrentPath - Función callback para manejar el cambio de ruta.
 * @param {boolean} props.showSideBar - Indica si se muestra la barra lateral.
 * @param {LayoutV2BreadcrumbOption[]} [props.breadcrumbOptions] - Opciones del breadcrumb (opcional).
 * @returns {JSX.Element} Estructura de layout avanzado con navegación, sidebar, breadcrumbs y contenido.
 */
const LayoutV2: React.FC<LayoutV2Props> = ({ sideOptions, leftOptions, rightOptions, children, getCurrentPath, showSideBar, breadcrumbOptions = [] }) => {
	return <div>
		<NavBar
			leftOptions={leftOptions}
			rightOptions={rightOptions}
			getCurrentPath={getCurrentPath}
		></NavBar>
		{ showSideBar
			? <SideBar
				options={sideOptions}
				getCurrentPath={getCurrentPath}
			></SideBar>
			: <div></div>
		}
		<div className=' bg-white padding-v-20' style={{ display: 'flow-root' }}>
			{
				(breadcrumbOptions.length > 0)
					? <div className="grid-primary ">
						<div className="start-1 size-12 padding-v-0">
							<Breadcrumb options={breadcrumbOptions} getCurrentPath={getCurrentPath} />
						</div>
					</div>
					: <div></div>
			}
			<div className=' bg-white padding-v-40' style={{ display: 'flow-root' }}>
				{children}
			</div>
		</div>
	</div>
}

export default LayoutV2
