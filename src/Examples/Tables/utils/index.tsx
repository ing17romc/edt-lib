import React from 'react';
import type { GetStatusValue } from './types';

/**
 * getStatus
 *
 * Componente utilitario que retorna un elemento <strong> indicando el estado activo o inactivo.
 * El color del texto varía según el valor recibido.
 *
 * @param {GetStatusValue} value - Valor que representa el estado (booleano o numérico)
 * @returns {JSX.Element} Elemento <strong> con el texto 'Active' o 'Inactive' y color correspondiente
 */
const getStatus = (value: GetStatusValue): JSX.Element => (
  <strong className={value ? 'font-blue' : 'font-red'}>
    {value ? 'Active' : 'Inactive'}
  </strong>
);

export default getStatus;
