import React from 'react'
import { ID, TEXT, DISABLED, TYPE, ON_CLICK } from '../../../../.storybook/constants'
import { TEXT_BUTTON_PROPS as PROPS } from '../../../../.storybook/props'
import Component from '.'

export default {
	title: 'Controls/Buttons',
	component: Component
}

const Template = (args) => <Component {...args} />

export const TextButton = Template.bind({})

TextButton.args = {
	id: PROPS.ID,
	text: PROPS.TEXT
}

TextButton.argTypes = {
	id: ID,
	text: TEXT,
	disabled: DISABLED,
	type: TYPE,
	onClick: ON_CLICK
}
