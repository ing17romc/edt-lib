import React from 'react';
import { ControlSize } from '../../../src/components/utils/enums';
import UI from '../../../src/components/controls';
import { 
  ActionIcons,
  AlertIcons,
  AudioAndVideoIcons,
  CommunicationIcons,
  ContentIcons,
  DeviceIcons,
  EditorIcons,
  FileIcons,
  HardwareIcons,
  ImageIcons,
  NavigationIcons,
  NotificationIcons,
  SocialIcons,
  type AllIconsType
 } from '../../../src/components/utils/IconTypes';


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


  const returnHtml = (category: string, items: string[]): JSX.Element => {
    return (
      <>
        <div className='grid-secondary padding-v-20 bg-light-gray'>
          <div className='start-1 size-20 padding-v-20'>
            <h4>{category}</h4>
          </div>
          {items.map((element, index) => (
            <div key={index} className='size-5 padding-v-20'>
              <UI.Icon name={element as AllIconsType} />
              <p>{element}</p>
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
            <div className='start-1 size-5 padding-v-10'>
              <UI.Icon name={SocialIcons.PERSON} size={ControlSize.LG} />
              <p>
                {SocialIcons.PERSON} - {ControlSize.LG}
              </p>
            </div>
            <div className='size-5 padding-v-10'>
              <UI.Icon name={SocialIcons.PERSON} size={ControlSize.MD} />
              <p>
                {SocialIcons.PERSON} - {ControlSize.MD}
              </p>
            </div>
            <div className='size-5 padding-v-10'>
              <UI.Icon name={SocialIcons.PERSON} size={ControlSize.SM} />
              <p>
                {SocialIcons.PERSON} - {ControlSize.SM}
              </p>
            </div>
            <div className='size-5 padding-v-10'>
              <UI.Icon name={SocialIcons.PERSON} size={ControlSize.XS} />
              <p>
                {SocialIcons.PERSON} - {ControlSize.XS}
              </p>
            </div>
          </div>
          <div className='start-1  padding-v-20' />
          {returnHtml('Action', Object.values(ActionIcons))}
          {returnHtml('Alert', Object.values(AlertIcons))}
          {returnHtml('Audio and Video', Object.values(AudioAndVideoIcons))}
          {returnHtml('Communication', Object.values(CommunicationIcons))}
          {returnHtml('Content', Object.values(ContentIcons))}
          {returnHtml('Device', Object.values(DeviceIcons))}
          {returnHtml('Editor', Object.values(EditorIcons))}
          {returnHtml('File', Object.values(FileIcons))}
          {returnHtml('Hardware', Object.values(HardwareIcons))}
          {returnHtml('Image', Object.values(ImageIcons))}
          {returnHtml('Navigation', Object.values(NavigationIcons))}
          {returnHtml('Notification', Object.values(NotificationIcons))}
          {returnHtml('Social', Object.values(SocialIcons))}
        </div>
      </div>
    </>
  );
};

export default Icons
