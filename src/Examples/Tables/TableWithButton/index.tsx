import React from 'react';
import getStatus from '../utils';
import type { TableWithButtonProps } from './types';
import { Title } from '../../../components/Title';
import Button from '../../../components/Button';
import { ComponentSize } from '../../../components/types';
import '../../../styles/tables.scss';

/**
 * TableWithButton
 *
 * Componente de tabla que muestra datos y agrega botones de acción (actualizar y eliminar) para cada fila.
 * Permite visualizar una tabla con botones de actualización y eliminación en cada registro.
 *
 * @param {TableWithButtonProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
 * @returns {JSX.Element} Tabla con botones de acción por fila.
 */
const TableWithButton: React.FC<TableWithButtonProps> = ({ dataTable }) => {
	return (
		<>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-20'>
						<Title title="Example tables">Example tables</Title>
					</div>

					<div className='start-1  padding-v-20' />
					<div className='grid-secondary  '>
						<div className='start-1 size-24 padding-v-20'>
							<h4>Table with button </h4>
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
													<Button
														type='button'
														size={ComponentSize.MEDIUM}
														onClick={() =>
															alert('clic!!!')
														}
													>
														Update
													</Button>
												</td>
												<td>
													<Button
														type='button'
														size={ComponentSize.MEDIUM}
														onClick={() =>
															alert('clic!!!')
														}
													>
														Delete
													</Button>
												</td>
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

export default TableWithButton
