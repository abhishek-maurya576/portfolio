import { ThemeProvider } from 'styled-components';
import { useState, Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoadingSpinner from './components/LoadingSpinner';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        <GlobalStyles />
        <ScrollProgress />
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Suspense fallback={<LoadingSpinner />}>
          <Home />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;