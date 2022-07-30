import React from 'react'
import { SHOW } from '../../../../.storybook/constants'
import { SPINNER_PROPS as PROPS } from '../../../../.storybook/props'

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
	show: SHOW
}
