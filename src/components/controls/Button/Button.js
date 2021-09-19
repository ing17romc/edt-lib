import React from 'react';
import PropTypes from 'prop-types';

/**
 * @decription Component Button
 * @author Rafael Orlando Márquez Cedeño
 * @param {*} title Text to display in the component.
 * @param {*} disabled Boolean value to show the component with disabled style (by default it is false).
 * @param {*} onClick Function that is executed when the button's onClick event is fired.
 * @param {*} type String value to style of button. the default value is 'default'.
 * Values: default, primary, secundary.
 * @param {*} size Larger or smaller button value. the default value is 'md'.
 * Values: lg, md, sm, xs. 
 * @returns Returns the code of an html element with the characteristics of the "Button".
 */

const Button = ({ title, disabled, onClick, type = 'default', size = 'md' }) => {

    return <button
        className={`${type} ${size}`}
        onClick={e => onClick(e)}
        disabled={disabled}>
        {title}
    </button>
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['default', 'primary', 'secundary']),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Button;
