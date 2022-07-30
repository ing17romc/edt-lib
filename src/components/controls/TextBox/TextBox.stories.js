import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import {
	ID,
	TITLE_TOP,
	PLACEHOLDER,
	TITLE_BOTTOM,
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
	SIZE_TEXT_BOX,
	REF
} from '../../../../.storybook/constants'
import { TEXT_BOX_PROPS as PROPS } from '../../../../.storybook/props'
import Component from '.'

export default {
	title: 'Controls/Inputs',
	component: Component
}

const Template = (args) => {
	const [state, setstate] = useState({
		textbox: args.value ?? ''
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
		value={state.textbox}
		eventChange={e => onInputChange(e)}
	/>
}

export const TextBox = Template.bind({})

TextBox.args = {
	id: PROPS.ID,
	titleTop: PROPS.TITLE_TOP,
	titleBottom: PROPS.TITLE_BOTTOM,
	placeholder: PROPS.PLACEHOLDER,
	value: PROPS.VALUE
}
TextBox.argTypes = {
	id: ID,
	titleTop: TITLE_TOP,
	placeholder: PLACEHOLDER,
	titleBottom: TITLE_BOTTOM,
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
	size: SIZE_TEXT_BOX,
	ref: REF
}
