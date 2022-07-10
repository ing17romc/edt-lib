import React from 'react'
import { ID, TITLE, DISABLED, SIZE, ON_CLICK, ICON } from '../../../../.storybook/constants'

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
	title: TITLE,
	disabled: DISABLED,
	size: SIZE,
	icon: ICON,
	onClick: ON_CLICK
}
