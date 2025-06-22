import React from 'react';
import { ModalNotificationsProps } from './types';
import Modal from '../Modal';
import Title from '../Title';
import Button from '../Button';

/**
 * Componente ModalNotifications que muestra notificaciones modales.
 * Permite mostrar diferentes tipos de notificaciones (error, warning, info, success) con un icono visual.
 * 
 * @param {ModalNotificationsProps} props - Propiedades del componente
 * @param {string} props.title - Título de la notificación
 * @param {string} props.message - Mensaje principal de la notificación
 * @param {string} [props.details] - Detalles adicionales de la notificación (opcional)
 * @param {NotificationType} [props.type='INFO'] - Tipo de notificación (ERROR, WARNING, INFO, SUCCESSFULL)
 * @param {(e: React.MouseEvent) => void} props.eventContinue - Función que se ejecuta al continuar
 * @param {boolean} props.show - Estado de visibilidad del modal
 * @param {(e: React.MouseEvent) => void} props.eventModal - Función que se ejecuta al cerrar el modal
 * @returns {JSX.Element} Elemento modal con notificación
 */

const ModalNotifications: React.FC<Omit<ModalNotificationsProps, 'eventContinue' | 'eventModal'> & {
  eventContinue: (e: React.MouseEvent<Element, MouseEvent>) => void;
  eventModal: (e: React.MouseEvent<Element, MouseEvent>) => void;
}> = ({
  title,
  message,
  details,
  type = 'INFO',
  eventContinue,
  show,
  eventModal
}) => {
  const getNotificationIcon = () => {
    switch (type) {
      case 'ERROR':
        return '❌';
      case 'WARNING':
        return '⚠️';
      case 'INFO':
        return 'ℹ️';
      case 'SUCCESSFULL':
        return '✅';
      default:
        return '';
    }
  };

  return (
    <Modal show={show} eventModal={eventModal}>
      <div className="body-generic-notifications">
        <div className="grid-primary">
          <div className="start-1 size-12">
            <Title>{title}</Title>
          </div>

          <div className="center start-1 size-12 padding-v-40">
            <div className={`circle ${type.toLowerCase()} center`}>
              <h1 aria-label={`Icono de ${type.toLowerCase()}`}>{getNotificationIcon()}</h1>
            </div>
          </div>
        </div>


        <div className='center start-1 size-12 padding-v-30'>
          <p className='font-16'>{message}</p>
        </div>

        {details && (
          <div className='center start-1 size-12 padding-v-30'>
            <p className='font-14'>{details}</p>
          </div>
        )}

        <div className='padding-v-20 start-9 size-4'>
          <Button
            title='Continuar'
            type='PRIMARY'
            onClick={eventContinue as any}
          />
        </div>
      </div>
    </Modal>
  )
}

export default ModalNotifications
