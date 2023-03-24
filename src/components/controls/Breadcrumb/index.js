import React from 'react'
import PropTypes from 'prop-types'

/**
 * @decription TO DO
 *
 * @returns TO DO
 */
const Breadcrumb = ({ options }) => <ul className="breadcrumb">
	{options.map((element, index) => <li key={index} ><a href={element.url}>{element.text}</a></li>)}
</ul>

Breadcrumb.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	),
	getCurrentPath: PropTypes.func.isRequired
}

export default Breadcrumb
