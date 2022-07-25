import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import {
	ID,
	TITLE_TOP,
	TITLE_BOTTOM,
	TEXT_VALUE,
	DISABLED,
	REQUIRED,
	READ_ONLY,
	OPTIONES_SELECTOR,
	EVENT_CHANGE,
	REF
} from '../../../../.storybook/constants'
import { SELECTOR_PROPS as PROPS } from '../../../../.storybook/props'
import Selector from '.'

export default {
	title: 'Components/Selector',
	component: Selector
}

const Template = (args) => {
	const [state, setstate] = useState({
		selector: args.value ?? ''
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

	return <Selector {...args }
		value={state.selector}
		eventChange={e => onInputChange(e)}
	/>
}

export const Default = Template.bind({})

Default.args = {
	id: PROPS.ID,
	titleTop: PROPS.TITLE_TOP,
	titleBottom: PROPS.TITLE_BOTTOM,
	value: PROPS.VALUE,
	options: PROPS.OPTIONS
}

Default.argTypes = {
	id: ID,
	titleTop: TITLE_TOP,
	titleBottom: TITLE_BOTTOM,
	value: TEXT_VALUE,
	disabled: DISABLED,
	required: REQUIRED,
	readOnly: READ_ONLY,
	eventChange: EVENT_CHANGE,
	options: OPTIONES_SELECTOR,
	ref: REF
}
