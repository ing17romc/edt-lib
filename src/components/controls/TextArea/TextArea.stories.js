import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import { TEXT_AREA as DESC } from '../../../../.storybook/argTypes'
import { TEXT_AREA as PROPS } from '../../../../.storybook/props'
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
	id: DESC.ID,
	title: DESC.TITLE,
	placeholder: DESC.PLACEHOLDER,
	value: DESC.VALUE,
	disabled: DESC.DISABLED,
	required: DESC.REQUIRED,
	readOnly: DESC.READ_ONLY,
	noPaste: DESC.NO_PASTE,
	noCopy: DESC.NO_COPY,
	eventChange: DESC.EVENT_CHANGE,
	eventFocus: DESC.EVENT_FOCUS,
	eventBlur: DESC.EVENT_BLUR,
	eventKeyDown: DESC.EVENT_KEY_DOWN,
	rows: DESC.ROWS,
	ref: DESC.REF
}
