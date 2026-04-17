import React, {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import classNames from '../../utils/classNames';
import styles from './styles/ThemeProvider.module.scss';
import {
  ThemeContextValue,
  ThemeMode,
  ThemeName,
  ThemeProviderProps,
} from './types';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const isThemeMode = (value: string | null): value is ThemeMode =>
  value === 'light' || value === 'dark' || value === 'system';

const getSystemTheme = (): ThemeName => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }

  return window.matchMedia(DARK_MEDIA_QUERY).matches ? 'dark' : 'light';
};

export const ThemeProvider = ({
  children,
  className,
  defaultTheme = 'light',
  forcedTheme,
  enableSystem = true,
  storageKey = 'edt-lib-theme',
  ssrFallbackTheme = 'light',
  style,
  ...rest
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => forcedTheme ?? defaultTheme);
  const [systemTheme, setSystemTheme] = useState<ThemeName>(() => (
    typeof window === 'undefined' ? ssrFallbackTheme : getSystemTheme()
  ));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!forcedTheme) {
      const storedTheme = window.localStorage.getItem(storageKey);

      if (isThemeMode(storedTheme)) {
        startTransition(() => {
          setThemeState(storedTheme);
        });
      }
    }

    if (!enableSystem || typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia(DARK_MEDIA_QUERY);
    const handleChange = (event: MediaQueryListEvent) => {
      startTransition(() => {
        setSystemTheme(event.matches ? 'dark' : 'light');
      });
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [enableSystem, forcedTheme, storageKey]);

  useEffect(() => {
    if (forcedTheme) {
      startTransition(() => {
        setThemeState(forcedTheme);
      });
    }
  }, [forcedTheme]);

  useEffect(() => {
    if (forcedTheme || typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(storageKey, theme);
  }, [forcedTheme, storageKey, theme]);

  const resolvedTheme: ThemeName = forcedTheme
    ? forcedTheme
    : theme === 'system'
      ? (enableSystem ? systemTheme : ssrFallbackTheme)
      : theme;

  const contextValue = useMemo<ThemeContextValue>(() => ({
    theme: forcedTheme ?? theme,
    resolvedTheme,
    setTheme: (nextTheme: ThemeMode) => {
      if (forcedTheme) {
        return;
      }

      startTransition(() => {
        setThemeState(nextTheme);
      });
    },
  }), [forcedTheme, resolvedTheme, theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        data-theme={resolvedTheme}
        data-theme-mode={forcedTheme ?? theme}
        className={classNames(styles.themeProvider, className)}
        style={{ colorScheme: resolvedTheme, ...style }}
        {...rest}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider.');
  }

  return context;
};

export default ThemeProvider;
export type { ThemeContextValue, ThemeMode, ThemeName, ThemeProviderProps };
