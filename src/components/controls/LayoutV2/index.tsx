import React from 'react'
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
			{
				(breadcrumbOptions.length > 0)
					? <div className="grid-primary ">
						<div className="start-1 size-12 padding-v-0">
							<Breadcrumb options={breadcrumbOptions} getCurrentPath={getCurrentPath} />
						</div>
					</div>
					: <div></div>
			}
			<div className=' bg-white padding-v-40' style={{ display: 'flow-root' }}>
				{children}
			</div>
		</div>
	</div>
}

export default LayoutV2
