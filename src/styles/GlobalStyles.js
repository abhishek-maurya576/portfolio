import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import modern fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 1.6;
    letter-spacing: -0.01em;
    
    /* Enhanced background with mesh gradient */
    background: ${({ theme }) => theme.background};
    background-image: ${({ theme }) => theme.gradients.mesh};
    background-attachment: fixed;
    background-size: 100% 100%;
    
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    overflow-x: hidden;
    
    /* Smooth transitions */
    transition: all ${({ theme }) => theme.transitions.normal};
    
    /* Prevent horizontal scroll */
    max-width: 100vw;
  }

  /* Enhanced scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.glass.backgroundWeak};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.glass.background};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    backdrop-filter: ${({ theme }) => theme.glass.backdrop};
    border: 1px solid ${({ theme }) => theme.glass.border};
    
    &:hover {
      background: ${({ theme }) => theme.glass.backgroundStrong};
    }
  }

  /* Firefox scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.glass.background} ${({ theme }) => theme.glass.backgroundWeak};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      text-decoration: none;
    }
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.primary};
      outline-offset: 2px;
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    font-family: inherit;
    font-size: inherit;
    transition: all ${({ theme }) => theme.transitions.normal};
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.primary};
      outline-offset: 2px;
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }

  /* Enhanced Typography */
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    letter-spacing: -0.025em;
    transition: all ${({ theme }) => theme.transitions.normal};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize['5xl']};
    font-weight: 800;
    
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize['3xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize['2xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    font-weight: 600;
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 500;
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    transition: all ${({ theme }) => theme.transitions.normal};
    color: ${({ theme }) => theme.secondary};
    line-height: 1.7;
  }

  /* Enhanced selection */
  ::selection {
    background: ${({ theme }) => theme.primary};
    color: white;
    text-shadow: none;
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.primary};
    color: white;
    text-shadow: none;
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  /* Utility classes for glass morphism */
  .glass {
    background: ${({ theme }) => theme.glass.background};
    backdrop-filter: ${({ theme }) => theme.glass.backdrop};
    -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
    border: 1px solid ${({ theme }) => theme.glass.border};
    box-shadow: ${({ theme }) => theme.glass.shadow};
  }

  .glass-strong {
    background: ${({ theme }) => theme.glass.backgroundStrong};
    backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
    -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
    border: 1px solid ${({ theme }) => theme.glass.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.glass.lg};
  }

  .glass-weak {
    background: ${({ theme }) => theme.glass.backgroundWeak};
    backdrop-filter: ${({ theme }) => theme.glass.backdrop};
    -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
    border: 1px solid ${({ theme }) => theme.glass.border};
    box-shadow: ${({ theme }) => theme.shadows.glass.sm};
  }

  /* Animation utilities */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .animate-slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }

  .animate-scale-in {
    animation: scaleIn 0.4s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Responsive design helpers */
  @media (max-width: 640px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 13px;
    }
  }

  /* Reduce motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .glass,
    .glass-strong,
    .glass-weak {
      border-width: 2px;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }
  }
`;

export default GlobalStyles;