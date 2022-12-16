import React from 'react'
import Component from '.'

export default {
	title: 'Components/Footer',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Footer = Template.bind({})

Footer.args = {
	children: <p>Footer</p>
}
