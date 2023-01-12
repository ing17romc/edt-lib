
import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import PropTypes from 'prop-types'

const Layout = ({ leftOptions, rightOptions, footer, children, getCurrentPath, currentPath }) => {
	return <div>
		<div className='layout bg-white'>
			<NavBar
				leftOptions={leftOptions}
				rightOptions={rightOptions}
				getCurrentPath={getCurrentPath}
			/>
			<div className='layout__content'>
				{children}
			</div>
			<Footer>
				{ footer }
			</Footer>
		</div>
	</div>
}

Layout.propTypes = {
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

export default Layout
