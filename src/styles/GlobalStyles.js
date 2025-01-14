import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;
  }

  p {
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }

  ::selection {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

export default GlobalStyles;