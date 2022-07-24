import React from 'react'
import PropTypes from 'prop-types'
import { STYLE_STATUS_CONTROL } from '../../utils/constant'

/**
 * @decription Component CheckButton
 *
 * @author Rafael Orlando Márquez Cedeño
 *
 * @param checked Boolean value to show the component with checked style (by default it is false).
 *
 * @returns Returns the code of an html element with the characteristics of the 'CheckButton'.
 */

const CheckButton = ({
	id,
	label,
	required,
	disabled,
	readOnly,
	checked,
	eventChange,
	ref = null
}) => {
	const style = () => {
		if (disabled) {
			return STYLE_STATUS_CONTROL.DISABLED
		} else if (readOnly) {
			return STYLE_STATUS_CONTROL.READ_ONLY
		} else if (required && !checked) {
			return STYLE_STATUS_CONTROL.REQUIRED
		} else {
			return ''
		}
	}

	return (
		<div className={`checkbutton ${style()}`}>
			<input
				type='checkbox'
				id={id}
				name={id}
				required={!disabled && required && !checked}
				disabled={disabled}
				checked={checked}
				onChange={e => {
					if (!readOnly) {
						eventChange(e)
					}
				}}
				ref={ref}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

CheckButton.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	readOnly: PropTypes.bool,
	checked: PropTypes.bool.isRequired,
	eventChange: PropTypes.func.isRequired,
	ref: PropTypes.object
}

export default CheckButton
