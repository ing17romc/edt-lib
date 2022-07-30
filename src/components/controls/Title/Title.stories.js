import React from 'react'
import Component from '.'
import { LABEL, SECUNDARY_TITLE } from '../../../../.storybook/constants'
import { TITLE_PROPS as PROPS } from '../../../../.storybook/props'

export default {
	title: 'Components/Title',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Title = Template.bind({})

Title.args = {
	label: PROPS.LABEL,
	secundary: PROPS.SECUNDARY
}

Title.argTypes = {
	label: LABEL,
	secundary: SECUNDARY_TITLE
}
