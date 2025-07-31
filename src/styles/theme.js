const commonTheme = {
  // Enhanced Typography Scale
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
  
  // Enhanced Spacing System
  spacing: {
    px: '1px',
    0.5: '0.125rem',    // 2px
    1: '0.25rem',       // 4px
    1.5: '0.375rem',    // 6px
    2: '0.5rem',        // 8px
    2.5: '0.625rem',    // 10px
    3: '0.75rem',       // 12px
    3.5: '0.875rem',    // 14px
    4: '1rem',          // 16px
    5: '1.25rem',       // 20px
    6: '1.5rem',        // 24px
    7: '1.75rem',       // 28px
    8: '2rem',          // 32px
    9: '2.25rem',       // 36px
    10: '2.5rem',       // 40px
    11: '2.75rem',      // 44px
    12: '3rem',         // 48px
    14: '3.5rem',       // 56px
    16: '4rem',         // 64px
    20: '5rem',         // 80px
    24: '6rem',         // 96px
    28: '7rem',         // 112px
    32: '8rem',         // 128px
  },
  
  // Enhanced Border Radius System
  borderRadius: {
    none: '0',
    sm: '0.125rem',     // 2px
    base: '0.25rem',    // 4px
    md: '0.375rem',     // 6px
    lg: '0.5rem',       // 8px
    xl: '0.75rem',      // 12px
    '2xl': '1rem',      // 16px
    '3xl': '1.5rem',    // 24px
    '4xl': '2rem',      // 32px
    full: '9999px',
  },
  
  // Enhanced Shadow System
  shadows: {
    // Glass morphism shadows
    glass: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.08)',
      md: '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.12)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.16)',
      xl: '0 16px 64px rgba(0, 0, 0, 0.16), 0 8px 32px rgba(0, 0, 0, 0.20)',
    },
    // Colored shadows
    colored: {
      primary: '0 8px 32px rgba(99, 102, 241, 0.24)',
      accent: '0 8px 32px rgba(59, 130, 246, 0.24)',
      success: '0 8px 32px rgba(34, 197, 94, 0.24)',
      warning: '0 8px 32px rgba(251, 191, 36, 0.24)',
      error: '0 8px 32px rgba(239, 68, 68, 0.24)',
    },
    // Inner shadows for depth
    inner: {
      sm: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)',
      md: 'inset 0 2px 4px rgba(0, 0, 0, 0.08)',
      lg: 'inset 0 4px 8px rgba(0, 0, 0, 0.12)',
    }
  },
  
  // Animation & Transitions
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Z-index scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  }
};

