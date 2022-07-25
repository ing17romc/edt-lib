import React from 'react'
import { SHOW } from '../../../../.storybook/constants'
import { SPINNER_PROPS as PROPS } from '../../../../.storybook/props'

import Spinner from '.'

export default {
	title: 'Components/Spinner',
	component: Spinner
}

const Template = (args) => <Spinner {...args} />

export const Default = Template.bind({})

Default.args = {
	show: PROPS.SHOW
}
Default.argTypes = {
	show: SHOW
}
