import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './index';

describe('Footer Component', () => {
  test('renders with children content', () => {
    const childrenContent = <p>Footer content</p>;
    const { getByText } = render(
      <Footer>
        {childrenContent}
      </Footer>
    );

    expect(getByText('Footer content')).toBeInTheDocument();
  });

  test('has correct className', () => {
    const { container } = render(
      <Footer>
        <p>Test content</p>
      </Footer>
    );

    const footerElement = container.querySelector('.layout__footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('has correct ARIA role', () => {
    const { container } = render(
      <Footer>
        <p>Test content</p>
      </Footer>
    );

    const footerElement = container.querySelector('[role="contentinfo"]');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders multiple children', () => {
    const { getByText } = render(
      <Footer>
        <p>First paragraph</p>
        <p>Second paragraph</p>
      </Footer>
    );

    expect(getByText('First paragraph')).toBeInTheDocument();
    expect(getByText('Second paragraph')).toBeInTheDocument();
  });

  test('renders empty content', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
