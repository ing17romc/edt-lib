import React from 'react'
import Component from '.'

export default {
	title: 'Components/Layaout',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Layaout = Template.bind({})

const leftOptions = [{ path: '/', name: 'Home' }]
const rightOptions = [{ path: '/exit', name: 'Exit' }]
const getCurrentPath = path => alert(path)

Layaout.args = {
	leftOptions,
	rightOptions,
	children: <div className='padding-h-40'><h1>Content</h1></div>,
	footer: <p>Footer</p>,
	getCurrentPath,
	currentPath: '/'
}
