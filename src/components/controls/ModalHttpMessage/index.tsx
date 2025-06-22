import React from 'react';
import { ModalHttpMessageProps } from './types';
import Modal from '../Modal';
import Title from '../Title';
import TextArea from '../TextArea';

/**
 * Componente ModalHttpMessage que muestra un modal con mensajes HTTP.
 * Proporciona una interfaz consistente para mostrar mensajes HTTP con código, título y detalles.
 * 
 * @param {ModalHttpMessageProps} props - Propiedades del componente
 * @param {boolean} props.show - Estado de visibilidad del modal
 * @param {(e: React.MouseEvent) => void} props.eventModal - Función que se ejecuta al cerrar el modal
 * @param {HttpStatusCode} props.code - Código HTTP a mostrar (100, 200, 300, 400, 500)
 * @param {string} props.title - Título del mensaje HTTP
 * @param {string} props.message - Mensaje principal del HTTP
 * @param {string} [props.details] - Detalles adicionales del mensaje (opcional)
 * @returns {JSX.Element} Elemento modal con mensaje HTTP
 */

const ModalHttpMessage: React.FC<ModalHttpMessageProps> = ({
  show,
  eventModal,
  code,
  title,
  message,
  details
}) => {
  const getStyleClass = (codeHttp: number) => {
    switch (true) {
      case codeHttp < 200:
        return 'code-one-hundred';
      case codeHttp < 300:
        return 'code-two-hundred';
      case codeHttp < 400:
        return 'code-three-hundred';
      case codeHttp < 500:
        return 'code-four-hundred';
      case codeHttp < 600:
        return 'code-five-hundred';
      default:
        return '';
    }
  };

  return (
    <Modal show={show} eventModal={eventModal}>
      <div className="body-generic-http-message">
        <div className="grid-primary">
          <div className="start-1 size-12">
            <Title level={4}>Mensaje HTTP</Title>
          </div>
          <div className="grid-secondary padding-v-50">
            <div className="center start-1 size-24">
              <h1 className={getStyleClass(code)}>{code}</h1>
            </div>

						<div className='center start-1 size-24  padding-v-10  '>
							<h4 className={getStyleClass(code)}>{title}</h4>
						</div>
					</div>

					<div className=' start-1 size-12 '>
						<p className='font-18'> Mensaje </p>
					</div>

					<div className=' start-1 size-12 padding-v-10  '>
						<p className='font-16'> {message} </p>
					</div>

					<div className='start-1 size-12 padding-v-50  '>
						<TextArea
							rows={6}
							id='Detalles'
							value={details || ''}
							readOnly={true}
						/>
					</div>
				</div>
			</div>
		</Modal>
	)
}



export default ModalHttpMessage
