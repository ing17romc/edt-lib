import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title, TitleSize, TitleVariant } from '..';
import { mockTitleProps, mockTitleWithAllProps, mockTitleWithDifferentSizes, mockTitleWithDifferentVariants } from './mocks';

describe('Title Component', () => {
  // Basic rendering test
  it('should render correctly with default props', () => {
    render(<Title>{mockTitleProps.children}</Title>);
    const titleElement = screen.getByText(mockTitleProps.children as string);
    
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName.toLowerCase()).toBe('h1');
    expect(titleElement).toHaveClass('title--h1');
    expect(titleElement).toHaveClass('title--dark');
  });

  // Test with all props
  it('should apply all props correctly', () => {
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
    
    // Verify that the click handler is applied
    titleElement.click();
    expect(mockTitleWithAllProps.onClick).toHaveBeenCalledTimes(1);
  });

  // Sizes test
  it('should render all sizes correctly', () => {
    const sizes = Object.values(TitleSize) as TitleSize[];
    
    sizes.forEach(size => {
      const props = mockTitleWithDifferentSizes(size);
      render(<Title {...props} />);
      const titleElement = screen.getByText(`Title ${size}`);
      
      expect(titleElement.tagName.toLowerCase()).toBe(size);
      expect(titleElement).toHaveClass(`title--${size}`);
    });
  });

  // Variants test
  it('should apply color variants correctly', () => {
    const variants = Object.values(TitleVariant) as TitleVariant[];
    
    variants.forEach(variant => {
      const props = mockTitleWithDifferentVariants(variant);
      render(<Title {...props} />);
      const titleElement = screen.getByText(`Title ${variant}`);
      
      expect(titleElement).toHaveClass(`title--${variant}`);
    });
  });

  // Alignment test
  it('should apply alignment correctly', () => {
    const alignments = ['left', 'center', 'right', 'justify'] as const;
    
    alignments.forEach((align, index) => {
      const testText = `Test title ${index}`;
      render(
        <Title {...mockTitleProps} align={align}>
          {testText}
        </Title>
      );
      const titleElement = screen.getByText(testText);
      
      expect(titleElement).toHaveClass(`title--${align}`);
    });
  });

  // Text styles test
  it('should apply text styles correctly', () => {
    const testText = 'Text styles';
    
    // Bold test
    const { rerender } = render(
      <Title {...mockTitleProps} bold>
        {testText} - Bold
      </Title>
    );
    let titleElement = screen.getByText(`${testText} - Bold`);
    expect(titleElement).toHaveClass('title--bold');
    
    // Italic test
    rerender(
      <Title {...mockTitleProps} italic>
        {testText} - Italic
      </Title>
    );
    titleElement = screen.getByText(`${testText} - Italic`);
    expect(titleElement).toHaveClass('title--italic');
    
    // Underline test
    rerender(
      <Title {...mockTitleProps} underline>
        {testText} - Underline
      </Title>
    );
    titleElement = screen.getByText(`${testText} - Underline`);
    expect(titleElement).toHaveClass('title--underline');
    
    // Strikethrough test
    rerender(
      <Title {...mockTitleProps} strikethrough>
        {testText} - Strikethrough
      </Title>
    );
    titleElement = screen.getByText(`${testText} - Strikethrough`);
    expect(titleElement).toHaveClass('title--strikethrough');
  });

  // No-wrap test
  it('should apply the noWrap class when noWrap is true', () => {
    const testText = 'Title without line break';
    render(
      <Title {...mockTitleProps} noWrap>
        {testText}
      </Title>
    );
    const titleElement = screen.getByText(testText);
    
    expect(titleElement).toHaveClass('title--noWrap');
  });

  // Block test
  it('should apply the block class when block is true', () => {
    const testText = 'Block title';
    render(
      <Title {...mockTitleProps} block>
        {testText}
      </Title>
    );
    const titleElement = screen.getByText(testText);
    
    expect(titleElement).toHaveClass('title--block');
  });

  // Ref test
  it('should correctly assign the ref', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Title {...mockTitleProps} ref={ref} />);
    
    expect(ref.current).toBeInTheDocument();
    expect(ref.current?.tagName.toLowerCase()).toBe('h1');
  });
});
