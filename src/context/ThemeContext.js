'use client';
import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('dark');
  React.useEffect(() => {
    const localTheme = sessionStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    sessionStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
