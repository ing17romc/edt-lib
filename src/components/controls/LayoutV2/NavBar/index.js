import React from 'react'
import PropTypes from 'prop-types'
import ImageButton from '../../ImageButton'

const NavBar = ({ leftOptions, rightOptions, getCurrentPath }) => {
	const renderOption = ({ index, path, name, icon, isRight }) => {
		console.log({ index, path, name, icon })
		if (icon) {
			return <div key={index} className={isRight ? 'container-navbar split' : 'container-navbar'}>
				<ImageButton id={`id_${index.toString()}`} text={name} onClick={() => getCurrentPath(path)} icon={icon}/>
			</div>
		} else {
			return <label
				key={index}
				className={isRight ? 'split' : ''}
				onClick={() => getCurrentPath(path)}>
				{name}
			</label>
		}
	}

	return <div className="topnav">
		{leftOptions && leftOptions.length > 0
			? leftOptions.map((element, index) =>
				renderOption({
					index,
					path: element.path,
					name: element.name,
					icon: element.icon,
					isRight: false
				})
			)
			: <>&nbsp;</>}
		{rightOptions && rightOptions.length > 0
			? rightOptions.map((element, index) =>
				renderOption({
					index,
					path: element.path,
					name: element.name,
					icon: element.icon,
					isRight: true
				})
			)
			: <>&nbsp;</>}
	</div>
}

NavBar.propTypes = {
	leftOptions: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string,
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	),
	rightOptions: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string,
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	),
	getCurrentPath: PropTypes.func.isRequired
}

export default NavBar
