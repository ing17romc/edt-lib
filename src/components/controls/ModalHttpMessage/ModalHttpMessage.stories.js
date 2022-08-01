import React from 'react'
import { SHOW, EVENT_MODAL, MODAL_HTTP_MESSAGE } from '../../../../.storybook/constants'
import { MODAL_HTTP_MESSAGE_PROPS as PROPS } from '../../../../.storybook/props'

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
	show: SHOW,
	code: MODAL_HTTP_MESSAGE.HTTP_CODE,
	title: MODAL_HTTP_MESSAGE.TITLE,
	details: MODAL_HTTP_MESSAGE.DETAILS,
	message: MODAL_HTTP_MESSAGE.MESSAGE,
	eventModal: EVENT_MODAL
}
