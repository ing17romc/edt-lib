import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import { CHECK_BUTTON as DESC } from '../../../../.storybook/argTypes'
import { CHECK_BUTTON as PROPS } from '../../../../.storybook/props'
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
	checked: PROPS.CHECKED
}

CheckButton.argTypes = {
	id: DESC.ID,
	label: DESC.LABEL,
	disabled: DESC.DISABLED,
	required: DESC.REQUIRED,
	readOnly: DESC.READ_ONLY,
	checked: DESC.CHECKED,
	eventChange: DESC.EVENT_CHANGE,
	ref: DESC.REF
}
