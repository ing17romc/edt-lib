
import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import PropTypes from 'prop-types'

const Layaout = ({ leftOptions, rightOptions, footer, children, getCurrentPath, currentPath }) => {
	return <><div className='main-container bg-white'>
		<NavBar
			leftOptions={leftOptions}
			rightOptions={rightOptions}
			getCurrentPath={getCurrentPath}
		/>
		<div className='pagexd-container'>
			{children}
		</div>

	</div>
	<Footer>
		{ footer }
	</Footer>
	</>
}

Layaout.propTypes = {
	children: PropTypes.node.isRequired,
	footer: PropTypes.node.isRequired,
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
	currentPath: PropTypes.string.isRequired,
	getCurrentPath: PropTypes.func.isRequired
}

export default Layaout
