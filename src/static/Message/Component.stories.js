import React from 'react'

export default {
	title: 'Static/Message'
}

const Template = () => <>
	<div className="message message-success">
		<strong>Success!</strong> Indicates a successful or positive action.
	</div>

	<div className="message message-info">
		<strong>Info!</strong> Indicates a neutral informative change or action.
	</div>

	<div className="message message-warning">
		<strong>Warning!</strong> Indicates a warning that might need attention.
	</div>

	<div className="message message-danger">
		<strong>Danger!</strong> Indicates a dangerous or potentially negative action.
	</div>
</>

export const Default = Template.bind({})
