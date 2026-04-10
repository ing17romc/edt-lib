import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Typography from '../index';
import { sampleText, fontSizes, lineHeightTypes } from './mocks';

describe('Typography', () => {
  it('renders the component correctly with default props', () => {
    render(<Typography />);
    
    // Verify that the main container is rendered
    const container = screen.getByTestId('typography-container');
    expect(container).toBeInTheDocument();
    
    // Verify that the default class is present
    expect(container).toHaveClass('typographyContainer');
  });

  it('applies the custom class when provided', () => {
    const customClass = 'custom-typography';
    render(<Typography className={customClass} />);
    
    const container = screen.getByTestId('typography-container');
    expect(container).toHaveClass('typographyContainer', customClass);
  });

  it('renders all headings (h1-h6)', () => {
    render(<Typography />);
    
    // Verify that section titles are rendered
    expect(screen.getByText('Headings')).toBeInTheDocument();
    expect(screen.getByText('Paragraphs')).toBeInTheDocument();
    
    // Verify that the headings are rendered
    const headings = screen.getAllByRole('heading');
    // 2 titles (Headings, Paragraphs) + 6 headings (h1-h6) + 1 subtitle (Line Height Examples)
    expect(headings).toHaveLength(9);
    
    // Verify that headings are rendered with the corresponding data-testids
    expect(screen.getByTestId('heading-1')).toHaveTextContent('<h1>Heading 1</h1>');
    expect(screen.getByTestId('heading-6')).toHaveTextContent('<h6>Heading 6</h6>');
  });

  it('renders all defined paragraph sizes', () => {
    render(<Typography />);
    
    // Verify that all font sizes are rendered
    fontSizes.forEach(size => {
      const regex = new RegExp(`<p class=".*size-${size}.*">`, 'i');
      const elements = screen.getAllByText(regex);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('renders the sample text in the main paragraph', () => {
    render(<Typography />);
    
    // Verify that the sample text is displayed in the main paragraph
    const paragraphs = screen.getAllByText(sampleText);
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  it('renders line height examples when showCodeExamples is true', () => {
    render(<Typography showCodeExamples={true} />);
    
    // Verify that the line height examples section is rendered
    expect(screen.getByText('Line Height Examples')).toBeInTheDocument();
    
    // Verify that the line height examples are rendered
    lineHeightTypes.forEach(type => {
      const regex = new RegExp(`line-height-${type}`, 'i');
      const elements = screen.getAllByText(regex);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('does not render code examples when showCodeExamples is false', () => {
    render(<Typography showCodeExamples={false} />);
    
    // Verify that code examples are not rendered
    const codeExamples = screen.queryAllByTestId('code-example');
    expect(codeExamples).toHaveLength(0);
  });
});
