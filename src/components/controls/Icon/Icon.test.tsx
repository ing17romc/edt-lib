import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from './index';

describe('Icon Component', () => {
  test('renders icon with correct name and size', () => {
    render(
      <Icon
        name="add"
        size="MD"
      />
    );

    const container = screen.getByRole('img', { name: /add/i });
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('container-icon');
    expect(container).toHaveClass('md');

    const icon = screen.getByText('add');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('material-icons');
  });

  test('renders icon with default size when not specified', () => {
    render(
      <Icon
        name="search"
      />
    );

    const container = screen.getByRole('img', { name: /search/i });
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('md');
  });

  test('renders icon with correct classes for different sizes', () => {
    render(
      <>
        <Icon name="edit" size="SM" />
        <Icon name="delete" size="MD" />
        <Icon name="info" size="LG" />
      </>
    );

    const smIcon = screen.getByRole('img', { name: /edit/i });
    const mdIcon = screen.getByRole('img', { name: /delete/i });
    const lgIcon = screen.getByRole('img', { name: /info/i });

    expect(smIcon).toHaveClass('sm');
    expect(mdIcon).toHaveClass('md');
    expect(lgIcon).toHaveClass('lg');
  });

  test('throws error when invalid icon name is provided', () => {
    const { container } = render(
      <Icon
        name="invalid-icon"
      />
    );

    expect(container).not.toHaveTextContent('invalid-icon');
  });
});
