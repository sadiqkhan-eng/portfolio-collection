'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeName, themes, themeOrder, applyTheme, getInitialTheme, Theme } from '@/lib/themes';

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  themes: typeof themeOrder;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('dark');
  const theme = themes[themeName];

  useEffect(() => {
    const initial = getInitialTheme();
    setThemeName(initial);
    applyTheme(themes[initial]);
  }, []);

  const setTheme = (name: ThemeName) => {
    setThemeName(name);
    applyTheme(themes[name]);
  };

  const toggleTheme = () => {
    const currentIndex = themeOrder.indexOf(themeName);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme, themes: themeOrder, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}