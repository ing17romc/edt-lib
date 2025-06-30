import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title, TitleSize, TitleVariant } from '..';
import { mockTitleProps, mockTitleWithAllProps, mockTitleWithDifferentSizes, mockTitleWithDifferentVariants } from './mocks';

describe('Title Component', () => {
  // Prueba básica de renderizado
  it('debe renderizar correctamente con las props por defecto', () => {
    render(<Title>{mockTitleProps.children}</Title>);
    const titleElement = screen.getByText(mockTitleProps.children as string);
    
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName.toLowerCase()).toBe('h1');
    expect(titleElement).toHaveClass('title--h1');
    expect(titleElement).toHaveClass('title--dark');
  });

  // Prueba con todas las props
  it('debe aplicar todas las props correctamente', () => {
    render(<Title {...mockTitleWithAllProps} />);
    const titleElement = screen.getByText(mockTitleWithAllProps.children as string);
    
    expect(titleElement).toHaveClass('title--h2');
    expect(titleElement).toHaveClass('title--primary');
    expect(titleElement).toHaveClass('custom-class');
    expect(titleElement).toHaveClass('title--bold');
    expect(titleElement).toHaveClass('title--italic');
    expect(titleElement).toHaveClass('title--underline');
    expect(titleElement).toHaveClass('title--center');
    expect(titleElement.id).toBe('title-id');
    
    // Verificar que se aplique el manejador de clic
    titleElement.click();
    expect(mockTitleWithAllProps.onClick).toHaveBeenCalledTimes(1);
  });

  // Prueba de tamaños
  it('debe renderizar correctamente todos los tamaños', () => {
    const sizes = Object.values(TitleSize) as TitleSize[];
    
    sizes.forEach(size => {
      const props = mockTitleWithDifferentSizes(size);
      render(<Title {...props} />);
      const titleElement = screen.getByText(`Título ${size}`);
      
      expect(titleElement.tagName.toLowerCase()).toBe(size);
      expect(titleElement).toHaveClass(`title--${size}`);
    });
  });

  // Prueba de variantes
  it('debe aplicar correctamente las variantes de color', () => {
    const variants = Object.values(TitleVariant) as TitleVariant[];
    
    variants.forEach(variant => {
      const props = mockTitleWithDifferentVariants(variant);
      render(<Title {...props} />);
      const titleElement = screen.getByText(`Título ${variant}`);
      
      expect(titleElement).toHaveClass(`title--${variant}`);
    });
  });

  // Prueba de alineación
  it('debe aplicar correctamente la alineación', () => {
    const alignments = ['left', 'center', 'right', 'justify'] as const;
    
    alignments.forEach((align, index) => {
      const testText = `Título de prueba ${index}`;
      render(
        <Title {...mockTitleProps} align={align}>
          {testText}
        </Title>
      );
      const titleElement = screen.getByText(testText);
      
      expect(titleElement).toHaveClass(`title--${align}`);
    });
  });

  // Prueba de estilos de texto
  it('debe aplicar correctamente los estilos de texto', () => {
    const testText = 'Estilos de texto';
    
    // Prueba negrita
    const { rerender } = render(
      <Title {...mockTitleProps} bold>
        {testText} - Negrita
      </Title>
    );
    let titleElement = screen.getByText(`${testText} - Negrita`);
    expect(titleElement).toHaveClass('title--bold');
    
    // Prueba cursiva
    rerender(
      <Title {...mockTitleProps} italic>
        {testText} - Cursiva
      </Title>
    );
    titleElement = screen.getByText(`${testText} - Cursiva`);
    expect(titleElement).toHaveClass('title--italic');
    
    // Prueba subrayado
    rerender(
      <Title {...mockTitleProps} underline>
        {testText} - Subrayado
      </Title>
    );
    titleElement = screen.getByText(`${testText} - Subrayado`);
    expect(titleElement).toHaveClass('title--underline');
    
    // Prueba tachado
    rerender(
      <Title {...mockTitleProps} strikethrough>
        {testText} - Tachado
      </Title>
    );
    titleElement = screen.getByText(`${testText} - Tachado`);
    expect(titleElement).toHaveClass('title--strikethrough');
  });

  // Prueba de no-wrap
  it('debe aplicar la clase noWrap cuando noWrap es true', () => {
    const testText = 'Título sin salto de línea';
    render(
      <Title {...mockTitleProps} noWrap>
        {testText}
      </Title>
    );
    const titleElement = screen.getByText(testText);
    
    expect(titleElement).toHaveClass('title--noWrap');
  });

  // Prueba de bloque
  it('debe aplicar la clase block cuando block es true', () => {
    const testText = 'Título en bloque';
    render(
      <Title {...mockTitleProps} block>
        {testText}
      </Title>
    );
    const titleElement = screen.getByText(testText);
    
    expect(titleElement).toHaveClass('title--block');
  });

  // Prueba de referencia (ref)
  it('debe asignar correctamente la referencia', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Title {...mockTitleProps} ref={ref} />);
    
    expect(ref.current).toBeInTheDocument();
    expect(ref.current?.tagName.toLowerCase()).toBe('h1');
  });
});
