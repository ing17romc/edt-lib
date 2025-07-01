import React from 'react';
import getStatus from '../utils';
import type { TableActiveRowProps } from './types';
import { Title } from '../../../components/Title';
import '../../../styles/tables.scss';

/**
 * TableActiveRow
 *
 * Componente de tabla que permite seleccionar filas activas y muestra datos con estilos diferenciados.
 * Útil para resaltar o interactuar con filas específicas de la tabla.
 *
 * @param {TableActiveRowProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
 * @returns {JSX.Element} Tabla con filas activas e interacción básica.
 */
const TableActiveRow: React.FC<TableActiveRowProps> = ({ dataTable }) => {
	return (
		<>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-20'>
						<Title title='Example tables'>Example tables</Title>
					</div>

					<div className='start-1  padding-v-20' />
					<div className='grid-secondary  '>
						<div className='start-1 size-24 padding-v-20'>
							<h4>Table active row </h4>
						</div>
						<div className='start-1 size-24 padding-v-20 '>
							<div className='bg-gray padding-h-30 padding-v-30'>
								<table>
									<tbody>
										<tr>
											<th style={{ width: '40%' }}>Name</th>
											<th style={{ width: '40%' }}>UserName</th>
											<th style={{ width: '20%' }}>Status</th>
										</tr>
										{dataTable.map((element, index) => (
											<tr
												key={index}
												className='active'
												onClick={() =>
													alert('clic!!!')
												}>
												<td>{element.name}</td>
												<td>{element.userName}</td>
												<td>{getStatus(element.status)}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className='start-1  padding-v-20' />
				</div>
			</div>
		</>
	)
}

export default TableActiveRow
