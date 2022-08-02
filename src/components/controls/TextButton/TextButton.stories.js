import React from 'react'
import { TEXT_BUTTON as DESC } from '../../../../.storybook/argTypes'
import { TEXT_BUTTON as PROPS } from '../../../../.storybook/props'
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
	id: DESC.ID,
	text: DESC.TEXT,
	disabled: DESC.DISABLED,
	type: DESC.TYPE,
	onClick: DESC.ON_CLICK
}
