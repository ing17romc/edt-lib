import React from 'react';
import CONSTANT from '../../../src/components/utils/constant';
import { ControlSize } from '../../../src/components/utils/enums';
import UI from '../../../src/components/controls';


/**
 * Icons
 *
 * Componente de ejemplo que muestra todas las categorías y variantes de íconos disponibles en el sistema.
 * Permite visualizar íconos agrupados por categorías y probar diferentes tamaños.
 *
 * @param {IconsProps} props - Propiedades del componente (actualmente no recibe props)
 * @returns {JSX.Element} Vista de galería de íconos categorizados
 */
const Icons: React.FC = () => {
	const {
		ACTION_ICONS,
		ALERT_ICONS,
		AUDIO_AND_VIDEO_ICONS,
		COMMUNICATION_ICONS,
		CONTENT_ICONS,
		DIVICE_ICONS,
		EDITOR_ICONS,
		FILE_ICONS,
		HARDWARE_ICONS,
		IMAGE_ICONS,
		NAVIGATION_ICONS,
		NOTIFICATION_ICONS,
		SOCIAL_ICONS,
	} = CONSTANT;

  const returnHtml = (category: string, items: string[]): JSX.Element => {
    return (
      <>
        <div className='grid-secondary padding-v-20 bg-light-gray'>
          <div className='start-1 size-20 padding-v-20'>
            <h4>{category}</h4>
          </div>
          {items.map((element, index) => (
            <div key={index} className=' size-5 padding-v-20 '>
              <UI.Icon name={element} />
              <p>{element} </p>
            </div>
          ))}
        </div>
        <div className='start-1  padding-v-20' />
      </>
    );
  };

  return (
    <>
      <div className='container-body'>
        <div className='grid-primary'>
          <div className='start-1 size-12 padding-v-20'>
            <UI.Title title='Icons'>Icons</UI.Title>
          </div>
          <div className='grid-secondary padding-v-20  bg-light-gray'>
            <div className='start-1 size-20 padding-v-20'>
              <h4>Size</h4>
            </div>
            <div className=' start-1 size-5 padding-v-10'>
              <UI.Icon name={'person'} size={ControlSize.LG} />
              <p>
                {'person'} - {ControlSize.LG}
              </p>
            </div>
            <div className='  size-5 padding-v-10'>
              <UI.Icon name={'person'} size={ControlSize.MD} />
              <p>
                {'person'} - {ControlSize.MD}
              </p>
            </div>
            <div className='  size-5 padding-v-10'>
              <UI.Icon name={'person'} size={ControlSize.SM} />
              <p>
                {'person'} - {ControlSize.SM}
              </p>
            </div>
            <div className='  size-5 padding-v-10'>
              <UI.Icon name={'person'} size={ControlSize.XS} />
              <p>
                {'person'} - {ControlSize.XS}
              </p>
            </div>
          </div>
          <div className='start-1  padding-v-20' />
          {returnHtml('Action', ACTION_ICONS)}
          {returnHtml('Alert', ALERT_ICONS)}
          {returnHtml('Audio and Video', AUDIO_AND_VIDEO_ICONS)}
          {returnHtml('Communication', COMMUNICATION_ICONS)}
          {returnHtml('Content', CONTENT_ICONS)}
          {returnHtml('Device', DIVICE_ICONS)}
          {returnHtml('Editor', EDITOR_ICONS)}
          {returnHtml('File', FILE_ICONS)}
          {returnHtml('Hardware', HARDWARE_ICONS)}
          {returnHtml('Image', IMAGE_ICONS)}
          {returnHtml('Navigation', NAVIGATION_ICONS)}
          {returnHtml('Notification', NOTIFICATION_ICONS)}
          {returnHtml('Social', SOCIAL_ICONS)}
        </div>
      </div>
    </>
  );
};

export default Icons
