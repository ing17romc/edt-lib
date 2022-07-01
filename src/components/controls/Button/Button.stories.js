import React from 'react'
import { ID, TITLE, DISABLED, SIZE, TYPE, ON_CLICK } from '../../../../.storybook/constants'

import Button from '.'

export default {
	title: 'Components/Button',
	component: Button
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	id: 'btn',
	title: 'Button'
}
Default.argTypes = {
	id: ID,
	title: TITLE,
	disabled: DISABLED,
	size: SIZE,
	type: TYPE,
	onClick: ON_CLICK
}
