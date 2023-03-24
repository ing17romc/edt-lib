import React from 'react'

import Component from '.'

export default {
	title: 'Building/Breadcrumb',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})

const options = [
	{ url: '#', text: 'Option 1' },
	{ url: '#', text: 'Option 2' },
	{ url: '#', text: 'Option 3' },
	{ url: '#', text: 'Option 4' },
	{ url: '#', text: 'Option 5' },
	{ url: '#', text: 'Option 6' }
]

Default.args = { options }

Default.argTypes = {

}
