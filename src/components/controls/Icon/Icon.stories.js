import React from 'react'
import { SIZE, ICON } from '../../../../.storybook/constants'

import Component from '.'

export default {
	title: 'Components/Icon',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Icon = Template.bind({})

Icon.argTypes = {
	size: SIZE,
	name: ICON
}
