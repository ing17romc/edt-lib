import React from 'react'
import Component from '.'

// TODO!
export default {
	title: 'Components/NavBar',
	component: Component
}

const Template = (args) => <Component {...args} />

const leftOptions = [
	{ path: '/', name: 'Option 1' },
	{ path: '/options', name: 'Option 2' }
]
const rightOptions = [{ path: '/options', name: 'Option 3' }]

export const NavBar = Template.bind({})

NavBar.args = {
	leftOptions,
	rightOptions,
	currentPath: '/'
}

NavBar.argTypes = {

}
