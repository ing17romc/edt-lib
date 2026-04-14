import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ThemeProvider, { useTheme } from '..';

const ThemeConsumer = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <span data-testid="theme-mode">{theme}</span>
      <span data-testid="resolved-theme">{resolvedTheme}</span>
      <button type="button" onClick={() => setTheme('dark')}>
        Enable dark
      </button>
    </>
  );
};

describe('ThemeProvider', () => {
  it('renders with the default light theme', () => {
    render(
      <ThemeProvider data-testid="theme-root">
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-root')).toHaveAttribute('data-theme', 'light');
    expect(screen.getByTestId('resolved-theme')).toHaveTextContent('light');
  });

  it('hydrates from localStorage when a saved theme exists', async () => {
    window.localStorage.setItem('edt-lib-theme', 'dark');

    render(
      <ThemeProvider data-testid="theme-root">
        <ThemeConsumer />
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('theme-root')).toHaveAttribute('data-theme', 'dark');
    });
  });

  it('updates and persists the selected theme', async () => {
    render(
      <ThemeProvider data-testid="theme-root">
        <ThemeConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Enable dark' }));

    await waitFor(() => {
      expect(screen.getByTestId('theme-root')).toHaveAttribute('data-theme', 'dark');
      expect(window.localStorage.setItem).toHaveBeenCalledWith('edt-lib-theme', 'dark');
    });
  });
});
