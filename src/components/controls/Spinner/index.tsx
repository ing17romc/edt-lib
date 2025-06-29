import React from 'react';
import { SpinnerProps } from './types';
import './styles/Spinner.scss';

/**
 * Componente Spinner que muestra un indicador de carga.
 * Este componente proporciona una animación visual para indicar que algo está cargando.
 * 
 * @param {SpinnerProps} props - Propiedades del componente
 * @param {boolean} props.show - Si el spinner debe mostrarse o no
 * @returns {JSX.Element} Elemento que muestra o no el spinner de carga
 */

const Spinner: React.FC<SpinnerProps> = ({ show }) => {
  return (
    <div className={`container-load${show ? '' : ' hidden'}`} data-testid="spinner-container">
      {show && (
        <div className='loading' role='status' aria-label='Cargando...' />
      )}
    </div>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
