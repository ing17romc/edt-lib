import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Color from '../index';
import { mockColorGroups } from './mocks';

describe('Color', () => {
  it('renders correctly with default props', () => {
    render(<Color />);
    
    // Verify that group titles are rendered
    mockColorGroups.forEach(group => {
      expect(screen.getByText(group.title)).toBeInTheDocument();
    });
  });

  it('shows only font colors when showFontColors is true', () => {
    render(<Color showFontColors={true} showBackgroundColors={false} showScssVariables={false} />);
    
    // Verify that only the font colors group is shown
    expect(screen.getByText('Font color')).toBeInTheDocument();
    expect(screen.queryByText('Background color')).not.toBeInTheDocument();
    expect(screen.queryByText('SCSS color variables')).not.toBeInTheDocument();
    
    // Verify that font colors are shown
    mockColorGroups
      .find(group => group.type === 'font')
      ?.items.forEach(color => {
        expect(screen.getByText(color)).toBeInTheDocument();
      });
  });

  it('applies the custom class when provided', () => {
    const customClass = 'custom-color-palette';
    render(<Color className={customClass} />);
    
    const container = screen.getByTestId('color-palette');
    expect(container).toHaveClass(customClass);
  });

  it('does not render groups when all props are false', () => {
    render(<Color 
      showFontColors={false} 
      showBackgroundColors={false} 
      showScssVariables={false} 
    />);
    
    // Verify that no groups are rendered
    mockColorGroups.forEach(group => {
      expect(screen.queryByText(group.title)).not.toBeInTheDocument();
    });
  });

  it('matches the snapshot', () => {
    const { container } = render(<Color />);
    expect(container).toMatchSnapshot();
  });
});
