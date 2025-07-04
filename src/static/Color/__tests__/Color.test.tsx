import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Color from '../index';
import { mockColorGroups } from './mocks';

describe('Color', () => {
  it('renderiza correctamente con las props por defecto', () => {
    render(<Color />);
    
    // Verificar que se renderizan los títulos de los grupos
    mockColorGroups.forEach(group => {
      expect(screen.getByText(group.title)).toBeInTheDocument();
    });
  });

  it('muestra solo los colores de fuente cuando showFontColors es true', () => {
    render(<Color showFontColors={true} showBackgroundColors={false} showScssVariables={false} />);
    
    // Verificar que solo se muestra el grupo de colores de fuente
    expect(screen.getByText('Font color')).toBeInTheDocument();
    expect(screen.queryByText('Background color')).not.toBeInTheDocument();
    expect(screen.queryByText('SCSS color variables')).not.toBeInTheDocument();
    
    // Verificar que se muestran los colores de fuente
    mockColorGroups
      .find(group => group.type === 'font')
      ?.items.forEach(color => {
        expect(screen.getByText(color)).toBeInTheDocument();
      });
  });

  it('aplica la clase personalizada cuando se proporciona', () => {
    const customClass = 'custom-color-palette';
    render(<Color className={customClass} />);
    
    const container = screen.getByTestId('color-palette');
    expect(container).toHaveClass(customClass);
  });

  it('no renderiza los grupos cuando todas las props son falsas', () => {
    render(<Color 
      showFontColors={false} 
      showBackgroundColors={false} 
      showScssVariables={false} 
    />);
    
    // Verificar que no se renderiza ningún grupo
    mockColorGroups.forEach(group => {
      expect(screen.queryByText(group.title)).not.toBeInTheDocument();
    });
  });

  it('coincide con el snapshot', () => {
    const { container } = render(<Color />);
    expect(container).toMatchSnapshot();
  });
});
