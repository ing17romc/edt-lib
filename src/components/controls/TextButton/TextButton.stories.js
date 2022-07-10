import React from 'react'
import { ID, TEXT, DISABLED, TYPE, ON_CLICK } from '../../../../.storybook/constants'

import TextButton from '.'

export default {
	title: 'Components/TextButton',
	component: TextButton
}

const Template = (args) => <TextButton {...args} />

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies vitae quam et tristique. In et nisl in ligula posuere elementum. Maecenas id rhoncus risus. Pellentesque condimentum erat a lacus varius, aliquet euismod lacus porta. Proin vitae lectus congue mauris facilisis sollicitudin nec in sem. Donec laoreet sed felis ut cursus. Quisque commodo elit non dictum cursus. Suspendisse a turpis maximus, lobortis purus sit amet, pretium odio.'

export const Default = Template.bind({})
Default.args = {
	id: 'it_textbutton',
	text
}
Default.argTypes = {
	id: ID,
	text: TEXT,
	disabled: DISABLED,
	type: TYPE,
	onClick: ON_CLICK
}
