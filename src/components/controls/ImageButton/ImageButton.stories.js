import React from 'react'
import { ID, TEXT_IMAGEN_BUTTON, DISABLED, SIZE, ON_CLICK, ICON } from '../../../../.storybook/constants'

import ImageButton from '.'

export default {
	title: 'Components/ImageButton',
	component: ImageButton
}

const Template = (args) => <ImageButton {...args} />

export const Default = Template.bind({})
Default.args = {
	id: 'id_imagebutton',
	text: 'ImageButton'
}
Default.argTypes = {
	id: ID,
	text: TEXT_IMAGEN_BUTTON,
	disabled: DISABLED,
	size: SIZE,
	icon: ICON,
	onClick: ON_CLICK
}
