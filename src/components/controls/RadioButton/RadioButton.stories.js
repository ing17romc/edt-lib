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
import RadioButton from '.'

export default {
	title: 'Components/RadioButton',
	component: RadioButton
}

const Template = (args) => {
	const [state, setstate] = useState({
		radioButton: ''
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
			id='rb1'
			label='One'
			value={state.radioButton}
			eventChange={e => onInputChange(e)}
		/>
		<RadioButton {...args }
			id='rb2'
			label='Two'
			value={state.radioButton}
			eventChange={e => onInputChange(e)}
		/>
	</div>
}

export const Default = Template.bind({})

Default.args = {
	name: 'radioButton'
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
