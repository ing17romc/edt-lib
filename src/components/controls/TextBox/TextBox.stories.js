import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import { TEXT_BOX as DESC } from '../../../../.storybook/argTypes'
import { TEXT_BOX as PROPS } from '../../../../.storybook/props'
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
	id: DESC.ID,
	titleTop: DESC.TITLE_TOP,
	placeholder: DESC.PLACEHOLDER,
	titleBottom: DESC.TITLE_BOTTOM,
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
	size: DESC.SIZE,
	ref: DESC.REF
}
