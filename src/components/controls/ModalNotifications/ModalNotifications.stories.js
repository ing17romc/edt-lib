import React from 'react'
import { SHOW, EVENT_MODAL, MODAL_NOTIFICATION } from '../../../../.storybook/constants'
import { MODAL_NOTIFICATION_PROPS as PROPS } from '../../../../.storybook/props'

import Component from '.'

export default {
	title: 'Components/Modals',
	component: Component
}

const Template = (args) => {
	return <Component {...args}	/>
}

export const ModalNotifications = Template.bind({})

ModalNotifications.args = {
	title: PROPS.TITLE,
	show: PROPS.SHOW,
	details: PROPS.DETAILS,
	message: PROPS.MESSAGE,
	type: PROPS.TYPE
}
ModalNotifications.argTypes = {
	show: SHOW,
	eventModal: EVENT_MODAL,
	eventContinue: MODAL_NOTIFICATION.EVENT_CONTINUE,
	type: MODAL_NOTIFICATION.TYPE,
	title: MODAL_NOTIFICATION.TITLE,
	details: MODAL_NOTIFICATION.DETAILS,
	message: MODAL_NOTIFICATION.MESSAGE

}
