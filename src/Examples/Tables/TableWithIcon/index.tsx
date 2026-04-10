import React from 'react';
import getStatus from '../utils';
import type { TableWithIconProps } from './types';
import { Title } from '../../../components/Title';
import IconButton from '../../../components/IconButton';
import '../../../styles/tables.scss';
import { ComponentSize } from '../../../components/types';

/**
 * TableWithIcon
 *
 * Table component that displays data and adds icon buttons for actions on each row.
 * Allows viewing a table with edit and delete buttons on each record.
 *
 * @param {TableWithIconProps} props - Component properties, including the array of data to display.
 * @returns {JSX.Element} Table with action buttons per row.
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
														size={ComponentSize.MEDIUM}
														aria-label="Edit"
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
														size={ComponentSize.MEDIUM}
														aria-label="Delete"
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
