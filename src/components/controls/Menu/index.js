import React from 'react'
import PropTypes from 'prop-types'

/**
 * @decription Menu Component
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'Menu'.
 */

const Menu = ({ options, getCurrentPath }) => {
	return (
		<div className='container-body'>
			<div className='grid-primary'>
				{options.map((element, index) => (
					<div key={index} className=' size-3 padding-v-30 '>
						<div className='container-option ' onClick={() => getCurrentPath(element.path)}>
							<div className='material-icons'>{element.icon}</div>
							<hr />
							<p> {element.name} </p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

Menu.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			icon: PropTypes.string.isRequired
		})
	),
	getCurrentPath: PropTypes.func.isRequired
}

export default Menu
