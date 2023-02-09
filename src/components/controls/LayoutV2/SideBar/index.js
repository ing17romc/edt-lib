import React from 'react'
import PropTypes from 'prop-types'

const SideBar = ({ options, getCurrentPath }) => {
	const renderOption = (index, path, name) => (
		<label
			key={index}
			onClick={() => getCurrentPath(path)}>
			{name}
		</label>
	)

	return <div className="sidebar">
		{options && options.length > 0
			? options.map((element, index) =>
				renderOption(
					index,
					element.path,
					element.name
				)
			)
			: <>&nbsp;</>}
	</div>
}

SideBar.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	),
	getCurrentPath: PropTypes.func.isRequired
}

export default SideBar
