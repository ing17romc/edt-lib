import React from 'react'
import Component from '.'

export default {
	title: 'Components/Layout',
	component: Component
}

const Template = (args) => <Component {...args} />

export const LayoutV2 = Template.bind({})

const leftOptions = [{ path: '/', name: 'Home', icon: 'menu' }]
const rightOptions = [{ path: '/exit', name: 'Exit', icon: 'logout' }]
const sideOptions = [
	{ path: '/option1', name: 'Option 1', icon: 'chevron_right' },
	{ path: '/option2', name: 'Option 2' },
	{ path: '/option3', name: 'Option 3' }
]
const breadcrumbOptions = [
	{ url: '#', text: 'Option 1' },
	{ url: '#', text: 'Option 2' }
]
const getCurrentPath = path => alert(path)

LayoutV2.args = {
	breadcrumbOptions,
	leftOptions,
	rightOptions,
	sideOptions,
	children: <div className='padding-h-40'><h1>Content</h1></div>,
	getCurrentPath,
	showSideBar: true
}
