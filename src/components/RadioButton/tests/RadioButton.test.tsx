import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import RadioButton from '..';
import { ComponentSize } from '../../types';
import { defaultProps, disabledProps, customClassProps, withoutLabelProps } from './mocks';
import * as StoriesModule from '../stories/RadioButton.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const Checked = composeStory(StoriesModule.Checked, meta);
const Disabled = composeStory(StoriesModule.Disabled, meta);
const SmallSize = composeStory(StoriesModule.SmallSize, meta);
const LargeSize = composeStory(StoriesModule.LargeSize, meta);

describe('RadioButton', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: renders unchecked radio', async () => { await Default.run(); });
    test('Checked: radio is checked', async () => { await Checked.run(); });
    test('Disabled: radio is disabled', async () => { await Disabled.run(); });
    test('SmallSize: applies radioButton--small class', async () => { await SmallSize.run(); });
    test('LargeSize: applies radioButton--large class', async () => { await LargeSize.run(); });
  });

  describe('Unit', () => {
    it('calls onChange when clicked', () => {
      const handleChange = vi.fn();
      render(<RadioButton {...defaultProps} onChange={handleChange} />);
      fireEvent.click(screen.getByRole('radio'));
      expect(handleChange).toHaveBeenCalledWith(defaultProps.value);
    });

    it('does not call onChange when disabled', () => {
      const handleChange = vi.fn();
      render(<RadioButton {...disabledProps} onChange={handleChange} />);
      fireEvent.click(screen.getByRole('radio'));
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('renders without a label when not provided', () => {
      render(<RadioButton {...withoutLabelProps} />);
      expect(screen.queryByText(defaultProps.label as string)).not.toBeInTheDocument();
    });

    it('applies custom class combined with size', () => {
      const { container } = render(<RadioButton {...customClassProps} size={ComponentSize.SMALL} />);
      const root = container.firstChild as HTMLElement;
      expect(root).toHaveClass('custom-radio-class');
      expect(root).toHaveClass('radioButton--small');
    });
  });
});
