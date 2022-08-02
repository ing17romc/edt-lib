import React from 'react'
import { ICON as DESC } from '../../../../.storybook/argTypes'

import Component from '.'

export default {
	title: 'Components/Icon',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Icon = Template.bind({})

Icon.argTypes = {
	size: DESC.SIZE,
	name: DESC.ICON
}
