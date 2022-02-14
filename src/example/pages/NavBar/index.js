import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import UI from '../../../default.js';

const NavBar = ({ leftOptions, rightOptions }) => {
	const location = useLocation();
	const history = useHistory();

	return (
		<UI.NavBar
			leftOptions={leftOptions}
			rightOptions={rightOptions}
			correntPath={location.pathname}
			getCurrentPath={path => history.push(path)}
		/>
	);
};

NavBar.propTypes = {
	leftOptions: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
	rightOptions: PropTypes.arrayOf(
		PropTypes.shape({
			path: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		})
	),
};

export default NavBar;
