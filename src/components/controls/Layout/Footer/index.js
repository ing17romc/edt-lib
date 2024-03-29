import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ children }) => {
	return <div className="layout__footer">{ children }</div>
}

Footer.propTypes = {
	children: PropTypes.node.isRequired
}

export default Footer
