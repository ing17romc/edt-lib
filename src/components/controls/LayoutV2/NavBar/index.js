import React from 'react'
import PropTypes from 'prop-types'

const NavBar = ({ leftOptions, rightOptions, getCurrentPath }) => {
	const renderOption = (index, path, name, isRight) => (
		<label
			key={index}
			className={isRight ? 'split' : ''}
			onClick={() => getCurrentPath(path)}>
			{name}
		</label>
	)

	return <div className="topnav">
		{leftOptions && leftOptions.length > 0
			? leftOptions.map((element, index) =>
				renderOption(
					index,
					element.path,
					element.name,
					false
				)
			)
			: <>&nbsp;</>}
		{rightOptions && rightOptions.length > 0
			? rightOptions.map((element, index) =>
				renderOption(
					index,
					element.path,
					element.name,
					true
				)
			)
			: <>&nbsp;</>}
	</div>
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
	getCurrentPath: PropTypes.func.isRequired
}

export default NavBar
