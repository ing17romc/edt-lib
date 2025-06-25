import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextButton from '../index';
import { MOCK_ID, MOCK_TEXT, createMockProps, BUTTON_TYPES } from './mocks';

describe('TextButton Component', () => {
  const mockProps = createMockProps();

  describe('Rendering', () => {
    test('renders with required props', () => {
      render(
        <TextButton
          id={MOCK_ID}
          text={MOCK_TEXT}
        />
      );

      const button = screen.getByRole('button', { name: MOCK_TEXT });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('id', MOCK_ID);
      expect(button).toHaveTextContent(MOCK_TEXT);
    });

    test('has correct style classes', () => {
      const testCases = BUTTON_TYPES.map(type => ({
        type,
        expectedClass: `textButton ${type}`
      }));

      testCases.forEach(({ type, expectedClass }) => {
        const { getByRole, unmount } = render(
          <TextButton
            {...mockProps}
            type={type}
          />
        );
        const button = getByRole('button', { name: MOCK_TEXT });
        expect(button).toHaveClass(expectedClass);
        unmount();
      });
    });
  });

  describe('Interactions', () => {
    test('calls onClick when clicked', () => {
      render(
        <TextButton {...mockProps} />
      );

      const button = screen.getByRole('button', { name: MOCK_TEXT });
      fireEvent.click(button);
      expect(mockProps.onClick).toHaveBeenCalledTimes(1);
    });

    test('has correct type based on onClick prop', () => {
      const { getByRole, unmount } = render(
        <TextButton
          id={MOCK_ID}
          text={MOCK_TEXT}
          onClick={mockProps.onClick}
        />
      );
      const button = getByRole('button', { name: MOCK_TEXT });
      expect(button).toHaveAttribute('type', 'button');
      unmount();

      const { getByRole: getByRole2 } = render(
        <TextButton
          id={MOCK_ID}
          text={MOCK_TEXT}
        />
      );
      const submitButton = getByRole2('button', { name: MOCK_TEXT });
      expect(submitButton).toHaveAttribute('type', 'submit');
    });
  });

  describe('Accessibility', () => {
    test('is disabled when disabled prop is true', () => {
      render(
        <TextButton
          {...mockProps}
          disabled={true}
        />
      );

      const button = screen.getByRole('button', { name: MOCK_TEXT });
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });
  });
});
