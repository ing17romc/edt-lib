import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import {
	ID,
	TITLE,
	PLACEHOLDER,
	TEXT_VALUE,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	NO_PASTE,
	NO_COPY,
	EVENT_CHANGE,
	EVENT_FOCUS,
	EVENT_BLUR,
	EVENT_KEY_DOWN,
	ROWS_TEXT_AREA,
	REF
} from '../../../../.storybook/constants'
import { TEXT_AREA_PROPS as PROPS } from '../../../../.storybook/props'
import Component from '.'

export default {
	title: 'Controls/Inputs',
	component: Component
}

const Template = (args) => {
	const [state, setstate] = useState({
		textarea: args.value ?? ''
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
		value={state.textarea}
		eventChange={e => onInputChange(e)}
	/>
}

export const TextArea = Template.bind({})

TextArea.args = {
	id: PROPS.ID,
	title: PROPS.TITLE,
	placeholder: PROPS.PLACEHOLDER,
	value: PROPS.VALUE
}

TextArea.argTypes = {
	id: ID,
	title: TITLE,
	placeholder: PLACEHOLDER,
	value: TEXT_VALUE,
	disabled: DISABLED,
	required: REQUIRED,
	readOnly: READ_ONLY,
	noPaste: NO_PASTE,
	noCopy: NO_COPY,
	eventChange: EVENT_CHANGE,
	eventFocus: EVENT_FOCUS,
	eventBlur: EVENT_BLUR,
	eventKeyDown: EVENT_KEY_DOWN,
	rows: ROWS_TEXT_AREA,
	ref: REF
}
