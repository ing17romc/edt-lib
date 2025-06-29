import React from 'react';
import { render, screen, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalHttpMessage from '../index';
import { mockProps, httpStatusTestCases, resetMocks } from './mocks';

describe('ModalHttpMessage Component', () => {
  afterEach(() => {
    resetMocks();
  });

  test('renders modal with HTTP message', async () => {
    await act(async () => {
      render(<ModalHttpMessage {...mockProps} />);
    });

    // Check for modal in the document body (portal)
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();

    // Check for title
    const titleElement = document.querySelector('.modal-body h4');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Mensaje HTTP');

    // Check for code
    const codeElement = document.querySelector('h1.code-two-hundred');
    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveTextContent(mockProps.code.toString());

    // Check for message
    const messageElement = screen.getByText(mockProps.message);
    expect(messageElement).toBeInTheDocument();

    // Check for details in textarea
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea).toBeInTheDocument();
    expect(textarea.value).toBe(mockProps.details);
  });

  test('renders with different HTTP status codes', async () => {
    for (const { code, className } of httpStatusTestCases) {
      await act(async () => {
        render(
          <ModalHttpMessage
            show={true}
            eventModal={mockProps.eventModal}
            code={code}
            title={`Status ${code}`}
            message={`Message for status ${code}`}
          />
        );
      });

      const codeElement = document.querySelector(`h1.${className}`);
      expect(codeElement).toBeInTheDocument();
      expect(codeElement).toHaveTextContent(code.toString());
      
      // Clean up after each test case
      cleanup();
    }
  });

  test('renders without details when not provided', async () => {
    await act(async () => {
      render(
        <ModalHttpMessage
          show={true}
          eventModal={mockProps.eventModal}
          code={mockProps.code}
          title={mockProps.title}
          message="Operación completada"
        />
      );
    });

    // The textarea should be empty when no details are provided
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe('');
  });

  test('has correct grid structure', async () => {
    await act(async () => {
      render(<ModalHttpMessage {...mockProps} />);
    });

    // Check for grid structure in the portal
    const gridPrimary = document.querySelector('.grid-primary');
    expect(gridPrimary).toBeInTheDocument();

    const gridSecondary = document.querySelector('.grid-secondary');
    expect(gridSecondary).toBeInTheDocument();

    const titleContainer = document.querySelector('.start-1.size-12');
    expect(titleContainer).toBeInTheDocument();

    const contentContainer = document.querySelector('.center.start-1.size-24');
    expect(contentContainer).toBeInTheDocument();
  });
});
