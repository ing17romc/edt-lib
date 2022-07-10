import React from 'react'
import PropTypes from 'prop-types'
import { STYLE_CONTROL, STYLE_STATUS_CONTROL } from '../../utils/constant'
import { ternaryOperation, jsonToArray } from '../../utils/functions'

/**
 * @author Rafael Orlando Márquez Cedeño
 *
 * @decription Component Button
 *
 * @returns Returns the code of an html element with the characteristics of the 'Button'.
 */

const TextButton = ({
	id,
	text,
	disabled,
	onClick,
	type = STYLE_CONTROL.PRIMARY
}) => {
	const style = () => {
		return `textButton ${type} ${ternaryOperation(
			disabled,
			STYLE_STATUS_CONTROL.DISABLED,
			''
		)}`
	}

	return (
		<button
			className={style()}
			id={id}
			type={ternaryOperation(onClick, 'button', 'submit')}
			name={id}
			disabled={disabled}
			onClick={e => {
				if (!disabled && onClick) {
					onClick(e)
				}
			}}>
			{text}
		</button>
	)
}

TextButton.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(jsonToArray(STYLE_CONTROL))
}

export default TextButton
