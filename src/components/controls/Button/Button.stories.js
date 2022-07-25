import React from 'react'
import { ID, TITLE, DISABLED, SIZE, TYPE, ON_CLICK } from '../../../../.storybook/constants'
import { BUTTON_PROPS as PROPS } from '../../../../.storybook/props'

import Button from '.'

export default {
	title: 'Components/Button',
	component: Button
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
	id: PROPS.ID,
	title: PROPS.TITLE
}

Default.argTypes = {
	id: ID,
	title: TITLE,
	disabled: DISABLED,
	size: SIZE,
	type: TYPE,
	onClick: ON_CLICK
}
