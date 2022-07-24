import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import {
	ID,
	LABEL,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	CHECKED,
	EVENT_CHANGE,
	REF
} from '../../../../.storybook/constants'
import CheckButton from '.'

export default {
	title: 'Components/CheckButton',
	component: CheckButton
}

const Template = (args) => {
	const [state, setstate] = useState({
		checkbutton: false
	})

	const onInputChange = e => {
		const object = getValueInput(e)
		if (e) {
			setstate({
				...state,
				[object.key]: object.value
			})
		}
	}

	return <CheckButton {...args }
		checked={state.checkbutton}
		eventChange={e => onInputChange(e)}
	/>
}

export const Default = Template.bind({})

Default.args = {
	id: 'checkbutton',
	label: 'One'
}
Default.argTypes = {
	id: ID,
	label: LABEL,
	disabled: DISABLED,
	required: REQUIRED,
	readOnly: READ_ONLY,
	checked: CHECKED,
	eventChange: EVENT_CHANGE,
	ref: REF
}
