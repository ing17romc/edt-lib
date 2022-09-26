import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

/**
 * @decription TO DO
 *
 * @returns TO DO
 */

const Pagination = ({ totalCount, currentPage = 1, onPageChange }) => {
	const range = (start, end) => {
		const length = end - start + 1
		/*
			Create an array of certain length and set the elements within it from
		  start value to end value.
		*/
		return Array.from({ length }, (_, idx) => idx + start)
	}

	const paginationRange = range(1, totalCount)

	// If there are less than 2 times in pagination range we shall not render the component
	if (currentPage === 0 || paginationRange.length < 2) {
		// return null
	}

	const className = 'pagination-bar'

	const onNext = () => {
		onPageChange(currentPage + 1)
	}

	const onPrevious = () => {
		onPageChange(currentPage - 1)
	}

	const lastPage = paginationRange[paginationRange.length - 1]
	return (
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

Pagination.propTypes = {
	totalCount: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired
}

export default Pagination
