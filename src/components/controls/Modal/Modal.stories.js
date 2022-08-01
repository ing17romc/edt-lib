import React from 'react'
import { SHOW, EVENT_MODAL, CHILDREN } from '../../../../.storybook/constants'
import { MODAL_PROPS as PROPS } from '../../../../.storybook/props'

import Component from '.'

export default {
	title: 'Components/Modals',
	component: Component
}

const Template = (args) => {
	return <Component {...args} >
		<div className='padding-v-40 padding-h-40'>
			<h1>Example Modal!</h1>
		</div>
	</Component>
}

export const Modal = Template.bind({})

Modal.args = {
	show: PROPS.SHOW
}
Modal.argTypes = {
	show: SHOW,
	eventModal: EVENT_MODAL,
	children: CHILDREN
}
