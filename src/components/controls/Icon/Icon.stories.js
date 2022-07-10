import React from 'react'
import { SIZE, ICON } from '../../../../.storybook/constants'

import Icon from '.'

export default {
	title: 'Components/Icon',
	component: Icon
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.argTypes = {
	size: SIZE,
	name: ICON
}
