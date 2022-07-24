import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import {
	ID,
	TITLE,
	TEXT_VALUE,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	EVENT_CHANGE,
	REF
} from '../../../../.storybook/constants'
import DatePicker from '.'

export default {
	title: 'Components/DatePicker',
	component: DatePicker
}

const Template = (args) => {
	const [state, setstate] = useState({
		datepicker: args.value ?? ''
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

	return <DatePicker {...args }
		value={state.datepicker}
		eventChange={e => onInputChange(e)}
	/>
}

export const Default = Template.bind({})

Default.args = {
	id: 'datepicker',
	title: 'Date',
	value: new Date().toString()
}
Default.argTypes = {
	id: ID,
	title: TITLE,
	value: TEXT_VALUE,
	disabled: DISABLED,
	required: REQUIRED,
	readOnly: READ_ONLY,
	eventChange: EVENT_CHANGE,
	ref: REF
}
