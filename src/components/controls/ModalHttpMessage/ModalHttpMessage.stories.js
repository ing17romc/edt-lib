import React from 'react'
import { MODAL_HTTP_MESSAGE as DESC } from '../../../../.storybook/argTypes'
import { MODAL_HTTP_MESSAGE as PROPS } from '../../../../.storybook/props'

import Component from '.'

export default {
	title: 'Components/Modals',
	component: Component
}

const Template = (args) => {
	return <Component {...args}/>
}

export const ModalHttpMessage = Template.bind({})

ModalHttpMessage.args = {
	code: PROPS.CODE,
	show: PROPS.SHOW,
	title: PROPS.TITLE,
	details: PROPS.DETAILS,
	message: PROPS.MESSAGE
}
ModalHttpMessage.argTypes = {
	show: DESC.SHOW,
	code: DESC.HTTP_CODE,
	title: DESC.TITLE,
	details: DESC.DETAILS,
	message: DESC.MESSAGE,
	eventModal: DESC.EVENT_MODAL
}
