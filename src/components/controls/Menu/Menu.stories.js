import React from 'react'
import Component from '.'

// TODO!
export default {
	title: 'Components/Menu',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Menu = Template.bind({})

const APP_ICON_DEFAULT = 'list'

const options = [
	{ path: '/options', name: 'Option 1', icon: APP_ICON_DEFAULT },
	{ path: '/options', name: 'Option 2', icon: APP_ICON_DEFAULT },
	{ path: '/options', name: 'Option 3', icon: APP_ICON_DEFAULT },
	{ path: '/options', name: 'Option 4', icon: APP_ICON_DEFAULT },
	{ path: '/options', name: 'Option 5', icon: APP_ICON_DEFAULT },
	{ path: '/options', name: 'Option 6', icon: APP_ICON_DEFAULT }
]

Menu.args = { options }

Menu.argTypes = {

}
