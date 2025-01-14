const commonTheme = {
  fontSize: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '3rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%',
  }
};

const theme = {
  light: {
    ...commonTheme,
    primary: '#4169E1',
    accent: '#00A3FF',
    text: '#333333',
    background: '#FFFFFF',
    backgroundRgba: '255, 255, 255',
    secondary: '#666666',
    cardBg: '#F5F5F5',
    error: '#FF4444',
    success: '#00C851',
    warning: '#FFBB33',
    info: '#33B5E5',
    shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  dark: {
    ...commonTheme,
    primary: '#4169E1',
    accent: '#00A3FF',
    text: '#FFFFFF',
    background: '#0A0A0A',
    backgroundRgba: '10, 10, 10',
    secondary: '#B3B3B3',
    cardBg: '#1A1A1A',
    error: '#FF4444',
    success: '#00C851',
    warning: '#FFBB33',
    info: '#33B5E5',
    shadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  }
};

export default theme;