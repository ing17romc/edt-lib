import React from 'react'
import Component from '.'

export default {
	title: 'Components/Layaout',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Layaout = Template.bind({})

const leftOptions = [{ path: '/', name: 'Home' }]
const rightOptions = [{ path: 'exit', name: 'Exit' }]

Layaout.args = {
	leftOptions,
	rightOptions,
	children: <h1>Content</h1>,
	footer: <p>Footer</p>
}
