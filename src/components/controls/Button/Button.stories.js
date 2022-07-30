import React from 'react'
import { ID, TITLE, DISABLED, SIZE, TYPE, ON_CLICK } from '../../../../.storybook/constants'
import { BUTTON_PROPS as PROPS } from '../../../../.storybook/props'

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
	id: ID,
	title: TITLE,
	disabled: DISABLED,
	size: SIZE,
	type: TYPE,
	onClick: ON_CLICK
}
