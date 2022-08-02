import React from 'react'
import { BUTTON as DESC } from '../../../../.storybook/argTypes'
import { BUTTON as PROPS } from '../../../../.storybook/props'

import Component from '.'

export default {
	title: 'Controls/Buttons',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Button = Template.bind({})

Button.args = {
	id: PROPS.ID,
	title: PROPS.TITLE
}

Button.argTypes = {
	id: DESC.ID,
	title: DESC.TITLE,
	disabled: DESC.DISABLED,
	size: DESC.SIZE,
	type: DESC.TYPE,
	onClick: DESC.ON_CLICK
}
