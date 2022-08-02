import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import { DATE_PICKER as DESC } from '../../../../.storybook/argTypes'
import { DATE_PICKER as PROPS } from '../../../../.storybook/props'
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
	id: DESC.ID,
	title: DESC.TITLE,
	value: DESC.VALUE,
	disabled: DESC.DISABLED,
	required: DESC.REQUIRED,
	readOnly: DESC.READ_ONLY,
	eventChange: DESC.EVENT_CHANGE,
	ref: DESC.REF
}
