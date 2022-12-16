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
		<div>
			<div className=' container-nav-bar-father '>
				<div className='container-nav-bar bg-primary-1'>
					<form className='grid-primary padding-v-0'>
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
								<div className='topnav-right'>
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
						</div>
					</form>
				</div>
			</div>
			<div className='nav-bar-margin-bootom ' />
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
