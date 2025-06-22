import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import  ModalHttpMessage  from './index';

describe('ModalHttpMessage Component', () => {
  const mockEventModal = jest.fn();

  const mockProps = {
    show: true,
    eventModal: mockEventModal,
    code: 200,
    title: 'Éxito',
    message: 'Operación completada con éxito',
    details: 'Detalles adicionales de la operación'
  };

  test('renders modal with HTTP message', () => {
    render(
      <ModalHttpMessage {...mockProps} />
    );

    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();

    const titleElement = screen.getByText('Mensaje HTTP');
    expect(titleElement).toBeInTheDocument();

    const codeElement = screen.getByText('200');
    expect(codeElement).toBeInTheDocument();
    expect(codeElement).toHaveClass('code-two-hundred');

    const messageElement = screen.getByText(mockProps.message);
    expect(messageElement).toBeInTheDocument();

    const detailsElement = screen.getByText(mockProps.details);
    expect(detailsElement).toBeInTheDocument();
  });

  test('renders with different HTTP status codes', () => {
    const testCases = [
      { code: 199, className: 'code-one-hundred' },
      { code: 200, className: 'code-two-hundred' },
      { code: 300, className: 'code-three-hundred' },
      { code: 400, className: 'code-four-hundred' },
      { code: 500, className: 'code-five-hundred' }
    ];

    testCases.forEach(({ code, className }) => {
      render(
        <ModalHttpMessage
          show={true}
          eventModal={mockEventModal}
          code={code}
          title={`Status ${code}`}
          message={`Message for status ${code}`}
        />
      );

      const codeElement = screen.getByText(code.toString());
      expect(codeElement).toBeInTheDocument();
      expect(codeElement).toHaveClass(className);
    });
  });

  test('renders without details when not provided', () => {
    render(
      <ModalHttpMessage
        show={true}
        eventModal={mockEventModal}
        code={200}
        title="Éxito"
        message="Operación completada"
      />
    );

    const detailsElement = screen.queryByText('Detalles adicionales');
    expect(detailsElement).not.toBeInTheDocument();
  });

  test('has correct grid structure', () => {
    const { container } = render(
      <ModalHttpMessage {...mockProps} />
    );

    const gridPrimary = container.querySelector('.grid-primary');
    expect(gridPrimary).toBeInTheDocument();

    const gridSecondary = container.querySelector('.grid-secondary');
    expect(gridSecondary).toBeInTheDocument();

    const titleContainer = container.querySelector('.start-1.size-12');
    expect(titleContainer).toBeInTheDocument();

    const contentContainer = container.querySelector('.center.start-1.size-24');
    expect(contentContainer).toBeInTheDocument();
  });
});
