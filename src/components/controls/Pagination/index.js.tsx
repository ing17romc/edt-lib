import React from 'react'
import classnames from 'classnames'

/**
 * Componente de paginación para navegar entre páginas
 *
 * @param {Object} props
 * @param {number} props.totalCount - Total de elementos
 * @param {number} props.currentPage - Página actual
 * @param {Function} props.onPageChange - Función para cambiar de página
 * @returns {JSX.Element} Componente de paginación
 */
export const Pagination: React.FC<{
  totalCount: number,
  currentPage: number,
  onPageChange: (page: number) => void
}> = ({ totalCount, currentPage = 1, onPageChange }) => {
	const range = (start: number, end: number): number[] => {
		const length = end - start + 1
		return Array.from({ length }, (_, idx) => idx + start)
	}

	const paginationRange = range(1, totalCount)

	if (currentPage === 0 || paginationRange.length < 2) {
		return null
	}

	const className = 'pagination-bar'

	const onNext = () => {
		onPageChange(currentPage + 1)
	}

	const onPrevious = () => {
		onPageChange(currentPage - 1)
	}

	const goToPage = (pageNumber: number) => {
		onPageChange(pageNumber)
	}

	const renderPaginationNumbers = () => {
		return paginationRange.map((pageNumber) => (
			<button
				type="button"
				key={pageNumber}
				className={classnames('pagination-number', {
					'pagination-number-active': currentPage === pageNumber,
				})}
				onClick={() => goToPage(pageNumber)}
				aria-current={currentPage === pageNumber ? 'page' : undefined}
				aria-label={`Página ${pageNumber}`}
				tabIndex={0}
			>
				{pageNumber}
			</button>
		))
	}

	return (
		<nav aria-label="Paginación" className={className}>
			<div className="pagination-container">
				<button
					type="button"
					onClick={onPrevious}
					className="pagination-button"
					aria-label="Página anterior"
					tabIndex={0}
					disabled={currentPage === 1}
				>
					<span aria-hidden="true">&laquo;</span>
					<span className="sr-only">Anterior</span>
				</button>
				{renderPaginationNumbers()}
				<button
					type="button"
					onClick={onNext}
					className="pagination-button"
					aria-label="Página siguiente"
					tabIndex={0}
					disabled={currentPage === totalCount}
				>
					<span aria-hidden="true">&raquo;</span>
					<span className="sr-only">Siguiente</span>
				</button>
			</div>
		</nav>
	)
}	return (
		<ul
			className={classnames('pagination-container', { [className]: className })}
		>
			{/* Left navigation arrow */}
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === 1
				})}
				onClick={onPrevious}
			>
				<div className="arrow left" />
			</li>
			{paginationRange.map(pageNumber =>
				<li key={pageNumber}	className={classnames('pagination-item', {
					selected: pageNumber === currentPage
				})}
				onClick={() => onPageChange(pageNumber)}
				>
					{pageNumber}
				</li>
			)}
			{/*  Right Navigation arrow */}
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === lastPage
				})}
				onClick={onNext}
			>
				<div className="arrow right" />
			</li>
		</ul>
	)
}

export default Pagination
