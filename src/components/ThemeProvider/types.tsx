import { HTMLAttributes, ReactNode } from 'react';

export type ThemeName = 'light' | 'dark';
export type ThemeMode = ThemeName | 'system';

export interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: ThemeName;
  setTheme: (theme: ThemeMode) => void;
}

export interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  defaultTheme?: ThemeMode;
  forcedTheme?: ThemeName;
  enableSystem?: boolean;
  storageKey?: string;
  ssrFallbackTheme?: ThemeName;
}
