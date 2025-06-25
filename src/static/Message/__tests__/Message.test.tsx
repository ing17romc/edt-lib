import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from '../index';
import { mockMessages } from './mocks';

describe('Message', () => {
  it('renders all message types with correct content', () => {
    render(<Message />);
    
    // Check each message type is rendered with correct content
    mockMessages.forEach(({ title, content }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  it('applies correct CSS classes to each message type', () => {
    const { container } = render(<Message />);
    
    // Check each message has the correct class
    mockMessages.forEach(({ className }) => {
      const messageElement = container.querySelector(`.${className}`);
      expect(messageElement).toBeInTheDocument();
      expect(messageElement).toHaveClass('message', className);
    });
  });
});
