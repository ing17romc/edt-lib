import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

/**
 * @decription Component Modal
 *
 * @returns Returns the code of an html element with the characteristics of the 'Modal'.
 **/

const Modal = ({ show, eventModal, children }) => {
	const [state, setState] = useState(show)

	const closeModal = e => {
		eventModal(e)
	}

	useEffect(() => {
		setState(show)
	}, [show])

	const modalRender = () => (
		<div className='modal'>
			<div className='modal-content'>
				<div className='modal-container'>
					<div className='padding-v-20 padding-h-20 '>
						<h4 className='modal-close-button' onClick={closeModal}>
							X
						</h4>
					</div>
				</div>

				<div className='modal-body '>{children}</div>
			</div>
		</div>
	)

	return !state ? null : modalRender()
}

Modal.propTypes = {
	eventModal: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	children: PropTypes.node
}

export default Modal
