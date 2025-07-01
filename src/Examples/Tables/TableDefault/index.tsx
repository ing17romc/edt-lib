import React from 'react';
import getStatus from '../utils';
import type { TableDefaultProps } from './types';
import { Title } from '../../../components/Title';
import '../../../styles/tables.scss';

/**
 * TableDefault
 *
 * Componente de tabla que muestra una tabla grande con múltiples columnas repetidas.
 * Útil para mostrar datos en formato de tabla expandida.
 *
 * @param {TableDefaultProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
 * @returns {JSX.Element} Tabla expandida con datos repetidos por fila.
 */
const TableDefault: React.FC<TableDefaultProps> = ({ dataTable }) => {
	return (
		<>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-20'>
						<Title title='Example tables'>Example tables</Title>
					</div>

					<div className='start-1  padding-v-20' />
					<div className='grid-secondary '>
						<div className='start-1 size-24 padding-v-20'>
							<h4>Table default</h4>
						</div>
						<div className='start-1 size-24 padding-v-20 '>
							<div className='bg-gray padding-h-30 padding-v-30'>
								<table className="big-table">
									<tbody>
										<tr>
											<th>Name</th>
											<th>UserName</th>
											<th>Status</th>
											<th>Name</th>
											<th>UserName</th>
											<th>Status</th>
											<th>Name</th>
											<th>UserName</th>
											<th>Status</th>
											<th>Name</th>
											<th>UserName</th>
											<th>Status</th>
										</tr>
										{dataTable.map((element, index) => (
											<tr key={index}>
												<td>{element.name}</td>
												<td>{element.userName}</td>
												<td>{getStatus(element.status)}</td>
												<td>{element.name}</td>
												<td>{element.userName}</td>
												<td>{getStatus(element.status)}</td>
												<td>{element.name}</td>
												<td>{element.userName}</td>
												<td>{getStatus(element.status)}</td>
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

export default TableDefault
