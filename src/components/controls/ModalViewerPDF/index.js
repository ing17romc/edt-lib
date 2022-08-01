import React from 'react'
import Modal from '../Modal'
import Title from '../Title'
import PropTypes from 'prop-types'

/**
 * @decription Component ModalViewerPDF
 *
 * @returns Returns the code of an html element with the characteristics of the 'ModalViewerPDF'.
 */

const ModalViewerPDF = ({ pdf, show, eventModal }) => {
	return (
		<Modal show={show} eventModal={e => eventModal(e)}>
			<div className='body-viewer-pdf'>
				<div className='grid-primary'>
					<div className='start-1 size-12 '>
						<Title label='Visor de PDF' secundary={true} />
					</div>

					<div className='start-1 size-12 padding-v-30'>
						<div className=' padding-v-30'>
							<iframe
								title='Viewer PDF'
								src={pdf}
								frameBorder='0'
							/>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}

ModalViewerPDF.propTypes = {
	show: PropTypes.bool,
	eventModal: PropTypes.func,
	pdf: PropTypes.string.isRequired
}

export default ModalViewerPDF
