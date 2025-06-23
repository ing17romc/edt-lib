/**
 * Color
 *
 * Este componente muestra ejemplos de colores de fuente, colores de fondo y variables SCSS de color utilizadas en la librería EDT.
 * Útil para visualizar y validar los estilos de color definidos en la librería.
 *
 * @param props - Props del componente Color (actualmente no recibe ninguna, reservado para futuras extensiones).
 * @returns Elementos React que muestran ejemplos de colores y variables SCSS.
 */
import React from 'react';
import './color.scss';
import type { ColorProps } from './types';

const dot = {
	height: '18px',
	width: '18px',
	borderRadius: '50%',
	display: 'inline-block'
}

const getP = (style: string) => (
  <>
    <span className={style}>{style}</span>
    {` <span className="${style}"></span>`}
    <hr />
  </>
);

const getSpan = (style: string) => (
  <>
    <span style={dot} className={style}></span>
    {` <span className="${style}"></span>`}
    <hr />
  </>
);

const getVariablesColor = (style: string) => (
  <>
    <span style={dot} className={style}></span>
    {` $${style}`}
    <hr />
  </>
);

const Color: React.FC<ColorProps> = () => (
  <>
    <h1>Font color</h1>
    <hr />
    {getP('font-blue')}
    {getP('font-red')}
    {getP('font-orange')}
    {getP('font-green')}
    {getP('font-white')}
    {getP('font-yellow')}
    {getP('font-gray')}
    <h1>Background color </h1>
    <hr />
    {getSpan('bg-primary-1')}
    {getSpan('bg-primary-2')}
    {getSpan('bg-primary-3')}
    {getSpan('bg-white')}
    {getSpan('bg-light-gray')}
    {getSpan('bg-gray')}
    <h1>SCSS color variables</h1>
    <hr />
    {getVariablesColor('black-color')}
    {getVariablesColor('dark-gray-color')}
    {getVariablesColor('gray-color')}
    {getVariablesColor('light-gray-color')}
    {getVariablesColor('white-color')}
    {getVariablesColor('light-blue-color')}
    {getVariablesColor('dark-blue-color')}
    {getVariablesColor('red-color')}
    {getVariablesColor('orange-color')}
    {getVariablesColor('green-color')}
    {getVariablesColor('yellow-color')}
    {getVariablesColor('primary-color-1')}
    {getVariablesColor('primary-color-2')}
    {getVariablesColor('primary-color-3')}
  </>
);

export default Color;

