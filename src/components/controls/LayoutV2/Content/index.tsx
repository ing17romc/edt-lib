/**
 * Content Component
 *
 * Este componente muestra un ejemplo de navegación dividida (split navigation).
 * El propósito es ilustrar cómo un enlace (por ejemplo, &quot;Help&quot;) puede separarse visualmente del resto de la barra de navegación.
 *
 * @param {ContentProps} props - Las props del componente (actualmente no recibe ninguna, pero la interfaz está lista para futuras extensiones).
 * @returns {JSX.Element} Un contenedor con título y descripción del ejemplo de navegación dividida.
 */
import React from 'react';
import type { ContentProps } from './types';

const Content: React.FC<ContentProps> = () => {
  return (
    <div style={{ paddingLeft: `${16}px` }}>
      <h2>Split Navigation Example</h2>
      <p>
        The &quot;Help&quot; link in the navigation bar is separated from the rest of the navigation links, resulting in a &quot;split navigation&quot; layout.
      </p>
    </div>
  );
};

export default Content;
