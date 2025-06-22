import React from 'react'
import PropTypes from 'prop-types'
import { SIZE_CONTROL, STYLE_CONTROL } from '../../utils/constant'
import { jsonToArray, ternaryOperation } from '../../utils/functions'

/**
 * @decription Component Button
 *
 * @returns Returns the code of an html element with the characteristics of the "Button".
 */

const Button = ({
	id,
	title,
	disabled,
	onClick,
	type = STYLE_CONTROL.PRIMARY,
	size = SIZE_CONTROL.MD
}) => {
	return (
		<button
			id={id}
			className={`${type} ${size}`}
			type={ternaryOperation(onClick, 'button', 'submit')}
			onClick={e => {
				if (!disabled && onClick) onClick(e)
			}}
			disabled={disabled}>
			{title}
		</button>
	)
}

Button.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(jsonToArray(STYLE_CONTROL)),
	size: PropTypes.oneOf(jsonToArray(SIZE_CONTROL))
}

export default Button
