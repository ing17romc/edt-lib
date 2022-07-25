import React from 'react'
import Title from '.'
import { LABEL, SECUNDARY_TITLE } from '../../../../.storybook/constants'
import { TITLE_PROPS as PROPS } from '../../../../.storybook/props'

export default {
	title: 'Components/Title',
	component: Title
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})

Default.args = {
	label: PROPS.LABEL,
	secundary: PROPS.SECUNDARY
}

Default.argTypes = {
	label: LABEL,
	secundary: SECUNDARY_TITLE
}
