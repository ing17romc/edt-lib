import React from 'react'
import { SPINNER as DESC } from '../../../../.storybook/argTypes'
import { SPINNER as PROPS } from '../../../../.storybook/props'

import Component from '.'

export default {
	title: 'Components/Spinner',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Spinner = Template.bind({})

Spinner.args = {
	show: PROPS.SHOW
}
Spinner.argTypes = {
	show: DESC.SHOW
}
