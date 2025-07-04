import React, { useState } from 'react';
import functions from '../../../components/utils/functions';

import getStatus from '../utils';
import type { TableWithPaginationProps, TableWithPaginationState, TableRowData } from './types';
import { Title } from '../../../components/Title';
import Pagination from '../../../components/Pagination';
import { Selector } from '../../../components/Selector';
import '../../../styles/tables.scss';

/**
 * TableWithPagination
 *
 * Componente de tabla que muestra datos paginados y permite seleccionar el número de elementos por página.
 * Incluye controles para cambiar de página y ajustar la cantidad de filas visibles.
 *
 * @param {TableWithPaginationProps} props - Propiedades del componente, incluyendo el arreglo de datos a mostrar.
 * @returns {JSX.Element} Tabla interactiva con paginación y selector de filas por página.
 */
const TableWithPagination: React.FC<TableWithPaginationProps> = ({ dataTable }) => {
		const [state, setstate] = useState<TableWithPaginationState>({
		page: 1,
		pages: 3
	});

	const getSlides = (acc: TableRowData[][], cur: TableRowData[], slidesPerView: number): TableRowData[][] => {
		if (!Array.isArray(acc) || !Array.isArray(cur) || !slidesPerView) { return []; }
		if (cur.length) {
			acc.push(cur.slice(0, slidesPerView));
			return getSlides(acc, cur.slice(slidesPerView, cur.length), slidesPerView);
		}
		return acc;
	};

	const pages = getSlides([], dataTable, state.pages);
	const getIndex = pages.length < state.page ? 0 : state.page - 1;

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const object = functions.getValueInput(e);
		if (e && object) {
			setstate({
				...state,
				[object.key]: object.value,
				page: 1
			});
		}
	};

	return (
		<>
			<div className='container-body'>
				<div className='grid-primary '>
					<div className='start-1 size-12 padding-v-20'>
						<Title title='Example tables'>Example tables</Title>
					</div>

					<div className='start-1  padding-v-20' />
					<div className='grid-secondary '>
						<div className='start-1 size-16 padding-v-20 center-vertical'>
							<h4>Table with pagination</h4>
						</div>
						<div className=' size-8 padding-v-20'>
							<Selector
								id="pages"
								value={state.pages.toString()}
								options={[
									{ label: "1", value: '1' },
									{ label: "2", value: '2' },
									{ label: "3", value: '3' },
								]}
								onChange={(e) => onInputChange(e as React.ChangeEvent<HTMLSelectElement>)}
								label="Number item by page"
								placeholder="Select items per page"
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
										{!pages.length ? (
											<tr>
												<td colSpan={3} className="text-center">No hay datos disponibles</td>
											</tr>
										) : (
											pages[getIndex]?.map((element, index) => (
												<tr key={index}>
													<td>{element.name}</td>
													<td>{element.userName}</td>
													<td>{getStatus(element.status)}</td>
												</tr>
											)) || (
												<tr>
													<td colSpan={3} className="text-center">No hay datos disponibles</td>
												</tr>
											)
										)
									}
									</tbody>
								</table>
							</div>
						</div>

						<div className='start-1 size-24 padding-v-20 center'>
							<Pagination
								totalPages={pages.length}
								currentPage={state.page}
								onPageChange={currentPage => setstate({ ...state, page: currentPage })}
							/>
						</div>
					</div>

					<div className='start-1  padding-v-20' />
				</div>
			</div>
		</>
	)
}

export default TableWithPagination
