import React from 'react';
import { OPTIONS, LEFT_OPTIONS, RIGHT_OPTIONS } from '../data';
import UI from '../../../src/components/controls';
import type { HomeProps } from './types';

/**
 * Home
 *
 * Componente principal que muestra un layout con menú lateral, opciones de navegación y un footer personalizable.
 * Utiliza Layout y Menu para estructurar la navegación de la aplicación.
 *
 * @param {HomeProps} props - Propiedades del componente
 * @param {Option[]} props.leftOptions - Opciones del menú lateral izquierdo
 * @param {Option[]} props.rightOptions - Opciones del menú lateral derecho
 * @param {string} props.currentPath - Ruta actual activa en el menú
 * @param {(path: string) => void} props.getCurrentPath - Función para manejar el cambio de ruta
 * @param {React.ReactNode} [props.footer] - Elemento opcional para el pie de página
 * @param {React.ReactNode} [props.children] - Elementos hijos a renderizar dentro del layout
 * @returns {JSX.Element} Layout estructurado con menú y footer
 */
const getCurrentPath = (path: string) => {
  alert(path);
};

const Home: React.FC<HomeProps> = ({
  leftOptions = LEFT_OPTIONS,
  rightOptions = RIGHT_OPTIONS,
  currentPath = LEFT_OPTIONS[0].path,
  getCurrentPath: getPath = getCurrentPath,
  footer = <p>Footer</p>,
}) => (
  <UI.Layout
    leftOptions={leftOptions}
    rightOptions={rightOptions}
    currentPath={currentPath}
    getCurrentPath={getPath}
    footer={footer}
  >
    <UI.Menu options={OPTIONS} getCurrentPath={getPath} />
  </UI.Layout>
);

export default Home;
