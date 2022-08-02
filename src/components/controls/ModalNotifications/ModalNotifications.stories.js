import React from 'react'
import { MODAL_NOTIFICATION as DESC } from '../../../../.storybook/argTypes'
import { MODAL_NOTIFICATION as PROPS } from '../../../../.storybook/props'

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
	show: DESC.SHOW,
	eventModal: DESC.EVENT_MODAL,
	eventContinue: DESC.EVENT_CONTINUE,
	type: DESC.TYPE,
	title: DESC.TITLE,
	details: DESC.DETAILS,
	message: DESC.MESSAGE

}
