import React from 'react';
import { ThemeProvider } from './ThemeContext'; // Adjust the path as necessary
import Navbar from './Navbar'; // Assuming your Navbar component is in a separate file

function App() {
  return (
    <ThemeProvider>
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        <Navbar />
        {/* Other components and content */}
      </div>
    </ThemeProvider>
  );
}

export default App;
