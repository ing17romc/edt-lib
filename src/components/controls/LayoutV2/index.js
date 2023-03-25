import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Breadcrumb from '../Breadcrumb'

const LayoutV2 = ({ sideOptions, leftOptions, rightOptions, children, getCurrentPath, showSideBar, breadcrumbOptions = [] }) => {
	return <div>
		<NavBar
			leftOptions={leftOptions}
			rightOptions={rightOptions}
			getCurrentPath={getCurrentPath}
		></NavBar>
		{ showSideBar
			? <SideBar
				options={sideOptions}
				getCurrentPath={getCurrentPath}
			></SideBar>
			: <div></div>
		}
		<div className=' bg-white padding-v-20' style={{ display: 'flow-root' }}>
			<div className="grid-primary ">
				<div className="start-1 size-12 padding-v-0">
					<Breadcrumb options={breadcrumbOptions} getCurrentPath={getCurrentPath} />
				</div>
			</div>
			<div className=' bg-white padding-v-40' style={{ display: 'flow-root' }}>
				{children}
			</div>
		</div>
	</div>
}

LayoutV2.propTypes = {
	children: PropTypes.node.isRequired,
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
	sideOptions: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string,
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})
	),
	breadcrumbOptions: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	),
	getCurrentPath: PropTypes.func.isRequired,
	showSideBar: PropTypes.bool
}

export default LayoutV2
