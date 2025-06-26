import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Selector from '../index';
import {
  mockId,
  mockTitleTop,
  mockTitleBottom,
  mockOptions,
  mockProps
} from './mocks';

describe('Selector Component', () => {

  test('renders with required props', () => {
    render(
      <Selector
        id={mockId}
        value=""
        options={mockOptions}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('id', mockId);
  });

  test('renders with titles', () => {
    render(
      <Selector {...mockProps} />
    );

    const titleTop = screen.getByText(mockTitleTop);
    expect(titleTop).toBeInTheDocument();

    const titleBottom = screen.getByText(mockTitleBottom);
    expect(titleBottom).toBeInTheDocument();
  });

  test('calls eventChange when option is selected', () => {
    const mockEventChange = jest.fn();

    render(
      <Selector
        {...mockProps}
        eventChange={mockEventChange}
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option3' } });
    expect(mockEventChange).toHaveBeenCalledTimes(1);
  });

  test('handles disabled state', () => {
    render(
      <Selector
        {...mockProps}
        disabled={true}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toHaveAttribute('aria-disabled', 'true');
    expect(select).toHaveClass('DISABLED');
  });

  test('handles read-only state', () => {
    render(
      <Selector
        {...mockProps}
        readOnly={true}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toHaveAttribute('aria-readonly', 'true');
    expect(select).toHaveClass('READ_ONLY');
  });

  test('handles required state', () => {
    render(
      <Selector
        {...mockProps}
        required={true}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeRequired();
    expect(select).toHaveAttribute('aria-required', 'true');
  });

  test('renders options correctly', () => {
    render(
      <Selector {...mockProps} />
    );

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(mockOptions.length);

    mockOptions.forEach((option, index) => {
      expect(options[index]).toHaveValue(option.value);
      expect(options[index]).toHaveTextContent(option.label);
    });
  });

  test('has correct aria-label', () => {
    render(
      <Selector
        {...mockProps}
        titleTop={'Selector de opciones'}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-label', 'Selector de opciones');
  });
});
