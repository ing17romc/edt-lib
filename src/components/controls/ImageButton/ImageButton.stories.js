import React from 'react'
import { ID, TEXT_IMAGEN_BUTTON, DISABLED, SIZE, ON_CLICK, ICON } from '../../../../.storybook/constants'
import { IMAGE_BUTTON_PROPS as PROPS } from '../../../../.storybook/props'

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
	id: ID,
	text: TEXT_IMAGEN_BUTTON,
	disabled: DISABLED,
	size: SIZE,
	icon: ICON,
	onClick: ON_CLICK
}
