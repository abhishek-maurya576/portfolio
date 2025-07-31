import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollProgress from './components/ScrollProgress';
import ErrorBoundary from './components/ErrorBoundary';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { routes } from './routes';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get theme from localStorage or default to false
    try {
      const savedTheme = localStorage.getItem('darkMode');
      return savedTheme ? JSON.parse(savedTheme) : false;
    } catch (error) {
      console.warn('Error reading theme from localStorage:', error);
      return false;
    }
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    try {
      localStorage.setItem('darkMode', JSON.stringify(newTheme));
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
  };

  // Add error logging for debugging
  useEffect(() => {
    const handleError = (event) => {
      console.error('Global error:', event.error);
    };

    const handleUnhandledRejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // Ensure theme object exists
  const currentTheme = isDarkMode ? theme.dark : theme.light;
  
  if (!currentTheme) {
    console.error('Theme not loaded properly');
    return <div>Loading theme...</div>;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <ScrollProgress />
        <BrowserRouter basename="/portfolio">
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;