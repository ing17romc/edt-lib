import React, { useState } from 'react'
import { getValueInput } from '../../utils/functions.js'
import { SELECTOR as DESC } from '../../../../.storybook/argTypes'
import { SELECTOR as PROPS } from '../../../../.storybook/props'
import Component from '.'

export default {
	title: 'Controls/Inputs',
	component: Component
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

	return <Component {...args }
		value={state.selector}
		eventChange={e => onInputChange(e)}
	/>
}

export const Selector = Template.bind({})

Selector.args = {
	id: PROPS.ID,
	titleTop: PROPS.TITLE_TOP,
	titleBottom: PROPS.TITLE_BOTTOM,
	value: PROPS.VALUE,
	options: PROPS.OPTIONS
}

Selector.argTypes = {
	id: DESC.ID,
	titleTop: DESC.TITLE_TOP,
	titleBottom: DESC.TITLE_BOTTOM,
	value: DESC.VALUE,
	disabled: DESC.DISABLED,
	required: DESC.REQUIRED,
	readOnly: DESC.READ_ONLY,
	eventChange: DESC.EVENT_CHANGE,
	options: DESC.OPTIONS,
	ref: DESC.REF
}
