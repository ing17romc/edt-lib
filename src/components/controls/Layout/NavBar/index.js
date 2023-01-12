import React from 'react'
import PropTypes from 'prop-types'

/**
 * @decription NavBar Component
 *
 * @returns Returns the code of an html element with the characteristics of the 'Main Menu'.
 */

const NavBar = ({ leftOptions, rightOptions, currentPath, getCurrentPath }) => {
	const renderOption = (index, path, name) => (
		<label
			key={index}
			className={path === currentPath ? 'active' : ''}
			onClick={() => getCurrentPath(path)}>
			{name}
		</label>
	)

	return (
		<div className='layout__nav-bar bg-primary-1'>
			<form className='grid-primary'>
				<div className='start-1 size-12'>
					<div className='topnav font-22'>
						{leftOptions && leftOptions.length > 0
							? leftOptions.map((element, index) =>
								renderOption(
									index,
									element.path,
									element.name
								)
							)
							: <>&nbsp;</>}
					</div>
					<div className='topnav font-22 topnav-right'>
						{rightOptions && rightOptions.length > 0
							? rightOptions.map((element, index) =>
								renderOption(
									index,
									element.path,
									element.name
								)
							)
							: <>&nbsp;</>}
					</div>
				</div>
			</form>
		</div>
	)
}

NavBar.propTypes = {
	leftOptions: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	),
	rightOptions: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	),
	currentPath: PropTypes.string,
	getCurrentPath: PropTypes.func.isRequired
}

export default NavBar
