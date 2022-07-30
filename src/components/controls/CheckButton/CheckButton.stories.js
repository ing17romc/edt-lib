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
import { CHECK_BUTTON_PROPS as PROPS } from '../../../../.storybook/props'
import Component from '.'

export default {
	title: 'Controls/Inputs',
	component: Component
}

const Template = (args) => {
	const [state, setstate] = useState({
		checkbutton: !!args.value
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
		checked={state.checkbutton}
		eventChange={e => onInputChange(e)}
	/>
}

export const CheckButton = Template.bind({})

CheckButton.args = {
	id: PROPS.ID,
	label: PROPS.LABEL,
	value: PROPS.VALUE
}

CheckButton.argTypes = {
	id: ID,
	label: LABEL,
	disabled: DISABLED,
	required: REQUIRED,
	readOnly: READ_ONLY,
	checked: CHECKED,
	eventChange: EVENT_CHANGE,
	ref: REF
}
