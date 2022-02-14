import React from 'react';
import PropTypes from 'prop-types';

/**
 * @decription Component Title
 * @author Rafael Orlando Márquez Cedeño
 * @param label Text to display in the component.
 * @param secundary Boolean value to show the component with secundary title (by default it is false).
 * @returns Returns the code of an html element with the characteristics of the 'Title'.
 **/

const Title = ({ label, secundary }) => {
	const getHeadings = (label, secundary) =>
		secundary ? (
			<h4 className='font-bold'>{label}</h4>
		) : (
			<h2 className='font-bold'>{label}</h2>
		);

	return (
		<div className='title'>
			{getHeadings(label, secundary)}
			<div className='line' />
		</div>
	);
};

Title.propTypes = {
	label: PropTypes.string.isRequired,
	secundary: PropTypes.bool,
};

export default Title;
