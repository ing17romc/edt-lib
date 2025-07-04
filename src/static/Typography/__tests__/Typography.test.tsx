import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Typography from '../index';
import { sampleText, fontSizes, lineHeightTypes } from './mocks';

describe('Typography', () => {
  it('renderiza el componente correctamente con las props por defecto', () => {
    render(<Typography />);
    
    // Verificar que el contenedor principal se renderiza
    const container = screen.getByTestId('typography-container');
    expect(container).toBeInTheDocument();
    
    // Verificar que la clase por defecto está presente
    expect(container).toHaveClass('typographyContainer');
  });

  it('aplica la clase personalizada cuando se proporciona', () => {
    const customClass = 'custom-typography';
    render(<Typography className={customClass} />);
    
    const container = screen.getByTestId('typography-container');
    expect(container).toHaveClass('typographyContainer', customClass);
  });

  it('renderiza todos los headings (h1-h6)', () => {
    render(<Typography />);
    
    // Verificar que se renderizan los títulos de sección
    expect(screen.getByText('Headings')).toBeInTheDocument();
    expect(screen.getByText('Paragraphs')).toBeInTheDocument();
    
    // Verificar que se renderizan los encabezados
    const headings = screen.getAllByRole('heading');
    // 2 títulos (Headings, Paragraphs) + 6 encabezados (h1-h6) + 1 subtítulo (Line Height Examples)
    expect(headings).toHaveLength(9);
    
    // Verificar que se renderizan los encabezados con los data-testid correspondientes
    expect(screen.getByTestId('heading-1')).toHaveTextContent('<h1>Heading 1</h1>');
    expect(screen.getByTestId('heading-6')).toHaveTextContent('<h6>Heading 6</h6>');
  });

  it('renderiza todos los tamaños de párrafo definidos', () => {
    render(<Typography />);
    
    // Verificar que se renderizan todos los tamaños de fuente
    fontSizes.forEach(size => {
      const regex = new RegExp(`<p class=".*size-${size}.*">`, 'i');
      const elements = screen.getAllByText(regex);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('renderiza el texto de ejemplo en el párrafo principal', () => {
    render(<Typography />);
    
    // Verificar que el texto de ejemplo se muestra en el párrafo principal
    const paragraphs = screen.getAllByText(sampleText);
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  it('renderiza ejemplos de interlineado cuando showCodeExamples es true', () => {
    render(<Typography showCodeExamples={true} />);
    
    // Verificar que se renderiza la sección de ejemplos de interlineado
    expect(screen.getByText('Line Height Examples')).toBeInTheDocument();
    
    // Verificar que se renderizan los ejemplos de interlineado
    lineHeightTypes.forEach(type => {
      const regex = new RegExp(`line-height-${type}`, 'i');
      const elements = screen.getAllByText(regex);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('no renderiza ejemplos de código cuando showCodeExamples es false', () => {
    render(<Typography showCodeExamples={false} />);
    
    // Verificar que no se renderizan los ejemplos de código
    const codeExamples = screen.queryAllByTestId('code-example');
    expect(codeExamples).toHaveLength(0);
  });
});
