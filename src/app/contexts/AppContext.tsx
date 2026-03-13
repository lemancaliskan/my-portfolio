import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * AppContext - Global state management for Leman Çalışkan's Portfolio Website
 * 
 * Manages:
 * - Language switching (EN/TR)
 * - Theme switching (Light/Dark)
 * 
 * Color Palette:
 * - Dark Mode: #2C0735 (Deepest Night Purple)
 * - Light Mode: #F1E9E9 (Off-white/Soft Grey)
 * - Primary: #613DC1 (Royal Purple)
 * - Secondary: #4E148C (Plum Purple)
 * - Accent: #97DFFC (Sky Blue), #858AE3 (Lavender)
 */

type Language = 'en' | 'tr';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Apply theme class to document
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, toggleTheme, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}