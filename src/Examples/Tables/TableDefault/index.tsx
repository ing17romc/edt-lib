import React from 'react';
import getStatus from '../utils';
import type { TableDefaultProps } from './types';
import { Title } from '../../../components/Title';
import '../../../styles/tables.scss';

/**
 * TableDefault
 *
 * Table component that displays a large table with multiple repeated columns.
 * Useful for showing data in expanded table format.
 *
 * @param {TableDefaultProps} props - Component properties, including the array of data to display.
 * @returns {JSX.Element} Expanded table with data repeated per row.
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
