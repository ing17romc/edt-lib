import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../Icon'

const SideBar = ({ options, getCurrentPath }) => {
	const renderOption = ({ index, path, name, icon }) => {
		console.log({ index, path, name, icon })
		return	<label className='center-vertical'
			key={index}
			onClick={() => getCurrentPath(path)}>
			<Icon name={icon} />
			{name}
		</label>
	}

	return <div className="sidebar">
		{options && options.length > 0
			? options.map((element, index) =>
				renderOption({
					index,
					path: element.path,
					name: element.name,
					icon: element.icon
				})
			)
			: <>&nbsp;</>}
	</div>
}

SideBar.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string,
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	),
	getCurrentPath: PropTypes.func.isRequired
}

export default SideBar
