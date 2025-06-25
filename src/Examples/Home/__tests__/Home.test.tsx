import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from "../index.js";
import type { HomeProps, Option } from '../types';

// Mock data for testing
const MOCK_LEFT_OPTIONS: Option[] = [
  { path: '/forms', name: 'Formularios', icon: 'list' },
  { path: '/modals', name: 'Modales', icon: 'list' },
  { path: '/icons', name: 'Iconos', icon: 'list' },
  { path: '/controls', name: 'Controles', icon: 'list' },
  { path: '/camera', name: 'Camera', icon: 'list' },
  { path: '/tables', name: 'Tables', icon: 'list' },
];

const MOCK_RIGHT_OPTIONS: Option[] = [
  { path: '/settings', name: 'Settings' },
  { path: '/profile', name: 'Profile' },
];

const renderHome = (props: Partial<HomeProps> = {}) => {
  const defaultProps: HomeProps = {
    leftOptions: MOCK_LEFT_OPTIONS,
    rightOptions: MOCK_RIGHT_OPTIONS,
    currentPath: '/forms',
    getCurrentPath: jest.fn(),
    footer: <div>Test Footer</div>,
    ...props,
  };
  return render(<Home {...defaultProps} />);
};

describe('Home', () => {
  it('renders left navigation options', () => {
    renderHome();
    MOCK_LEFT_OPTIONS.forEach(option => {
      expect(screen.getByRole('button', { name: option.name })).toBeInTheDocument();
    });
  });

  it('renders right navigation options', () => {
    renderHome();
    MOCK_RIGHT_OPTIONS.forEach(option => {
      expect(screen.getByRole('button', { name: option.name })).toBeInTheDocument();
    });
  });

  it('renders footer when provided', () => {
    const footerText = 'Test Footer';
    renderHome({ footer: <div>{footerText}</div> });
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });

  it('calls getCurrentPath when a navigation option is clicked', () => {
    const mockGetCurrentPath = jest.fn();
    renderHome({ getCurrentPath: mockGetCurrentPath });
    
    const firstOption = screen.getByRole('button', { name: MOCK_LEFT_OPTIONS[0].name });
    fireEvent.click(firstOption);
    
    expect(mockGetCurrentPath).toHaveBeenCalledWith(MOCK_LEFT_OPTIONS[0].path);
  });

  it('highlights the current path in navigation', () => {
    const currentPath = MOCK_LEFT_OPTIONS[1].path;
    const { container } = renderHome({ currentPath });
    
    // Debug output to see what's being rendered
    console.log('Rendered HTML:', container.innerHTML);
    
    // Get all buttons to see their props
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn, idx) => {
      console.log(`Button ${idx}:`, {
        text: btn.textContent,
        className: btn.className,
        'aria-current': btn.getAttribute('aria-current'),
        'data-testid': btn.getAttribute('data-testid')
      });
    });
    
    // Try to find the button with the expected name
    const currentOption = screen.getByRole('button', { name: MOCK_LEFT_OPTIONS[1].name });
    
    // Check if the button has the active class
    expect(currentOption).toHaveClass('active');
    
    // Also check for aria-current attribute which should be 'page' for the active item
    expect(currentOption).toHaveAttribute('aria-current', 'page');
  });
});
