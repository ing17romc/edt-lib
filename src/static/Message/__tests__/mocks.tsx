import React from 'react';
import type { MessageType, MessageProps } from '../types';

/**
 * Available message types for testing
 */
export const messageTypes: MessageType[] = ['success', 'info', 'warning', 'danger'];

/**
 * Sample data for Message component tests
 */
export const mockMessages: Array<{
  type: MessageType;
  title: string;
  content: string;
}> = [
  {
    type: 'success',
    title: 'Operation successful!',
    content: 'Changes have been saved correctly.',
  },
  {
    type: 'info',
    title: 'Important information',
    content: 'This is an informational message for the user.',
  },
  {
    type: 'warning',
    title: 'Warning',
    content: 'This action cannot be undone.',
  },
  {
    type: 'danger',
    title: 'Error',
    content: 'An error occurred while processing the request.',
  },
];

/**
 * Default props for the Message component in tests
 */
export const defaultProps: MessageProps = {
  type: 'info',
  children: 'Test message',
};

/**
 * Function to generate custom props for tests
 */
export const createTestProps = (
  customProps: Partial<MessageProps> = {}
): MessageProps => ({
  ...defaultProps,
  'data-testid': 'test-message',
  ...customProps,
});

/**
 * Mock for the onClose function
 */
export const mockOnClose = vi.fn();

/**
 * Data to test the component with different prop combinations
 */
export const testCases = [
  // Basic case without title
  {
    name: 'without title',
    props: {
      children: 'Message without title',
    },
  },
  // Case with title
  {
    name: 'with title',
    props: {
      title: 'Message title',
      children: 'Message content',
    },
  },
  // Case with close
  {
    name: 'with close',
    props: {
      closable: true,
      onClose: vi.fn(), // Replaced by a Vitest mock
      children: 'Closable message',
    },
  },
  // Case with HTML in children
  {
    name: 'with HTML in children',
    props: {
      children: (
        <React.Fragment>
          <span>Text in </span>
          <strong>bold</strong>
          <span> and more text</span>
        </React.Fragment>
      ),
    },
  },
];

/**
 * Mock of CSS classes for tests
 */
export const mockStyles = {
  message: 'message',
  'message-success': 'message-success',
  'message-info': 'message-info',
  'message-warning': 'message-warning',
  'message-danger': 'message-danger',
};
