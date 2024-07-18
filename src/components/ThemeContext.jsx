import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
export const ThemeContext = createContext();

// Custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Initial theme state

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  // Provide the current theme state and the toggle function to the entire app
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
