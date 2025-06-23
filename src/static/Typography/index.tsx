import React from 'react';
import type { TypographyProps } from './types';

/**
 * Typography
 *
 * Este componente muestra ejemplos de estilos tipográficos (headings y párrafos) para la librería EDT.
 * Útil para visualizar y validar la apariencia de los estilos definidos en la librería.
 *
 * @param props - Props del componente Typography (actualmente no recibe ninguna, reservado para futuras extensiones).
 * @returns Un bloque de React Elements que muestra ejemplos de headings y párrafos con diferentes estilos.
 */

const getH = (number: number) => `<h${number}></h${number}>`;
const getP = (style: string, text?: string) => (
  <>
    <p className={style}>
      {`<p className="${style}">${text || ''}</p>`}
    </p>
    <hr />
  </>
);

const text = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

const Typography: React.FC<TypographyProps> = () => (
  <>
    <h1>Headings</h1>
    <hr />
    <h1>{getH(1)}</h1>
    <hr />
    <h2>{getH(2)}</h2>
    <hr />
    <h3>{getH(3)}</h3>
    <hr />
    <h4>{getH(4)}</h4>
    <hr />
    <h5>{getH(5)}</h5>
    <hr />
    <h6>{getH(6)}</h6>
    <hr />
    <h1>Paragraphs</h1>
    <hr />
    {getP('font-22')}
    {getP('font-20')}
    {getP('font-18')}
    {getP('font-16')}
    {getP('font-14')}
    {getP('font-12')}
    {getP('font-10')}
    {getP('font-8')}
    {getP('font-22 strong')}
    {getP('font-22 line-spacing', text)}
    {getP('font-22 line-spacing-simple', text)}
    {getP('font-22 line-spacing-doble', text)}
    {getP('font-22 line-spacing-triple', text)}
  </>
);

export default Typography;