import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import {
	ID_RADIO_BUTTON,
	LABEL,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	NAME_RADIO_BUTTON,
	VALUE_RADIO_BUTTON,
	EVENT_CHANGE,
	REF
} from '../../../../.storybook/constants'
import { RADIO_BUTTON_PROPS as PROPS } from '../../../../.storybook/props'
import RadioButton from '.'

export default {
	title: 'Components/RadioButton',
	component: RadioButton
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
		<RadioButton {...args }
			id={PROPS.OPTIONS.ONE.ID}
			label={PROPS.OPTIONS.ONE.LABEL}
			value={state.radioButton}
			eventChange={e => onInputChange(e)}
		/>
		<RadioButton {...args }
			id={PROPS.OPTIONS.TWO.ID}
			label={PROPS.OPTIONS.TWO.LABEL}
			value={state.radioButton}
			eventChange={e => onInputChange(e)}
		/>
	</div>
}

export const Default = Template.bind({})

Default.args = {
	name: PROPS.NAME,
	value: PROPS.VALUE
}

Default.argTypes = {
	id: ID_RADIO_BUTTON,
	name: NAME_RADIO_BUTTON,
	value: VALUE_RADIO_BUTTON,
	label: LABEL,
	disabled: DISABLED,
	required: REQUIRED,
	readOnly: READ_ONLY,
	eventChange: EVENT_CHANGE,
	ref: REF
}
