import React from 'react';
import getStatus from '../utils';
import type { TableWithIconProps } from './types';
import { Title } from '../../../components/Title';
import IconButton from '../../../components/IconButton';
import '../../../styles/tables.scss';

/**
 * TableWithIcon
 *
 * Componente de tabla que muestra datos y agrega botones con iconos para acciones sobre cada fila.
 * Permite visualizar una tabla con botones de edición y eliminación en cada registro.
 *
 * @param {TableWithIconProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
 * @returns {JSX.Element} Tabla con botones de acción por fila.
 */
const TableWithIcon: React.FC<TableWithIconProps> = ({ dataTable }) => {
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
							<h4>Table with icon </h4>
						</div>
						<div className='start-1 size-24 padding-v-20 '>
							<div className='bg-gray padding-h-30 padding-v-30'>
								<table>
									<tbody>
										<tr>
											<th>Name</th>
											<th>UserName</th>
											<th>Status</th>
											<th></th>
											<th></th>
										</tr>
										{dataTable.map((element, index) => (
											<tr key={index}>
												<td>{element.name}</td>
												<td>{element.userName}</td>
												<td>{getStatus(element.status)}</td>
												<td>
													<IconButton
														icon="edit"
														id={`edit_${index}`}
														data-testid={`edit_${index}`}
														size="medium"
														aria-label="Editar"
														onClick={() =>
															alert('clic!!!')
														}
													/>
												</td>
												<td>
													<IconButton
														icon="delete"
														id={`delete_${index}`}
														data-testid={`delete_${index}`}
														size="medium"
														aria-label="Eliminar"
														onClick={() =>
															alert('clic!!!')
														}
													/>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className='start-1  padding-v-20' />
				</ div>
			</div>
		</>
	)
}

export default TableWithIcon
