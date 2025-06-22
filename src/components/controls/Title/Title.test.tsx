import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './index';

describe('Title component', () => {
  test('renders with default level (h1)', () => {
    render(<Title>Test Title</Title>);
    const heading = screen.getByText('Test Title');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('title', 'title--level-1');
    expect(heading).toBeVisible();
  });

  test('supports different heading levels', () => {
    render(<Title level={2}>Test Title</Title>);
    const heading = screen.getByText('Test Title');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('title', 'title--level-2');
    expect(heading).toBeVisible();
  });

  test('accepts custom className', () => {
    render(<Title className="custom-class">Test Title</Title>);
    const heading = screen.getByText('Test Title');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('custom-class');
    expect(heading).toBeVisible();
  });

  test('accepts inline style', () => {
    const style = { color: 'red', fontSize: '2rem' };
    render(<Title style={style}>Test Title</Title>);
    const heading = screen.getByText('Test Title');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: 'rgb(255, 0, 0)',
      fontSize: '2rem'
    });
    expect(heading).toBeVisible();
  });
});
