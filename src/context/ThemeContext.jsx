import React, { createContext, useEffect, useState, useMemo } from 'react';
import { THEME_MODES, THEME_STORAGE_KEY } from '@/constants/theme';

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored && Object.values(THEME_MODES).includes(stored)) {
        return stored;
      }
    } catch (e) {
      console.warn('Error reading theme from localStorage', e);
    }
    return THEME_MODES.DARK;
  });

  const [resolvedTheme, setResolvedTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateResolvedTheme = () => {
      let isDark = false;
      if (theme === THEME_MODES.SYSTEM) {
        isDark = mediaQuery.matches;
      } else {
        isDark = theme === THEME_MODES.DARK;
      }

      setResolvedTheme(isDark ? 'dark' : 'light');

      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    updateResolvedTheme();

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {
      console.warn('Error saving theme to localStorage', e);
    }

    const handleChange = () => {
      if (theme === THEME_MODES.SYSTEM) {
        updateResolvedTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK));
  };

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      isDark: resolvedTheme === 'dark',
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
