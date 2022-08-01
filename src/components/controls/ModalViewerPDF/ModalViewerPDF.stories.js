import React from 'react'
import { SHOW, EVENT_MODAL, PDF_MODAL_VIEWER_PDF } from '../../../../.storybook/constants'
import { MODAL_VIEWER_PDF_PROPS as PROPS } from '../../../../.storybook/props'

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
	show: SHOW,
	eventModal: EVENT_MODAL,
	pdf: PDF_MODAL_VIEWER_PDF
}
