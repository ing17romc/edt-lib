import React, { useEffect, useState } from 'react'

/**
 * Componente Modal para mostrar ventanas modales
 *
 * @param {Object} props
 * @param {boolean} props.show - Estado de visibilidad del modal
 * @param {Function} props.eventModal - Función para manejar el cierre del modal
 * @param {React.ReactNode} props.children - Contenido del modal
 * @returns {JSX.Element} Componente Modal
 */
export const Modal: React.FC<{
  show: boolean,
  eventModal: (e: React.MouseEvent) => void,
  children: React.ReactNode
}> = ({ show, eventModal, children }) => {
	const [state, setState] = useState(show)

	const closeModal = (e: React.MouseEvent) => {
		eventModal(e)
	}

	useEffect(() => {
		setState(show)
	}, [show])

	const modalRender = () => (
		<div 
			role="dialog" 
			aria-modal="true" 
			aria-labelledby="modal-title"
			className='modal'
			tabIndex={-1}
		>
			<div className='modal-content'>
				<div className='modal-container'>
					<div className='padding-v-20 padding-h-20'>
						<button 
						type="button" 
						className='modal-close-button' 
						onClick={closeModal}
						aria-label="Cerrar modal"
						tabIndex={0}
						>
							X
						</button>
						<div id="modal-title" className="modal-title">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	)

	return state ? modalRender() : null
}
