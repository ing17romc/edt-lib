import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import { RADIO_BUTTON as DESC } from '../../../../.storybook/argTypes'
import { RADIO_BUTTON as PROPS } from '../../../../.storybook/props'
import Component from '.'

export default {
	title: 'Controls/Inputs',
	component: Component
}

const Template = (args) => {
	const [state, setstate] = useState({
		radioButton: args.value ?? ''
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

	return <div>
		<Component {...args }
			id={PROPS.OPTIONS.ONE.ID}
			label={PROPS.OPTIONS.ONE.LABEL}
			value={state.radioButton}
			eventChange={e => onInputChange(e)}
		/>
		<Component {...args }
			id={PROPS.OPTIONS.TWO.ID}
			label={PROPS.OPTIONS.TWO.LABEL}
			value={state.radioButton}
			eventChange={e => onInputChange(e)}
		/>
	</div>
}

export const RadioButton = Template.bind({})

RadioButton.args = {
	name: PROPS.NAME,
	value: PROPS.VALUE
}

RadioButton.argTypes = {
	id: DESC.ID,
	name: DESC.NAME,
	value: DESC.VALUE,
	label: DESC.LABEL,
	disabled: DESC.DISABLED,
	required: DESC.REQUIRED,
	readOnly: DESC.READ_ONLY,
	eventChange: DESC.EVENT_CHANGE,
	ref: DESC.REF
}
