/**
 * Color
 *
 * This component displays examples of font colors, background colors, and SCSS color variables used in the EDT library.
 * Useful for visualizing and validating the color styles defined in the library.
 */
import React from 'react';
import './color.scss';
import type { ColorProps, ColorCategory } from './types';
import { colorGroups } from './stories/mocks';

// Inline styles for color dots
const dotStyle: React.CSSProperties = {
  height: '18px',
  width: '18px',
  borderRadius: '50%',
  display: 'inline-block',
  marginRight: '8px',
  verticalAlign: 'middle',
};

/**
 * Renders a color item with its class and example code
 */
const renderColorItem = (className: string, type: ColorCategory) => {
  switch (type) {
    case 'font':
      return (
        <div key={className}>
          <span className={className}>{className}</span>
          <code className="code-block">{`<span className="${className}">Text</span>`}</code>
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
 * Component that displays a color palette with usage examples
 */
const Color: React.FC<ColorProps> = ({
  className = '',
  showFontColors = true,
  showBackgroundColors = true,
  showScssVariables = true,
}) => {
  // Filter color groups based on props
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

