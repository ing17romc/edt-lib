import React from 'react'
import PropTypes from 'prop-types'

/**
 * @decription Function that returns the effect of loading.
 *
 * @returns Returns the HTML of the loading effect.
 */
const Spinner = ({ show }) => {
	return (show
		? <div className='container-load'>
			<div className='loading' />
		</div>
		: <div></div>
	)
}

Spinner.propTypes = {
	show: PropTypes.bool
}

export default Spinner
