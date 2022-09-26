import React from 'react'

import Component from '.'

export default {
	title: 'Components/Pagination',
	component: Component
}

const Template = (args) => <Component {...args} />

export const Default = Template.bind({})

Default.args = {
	totalCount: 10,
	currentPage: 1,
	onPageChange: () => {}
}
