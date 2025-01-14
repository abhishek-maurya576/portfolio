import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState, Suspense } from 'react';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollProgress from './components/ScrollProgress';
import ErrorBoundary from './components/ErrorBoundary';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { routes } from './routes';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
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