import React from 'react'
import { MODAL_VIEWER_PDF as DESC } from '../../../../.storybook/argTypes'
import { MODAL_VIEWER_PDF as PROPS } from '../../../../.storybook/props'

import Component from '.'

export default {
	title: 'Components/Modals',
	component: Component
}

const Template = (args) => {
	return <Component {...args} />
}

export const ModalViewerPDF = Template.bind({})

ModalViewerPDF.args = {
	show: PROPS.SHOW,
	pdf: PROPS.PDF
}
ModalViewerPDF.argTypes = {
	show: DESC.SHOW,
	eventModal: DESC.EVENT_MODAL,
	pdf: DESC.PDF
}
