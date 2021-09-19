import React from 'react';
import PropTypes from 'prop-types';

/**
 * @decription Component CheckButton
 * @author Rafael Orlando Márquez Cedeño
 * @param {*} id Text to specify a unique.
 * @param {*} label Text to display in the component.
 * @param {*} disabled Boolean value to show the component with disabled style (by default it is false).
 * @param {*} required Boolean value to show the component with required style (by default it is false).
 * @param {*} value Value handled by the component
 * @param {*} eventChange Function that will be invoked when there is a change.
 * @returns Returns the code of an html element with the characteristics of the "CheckButton".
 */

const CheckButton = ({ id, label, required, disabled, checked, eventChange, ref = null }) => {
    return <div className={"checkbutton"} >
        <input type="checkbox"
            id={id}
            name={id}
            required={required}
            disabled={disabled}

            checked={checked}
            onChange={e => eventChange(e)}
            ref={ref}
        />
        <label htmlFor={id}>
            {label}
        </label>
    </div>;
}

CheckButton.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    checked: PropTypes.bool.isRequired,
    eventChange: PropTypes.func.isRequired,
};

export default CheckButton;