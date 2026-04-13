import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import { Selector } from '..';
import {
  mockOptions,
  defaultTestProps,
  mockErrorMessage,
  mockHelperText,
  mockPlaceholder,
} from './mocks';
import * as StoriesModule from '../stories/Selector.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const WithHelperText = composeStory(StoriesModule.WithHelperText, meta);
const ErrorState = composeStory(StoriesModule.ErrorState, meta);
const Disabled = composeStory(StoriesModule.Disabled, meta);
const Loading = composeStory(StoriesModule.Loading, meta);

describe('Selector Component', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: combobox and label are rendered', async () => { await Default.run(); });
    test('WithHelperText: helper text is shown', async () => { await WithHelperText.run(); });
    test('ErrorState: error class and message are applied', async () => { await ErrorState.run(); });
    test('Disabled: combobox is disabled', async () => { await Disabled.run(); });
    test('Loading: combobox is disabled with loading spinner', async () => { await Loading.run(); });
  });

  describe('Unit', () => {
    beforeEach(() => {
      (defaultTestProps.onChange as ReturnType<typeof vi.fn>).mockClear();
    });

    it('renders all options correctly', () => {
      render(<Selector {...defaultTestProps} />);
      mockOptions.forEach(option => {
        const optionElement = screen.getByRole('option', { name: option.label });
        expect(optionElement).toBeInTheDocument();
        if (option.disabled) {
          expect(optionElement).toBeDisabled();
        }
      });
    });

    it('handles selection change', () => {
      render(<Selector {...defaultTestProps} />);
      fireEvent.change(screen.getByRole('combobox'), { target: { value: '2' } });
      expect(defaultTestProps.onChange).toHaveBeenCalledTimes(1);
      expect(screen.getByRole('combobox')).toHaveValue('2');
    });

    it('accepts a default value', () => {
      render(<Selector {...defaultTestProps} defaultValue="2" />);
      expect(screen.getByRole('combobox')).toHaveValue('2');
    });

    it('accepts a controlled value', () => {
      render(<Selector {...defaultTestProps} value="3" readOnly />);
      expect(screen.getByRole('combobox')).toHaveValue('3');
    });

    it('shows the placeholder when provided', () => {
      render(<Selector {...defaultTestProps} placeholder={mockPlaceholder} />);
      const option = screen.getByRole('option', { name: mockPlaceholder });
      expect(option).toHaveValue('');
      expect(option).toBeDisabled();
    });

    it('shows helper text when provided', () => {
      render(<Selector {...defaultTestProps} helperText={mockHelperText} />);
      expect(screen.getByText(mockHelperText)).toBeInTheDocument();
    });

    it('shows error state when error is true', () => {
      render(<Selector {...defaultTestProps} error errorMessage={mockErrorMessage} />);
      expect(screen.getByRole('combobox')).toHaveClass('selector--error');
      expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
    });
  });
});

