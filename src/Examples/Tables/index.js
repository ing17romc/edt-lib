import React, { useState } from 'react'
import functions from '../../../src/components/utils/functions'
import UI from '../../../src/components/controls'
import PropTypes from 'prop-types'
const getStatus = (value) => <strong className={value ? 'font-blue' : 'font-red'}>{value ? 'Active' : 'Inactive'}</strong>

const TableWithPagination = ({ dataTable }) => {
	const { getValueInput } = functions
	const [state, setstate] = useState({
		page: 1,
		pages: 3
	})

	console.log(UI)

	const getSlides = (acc, cur, slidesPerView) => {
		if (!Array.isArray(acc) || !Array.isArray(cur) || !slidesPerView) { return [] }

		if (cur.length) {
			acc.push(cur.slice(0, slidesPerView))
			getSlides(acc, cur.slice(slidesPerView, cur.length), slidesPerView)
		}
		return acc
	}

	const pages = getSlides([], dataTable, state.pages)

	const getIndex = pages.length < state.page ? 0 : state.page - 1

	const onInputChange = e => {
		const object = getValueInput(e)
		if (e) {
			setstate({
				...state,
				[object.key]: object.value,
				page: 1
			})
		}
	}

	return (
		<>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-20'>
						<UI.Title label='Example tables' />
					</div>

					<div className='start-1  padding-v-20' />
					<div className='grid-secondary '>
						<div className='start-1 size-16 padding-v-20 center-vertical'>
							<h4>Table with pagination</h4>
						</div>
						<div className=' size-8 padding-v-20'>
							<UI.Selector
								id='pages'
								value={state.pages}
								options={[
									{ key: 1, value: '1' },
									{ key: 2, value: '2' },
									{ key: 3, value: '3' }
								]}
								eventChange={e => onInputChange(e)}
								titleTop='Number item by page'
							/>
						</div>

						<div className='start-1 size-24 padding-v-20 '>
							<div className='bg-gray padding-h-30 padding-v-30'>
								<table>
									<tbody>
										<tr>
											<th>Name</th>
											<th>UserName</th>
											<th>Status</th>
										</tr>
										{pages[getIndex].map((element, index) => (
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

						<div className='start-1 size-24 padding-v-20 center'>
							<UI.Pagination
								totalCount= {pages.length}
								currentPage= {state.page}
								onPageChange= {currentPage => setstate({ ...state, page: currentPage })}
							/>
						</div>
					</div>

					<div className='start-1  padding-v-20' />
				</div>
			</div>
		</>
	)
}

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
													<UI.ImageButton
														text='Edit'
														icon="edit"
														id={`edit_${index}`}
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
														id={`delete_${index}`}
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

TableWithPagination.propTypes = {
	dataTable: PropTypes.array
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

export { TableWithPagination, TableDefault, TableActiveRow, TableWithButton, TableWithIcon }
