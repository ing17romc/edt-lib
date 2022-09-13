import React from 'react'
import { UI } from '../../../'
import PropTypes from 'prop-types'
const getStatus = (value) => <strong className={value ? 'font-blue' : 'font-red'}>{value ? 'Active' : 'Inactive'}</strong>

const TableDefault = ({ dataTable }) => {
	return (
		<>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-20'>
						<UI.Title label='Example tables' />
					</div>

					<div className='start-1  padding-v-20' />
					<div className='grid-secondary '>
						<div className='start-1 size-20 padding-v-20'>
							<h4>Table default</h4>
						</div>
						<div className='start-1 size-20 padding-v-20 '>
							<div className='bg-white padding-h-30 padding-v-30'>
								<table>
									<tbody>
										<tr>
											<th>Name</th>
											<th>UserName</th>
											<th>Status</th>
										</tr>
										{dataTable.map((element, index) => (
											<tr key={index}>
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

const TableActiveRow = ({ dataTable }) => {
	return (
		<>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-20'>
						<UI.Title label='Example tables' />
					</div>

					<div className='start-1  padding-v-20' />
					<div className='grid-secondary  '>
						<div className='start-1 size-20 padding-v-20'>
							<h4>Table active row </h4>
						</div>
						<div className='start-1 size-20 padding-v-20 '>
							<div className='bg-white padding-h-30 padding-v-30'>
								<table>
									<tbody>
										<tr>
											<th>Name</th>
											<th>UserName</th>
											<th>Status</th>
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

const TableWithButton = ({ dataTable }) => {
	return (
		<>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-20'>
						<UI.Title label='Example tables' />
					</div>

					<div className='start-1  padding-v-20' />
					<div className='grid-secondary  '>
						<div className='start-1 size-20 padding-v-20'>
							<h4>Table with button </h4>
						</div>
						<div className='start-1 size-20 padding-v-20 '>
							<div className='bg-white padding-h-30 padding-v-30'>
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
													<UI.Button
														title='Update'
														type='secondary'
														size='sm'
														onClick={() =>
															alert('clic!!!')
														}
													/>
												</td>
												<td>
													<UI.Button
														title='Delete'
														type='secondary'
														size='sm'
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
				</div>
			</div>
		</>
	)
}

const TableWithIcon = ({ dataTable }) => {
	return (
		<>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-20'>
						<UI.Title label='Example tables' />
					</div>

					<div className='start-1  padding-v-20' />
					<div className='grid-secondary  '>
						<div className='start-1 size-20 padding-v-20'>
							<h4>Table with icon </h4>
						</div>
						<div className='start-1 size-20 padding-v-20 '>
							<div className='bg-white padding-h-30 padding-v-30'>
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
													<UI.ImageButton
														text='Edit'
														icon="edit"
														id={'edit_' + index}
														size="md"
														onClick={() =>
															alert('clic!!!')
														}
													/>
												</td>
												<td>
													<UI.ImageButton
														text='Delete'
														icon="delete"
														id={'delete_' + index}
														size="md"
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

TableDefault.propTypes = {
	dataTable: PropTypes.array
}
TableActiveRow.propTypes = {
	dataTable: PropTypes.array
}
TableWithButton.propTypes = {
	dataTable: PropTypes.array
}
TableWithIcon.propTypes = {
	dataTable: PropTypes.array
}

export { TableDefault, TableActiveRow, TableWithButton, TableWithIcon }
