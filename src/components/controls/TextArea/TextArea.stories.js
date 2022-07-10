import React, { useState } from 'react'
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
import TextArea from '.'

export default {
	title: 'Components/TextArea',
	component: TextArea
}

const Template = (args) => {
	const [value, setValue] = useState(args.value ?? '')

	return <TextArea {...args }
		value={value}
		eventChange={e => setValue(e.target.value)}
	/>
}

export const Default = Template.bind({})

Default.args = {
	id: 'id_textarea',
	title: 'Title',
	placeholder: 'Placeholder',
	value: 'This is a example'
}
Default.argTypes = {
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
