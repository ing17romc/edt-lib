import React from 'react'
import { IMAGE_BUTTON as DESC } from '../../../../.storybook/argTypes'
import { IMAGE_BUTTON as PROPS } from '../../../../.storybook/props'

import Component from '.'

export default {
	title: 'Controls/Buttons',
	component: Component
}

const Template = (args) => <Component {...args} />

export const ImageButton = Template.bind({})

ImageButton.args = {
	id: PROPS.ID,
	text: PROPS.TEXT
}

ImageButton.argTypes = {
	id: DESC.ID,
	text: DESC.TEXT,
	disabled: DESC.DISABLED,
	size: DESC.SIZE,
	icon: DESC.ICON,
	onClick: DESC.ON_CLICK
}