const theme = {
  light: {
    ...commonTheme,
    // Enhanced Gradient Color Palette
    colors: {
      // Primary gradient system
      primary: {
        50: '#f0f4ff',
        100: '#e0e9ff',
        200: '#c7d6fe',
        300: '#a5b8fc',
        400: '#8b93f8',
        500: '#6366f1',   // Main primary
        600: '#5b52e7',
        700: '#4c46d3',
        800: '#413ba8',
        900: '#3a3485',
      },
      
      // Accent gradient system
      accent: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',   // Main accent
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      
      // Neutral system for glass morphism
      neutral: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      
      // Status colors
      success: {
        50: '#f0fdf4',
        500: '#22c55e',
        600: '#16a34a',
      },
      warning: {
        50: '#fffbeb',
        500: '#f59e0b',
        600: '#d97706',
      },
      error: {
        50: '#fef2f2',
        500: '#ef4444',
        600: '#dc2626',
      },
      info: {
        50: '#f0f9ff',
        500: '#06b6d4',
        600: '#0891b2',
      }
    },
    
    // Legacy support (keeping existing properties)
    primary: '#6366f1',
    accent: '#3b82f6',
    text: '#1f2937',
    background: '#ffffff',
    backgroundRgba: '255, 255, 255',
    secondary: '#6b7280',
    cardBg: 'rgba(255, 255, 255, 0.7)',
    error: '#ef4444',
    success: '#22c55e',
    warning: '#f59e0b',
    info: '#06b6d4',
    shadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
    
    // Glass morphism specific
    glass: {
      background: 'rgba(255, 255, 255, 0.25)',
      backgroundStrong: 'rgba(255, 255, 255, 0.4)',
      backgroundWeak: 'rgba(255, 255, 255, 0.1)',
      border: 'rgba(255, 255, 255, 0.18)',
      borderStrong: 'rgba(255, 255, 255, 0.3)',
      shadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
      backdrop: 'blur(8px)',
      backdropStrong: 'blur(16px)',
    },
    
    // Gradient definitions
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      accent: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      card: 'linear-gradient(145deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
      text: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      button: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      mesh: 'radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
    }
  },
  
  dark: {
    ...commonTheme,
    // Enhanced Gradient Color Palette for Dark Mode
    colors: {
      // Primary gradient system (adjusted for dark)
      primary: {
        50: '#1e1b4b',
        100: '#312e81',
        200: '#3730a3',
        300: '#4338ca',
        400: '#5b21b6',
        500: '#7c3aed',   // Main primary
        600: '#8b5cf6',
        700: '#a78bfa',
        800: '#c4b5fd',
        900: '#e9d5ff',
      },
      
      // Accent gradient system (adjusted for dark)
      accent: {
        50: '#0c4a6e',
        100: '#075985',
        200: '#0369a1',
        300: '#0284c7',
        400: '#0ea5e9',
        500: '#38bdf8',   // Main accent
        600: '#7dd3fc',
        700: '#a7f3d0',
        800: '#bae6fd',
        900: '#e0f2fe',
      },
      
      // Neutral system for dark glass morphism
      neutral: {
        50: '#0a0a0a',
        100: '#171717',
        200: '#262626',
        300: '#404040',
        400: '#525252',
        500: '#737373',
        600: '#a3a3a3',
        700: '#d4d4d4',
        800: '#e5e5e5',
        900: '#f5f5f5',
      },
      
      // Status colors (dark mode adjusted)
      success: {
        50: '#064e3b',
        500: '#10b981',
        600: '#059669',
      },
      warning: {
        50: '#451a03',
        500: '#f59e0b',
        600: '#d97706',
      },
      error: {
        50: '#7f1d1d',
        500: '#f87171',
        600: '#ef4444',
      },
      info: {
        50: '#164e63',
        500: '#22d3ee',
        600: '#06b6d4',
      }
    },
    
    // Legacy support (keeping existing properties)
    primary: '#7c3aed',
    accent: '#38bdf8',
    text: '#f9fafb',
    background: '#0f0f23',
    backgroundRgba: '15, 15, 35',
    secondary: '#9ca3af',
    cardBg: 'rgba(15, 15, 35, 0.7)',
    error: '#f87171',
    success: '#10b981',
    warning: '#fbbf24',
    info: '#22d3ee',
    shadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
    
    // Glass morphism specific for dark mode
    glass: {
      background: 'rgba(15, 15, 35, 0.25)',
      backgroundStrong: 'rgba(15, 15, 35, 0.4)',
      backgroundWeak: 'rgba(15, 15, 35, 0.1)',
      border: 'rgba(255, 255, 255, 0.1)',
      borderStrong: 'rgba(255, 255, 255, 0.2)',
      shadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
      backdrop: 'blur(8px)',
      backdropStrong: 'blur(16px)',
    },
    
    // Gradient definitions for dark mode
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      accent: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      card: 'linear-gradient(145deg, rgba(15,15,35,0.25) 0%, rgba(15,15,35,0.1) 100%)',
      text: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
      button: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
      mesh: 'radial-gradient(at 40% 20%, hsla(28,100%,74%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.2) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,0.3) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,0.2) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,0.3) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,0.2) 0px, transparent 50%)',
    }
  }
};

export default theme;