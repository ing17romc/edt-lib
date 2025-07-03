/**
 * Color
 *
 * Este componente muestra ejemplos de colores de fuente, colores de fondo y variables SCSS de color utilizadas en la librería EDT.
 * Útil para visualizar y validar los estilos de color definidos en la librería.
 */
import React from 'react';
import './color.scss';
import type { ColorProps, ColorCategory } from './types';
import { colorGroups } from './stories/mocks';

// Estilos en línea para los puntos de color
const dotStyle: React.CSSProperties = {
  height: '18px',
  width: '18px',
  borderRadius: '50%',
  display: 'inline-block',
  marginRight: '8px',
  verticalAlign: 'middle',
};

/**
 * Renderiza un elemento de color con su clase y código de ejemplo
 */
const renderColorItem = (className: string, type: ColorCategory) => {
  switch (type) {
    case 'font':
      return (
        <div key={className}>
          <span className={className}>{className}</span>
          <code className="code-block">{`<span className="${className}">Texto</span>`}</code>
          <hr className="divider" />
        </div>
      );
    case 'background':
      return (
        <div key={className}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={dotStyle} className={className} />
            <code className="code-block">{`<div className="${className}"></div>`}</code>
          </div>
          <hr className="divider" />
        </div>
      );
    case 'variable':
      return (
        <div key={className}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ ...dotStyle, backgroundColor: `var(--${className})` }} />
            <code className="code-block">${className}</code>
          </div>
          <hr className="divider" />
        </div>
      );
    default:
      return null;
  }
};

/**
 * Componente que muestra una paleta de colores con ejemplos de uso
 */
const Color: React.FC<ColorProps> = ({
  className = '',
  showFontColors = true,
  showBackgroundColors = true,
  showScssVariables = true,
}) => {
  // Filtrar los grupos de colores según las props
  const filteredGroups = colorGroups.filter((group) => {
    if (group.type === 'font') return showFontColors;
    if (group.type === 'background') return showBackgroundColors;
    if (group.type === 'variable') return showScssVariables;
    return true;
  });

  return (
    <div 
      className={`color-palette ${className}`}
      data-testid="color-palette"
    >
      {filteredGroups.map((group) => (
        <section key={group.title} className="color-group">
          <h2 className="color-group__title">{group.title}</h2>
          <div className="color-group__items">
            {group.items.map((item) => renderColorItem(item, group.type))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Color;

