import React from 'react'
import Title from '.'
import { LABEL, SECUNDARY_TITLE } from '../../../../.storybook/constants'

export default {
	title: 'Components/Title',
	component: Title
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
	label: 'Title'
}
Default.argTypes = {
	label: LABEL,
	secundary: SECUNDARY_TITLE
}
