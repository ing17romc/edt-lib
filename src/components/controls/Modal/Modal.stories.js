import React from 'react'
import { MODAL as DESC } from '../../../../.storybook/argTypes'
import { MODAL as PROPS } from '../../../../.storybook/props'

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
	show: DESC.SHOW,
	eventModal: DESC.EVENT_MODAL,
	children: DESC.CHILDREN
}
