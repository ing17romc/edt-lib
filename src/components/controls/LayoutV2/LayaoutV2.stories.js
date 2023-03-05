import React from 'react'
import Component from '.'

export default {
	title: 'Components/Layout',
	component: Component
}

const Template = (args) => <Component {...args} />

export const LayoutV2 = Template.bind({})

const leftOptions = [{ path: '/', name: 'Home' }]
const rightOptions = [{ path: '/exit', name: 'Exit' }]
const sideOptions = [
	{ path: '/option1', name: 'Option 1' },
	{ path: '/option2', name: 'Option 2' },
	{ path: '/option3', name: 'Option 3' }
]
const getCurrentPath = path => alert(path)

LayoutV2.args = {
	leftOptions,
	rightOptions,
	sideOptions,
	children: <div className='padding-h-40'><h1>Content</h1></div>,
	getCurrentPath,
	showSideBar: true
}
