import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Message from '../index';
import type { MessageType } from '../types';
import styles from '../Message.module.scss';

describe('Message', () => {
  // Test cases for basic rendering
  it('should render correctly with default values', () => {
    const { container } = render(<Message>Default message</Message>);
    expect(container.firstChild).toHaveClass(styles.message, styles['message-info']);
    expect(screen.getByText('Default message')).toBeInTheDocument();
    // Verify that the icon container exists and has the correct class
    const iconContainer = container.querySelector(`.${styles.messageIcon}`);
    expect(iconContainer).toBeInTheDocument();
    // Verify that the Icon component is present (may not be a direct SVG)
    expect(iconContainer?.querySelector('i, svg, [role="img"]')).toBeInTheDocument();
  });

  // Test cases for different message types
  it.each([
    ['success', 'status'],
    ['info', 'status'],
    ['warning', 'alert'],
    ['danger', 'alert']
  ])('should apply the correct classes and roles for type %s', (type, role) => {
    const { container } = render(
      <Message type={type as MessageType}>{`${type} message`}</Message>
    );
    
    expect(container.firstChild).toHaveClass(styles[`message-${type}`]);
    expect(container.firstChild).toHaveAttribute('role', role);
    expect(container.firstChild).toHaveAttribute(
      'aria-live', 
      role === 'alert' ? 'assertive' : 'polite'
    );
  });

  // Test cases for the title
  it('should show the title when provided', () => {
    render(<Message title="Title">Message</Message>);
    expect(screen.getByText('Title')).toHaveClass(styles.messageTitle);
  });

  it('should not show the title when not provided', () => {
    render(<Message>Message without title</Message>);
    expect(screen.queryByTestId('message-title')).not.toBeInTheDocument();
  });

  // Test cases for customization
  it('should apply custom classes', () => {
    const { container } = render(
      <Message className="custom-class">Message</Message>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom styles', () => {
    const style = { color: 'red' };
    const { container } = render(
      <Message style={style}>Styled message</Message>
    );
    expect(container.firstChild).toHaveStyle('color: rgb(255, 0, 0)');
  });
  
  // Close functionality tests
  it('should show the close button when the closable property is true', () => {
    render(
      <Message closable>
        Closable message
      </Message>
    );
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', () => {
    const handleClose = vi.fn();
    
    render(
      <Message closable onClose={handleClose}>
        Message with close
      </Message>
    );
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should hide the message when clicking the close button', () => {
    const { container } = render(
      <Message closable>
        Closable message
      </Message>
    );
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it('should allow overriding the ARIA role', () => {
    const { getByRole } = render(
      <Message type="warning" role="alertdialog">
        Message with custom role
      </Message>
    );
    
    expect(getByRole('alertdialog')).toBeInTheDocument();
  });

  it('should accept React nodes as children', () => {
    render(
      <Message>
        <span>Message with </span>
        <strong>formatting</strong>
      </Message>
    );
    
    const strong = screen.getByText('formatting');
    expect(strong.tagName.toLowerCase()).toBe('strong');
  });

  it('allows passing additional HTML properties', () => {
    const { getByTestId } = render(
      <Message 
        type="info" 
        data-custom-attribute="custom-value"
        data-testid="custom-attributes"
      >
        Message with custom attributes
      </Message>
    );
    
    const message = getByTestId('custom-attributes');
    expect(message).toHaveAttribute('data-custom-attribute', 'custom-value');
  });
});
