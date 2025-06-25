import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Typography from '../index';
import { mockTypographyProps } from './mocks';

describe('Typography', () => {
  it('renderiza los headings correctamente', () => {
    render(<Typography {...mockTypographyProps} />);
    expect(screen.getAllByRole('heading')).toHaveLength(8); // h1 (Headings), h1 (<h1>), h2, h3, h4, h5, h6, h1 (Paragraphs)
    expect(screen.getByText('Headings')).toBeInTheDocument();
    expect(screen.getByText('<h1></h1>')).toBeInTheDocument();
    expect(screen.getByText('<h6></h6>')).toBeInTheDocument();
  });

  it('renderiza los párrafos con clases', () => {
    render(<Typography {...mockTypographyProps} />);
    expect(screen.getByText((content) => content.includes('<p className="font-22"></p>'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('<p className="font-22 line-spacing">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>'))).toBeInTheDocument();
  });
});
