import React from 'react';
import { OPTIONS, LEFT_OPTIONS, RIGHT_OPTIONS } from '../data';
import UI from '../../../src/components/controls';
import type { HomeV2Props } from './types';

/**
 * HomeV2
 *
 * Componente principal de ejemplo que muestra una estructura de layout con menú lateral y opciones configurables.
 * Utiliza LayoutV2 y Menu para mostrar las opciones de navegación y manejar la ruta actual.
 *
 * @param {HomeV2Props} props - Propiedades del componente
 * @param {Option[]} props.leftOptions - Opciones que se muestran en el menú lateral izquierdo
 * @param {Option[]} props.rightOptions - Opciones que se muestran en el menú lateral derecho
 * @param {Option[]} props.sideOptions - Opciones que se muestran en el menú principal
 * @param {(path: string) => void} props.getCurrentPath - Función que se ejecuta al seleccionar una opción de menú
 * @returns {JSX.Element} Layout con menú y contenido principal
 */
const getCurrentPath = (path: string) => {
  alert(path);
};

const HomeV2: React.FC<HomeV2Props> = ({
  leftOptions = LEFT_OPTIONS,
  rightOptions = RIGHT_OPTIONS,
  sideOptions = OPTIONS,
  getCurrentPath: getPath = getCurrentPath,
}) => (
  <UI.LayoutV2
    leftOptions={leftOptions}
    rightOptions={rightOptions}
    getCurrentPath={getPath}
    sideOptions={sideOptions}
  >
    <UI.Menu options={sideOptions} getCurrentPath={getPath} />
  </UI.LayoutV2>
);

export default HomeV2;
