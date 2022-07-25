import React from 'react'
import { ID, TEXT, DISABLED, TYPE, ON_CLICK } from '../../../../.storybook/constants'
import { TEXT_BUTTON_PROPS as PROPS } from '../../../../.storybook/props'
import TextButton from '.'

export default {
	title: 'Components/TextButton',
	component: TextButton
}

const Template = (args) => <TextButton {...args} />

export const Default = Template.bind({})

Default.args = {
	id: PROPS.ID,
	text: PROPS.TEXT
}

Default.argTypes = {
	id: ID,
	text: TEXT,
	disabled: DISABLED,
	type: TYPE,
	onClick: ON_CLICK
}
