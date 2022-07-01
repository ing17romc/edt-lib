import React from 'react'
import PropTypes from 'prop-types'
import {
	STYLE_STATUS_CONTROL,
	SIZE_CONTROL,
	ICONS
} from '../../utils/constant'
import { ternaryOperation, jsonToArray } from '../../utils/functions'
import Icon from '../Icon'
/**
 * @decription Component ImageButton
 * @author Rafael Orlando Márquez Cedeño
 * @returns Returns the code of an html element with the characteristics of the 'ImageButton'.
 */

const ImageButton = ({
	id,
	text,
	icon,
	size = SIZE_CONTROL.MD,
	disabled,
	onClick
}) => {
	const style = () => {
		return `imageButton ${ternaryOperation(
			disabled,
			STYLE_STATUS_CONTROL.DISABLED,
			''
		)}`
	}

	return (
		<abbr title={text}>
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
				<Icon name={icon} size={size} />
			</button>
		</abbr>
	)
}

ImageButton.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string,
	icon: PropTypes.oneOf(ICONS).isRequired,
	size: PropTypes.oneOf(jsonToArray(SIZE_CONTROL)),
	disabled: PropTypes.bool,
	onClick: PropTypes.func
}

export default ImageButton
