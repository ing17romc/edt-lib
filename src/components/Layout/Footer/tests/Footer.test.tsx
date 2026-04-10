import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../index';
import { MockFooterContent } from './mocks';

describe('Footer', () => {
  it('should render the footer with content', () => {
    render(
      <Footer>
        <MockFooterContent />
      </Footer>
    );

    expect(screen.getByText('Useful links')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Email: info@example.com')).toBeInTheDocument();
  });
});