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
import { DATE_PICKER_PROPS as PROPS } from '../../../../.storybook/props'
import Component from '.'

export default {
	title: 'Controls/Inputs',
	component: Component
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

	return <Component {...args }
		value={state.datepicker}
		eventChange={e => onInputChange(e)}
	/>
}

export const DatePicker = Template.bind({})

DatePicker.args = {
	id: PROPS.ID,
	title: PROPS.TITLE,
	value: PROPS.VALUE
}

DatePicker.argTypes = {
	id: ID,
	title: TITLE,
	value: TEXT_VALUE,
	disabled: DISABLED,
	required: REQUIRED,
	readOnly: READ_ONLY,
	eventChange: EVENT_CHANGE,
	ref: REF
}
