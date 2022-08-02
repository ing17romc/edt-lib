import React from 'react'
import Component from '.'
import { TITLE_COMPONENT as DESC } from '../../../../.storybook/argTypes'
import { TITLE as PROPS } from '../../../../.storybook/props'

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
	label: DESC.LABEL,
	secundary: DESC.SECUNDARY
}
