import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import SideBar from './SideBar'

const LayoutV2 = ({ sideOptions, leftOptions, rightOptions, children, getCurrentPath }) => {
	return <div>
		<SideBar
			options={sideOptions}
			getCurrentPath={getCurrentPath}
		></SideBar>
		<NavBar
			leftOptions={leftOptions}
			rightOptions={rightOptions}
			getCurrentPath={getCurrentPath}
		></NavBar>
		<div className=' bg-white padding-v-60' style={{ display: 'flow-root' }}>
			{children}
		</div>
	</div>
}

LayoutV2.propTypes = {
	children: PropTypes.node.isRequired,
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
	sideOptions: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	),
	getCurrentPath: PropTypes.func.isRequired
}

export default LayoutV2
