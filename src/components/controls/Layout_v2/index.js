import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

const LayoutV2 = ({ sideOptions, leftOptions, rightOptions, children, getCurrentPath }) => {
	return <div>
		<NavBar
			leftOptions={leftOptions}
			rightOptions={rightOptions}
			getCurrentPath={getCurrentPath}
		></NavBar>
		<SideBar
			options={sideOptions}
			getCurrentPath={getCurrentPath}
		></SideBar>
		<div>
			{children}
		</div>
	</div>
}

export default LayoutV2
