import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ErrorMessage = styled.h2`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorMessage>Something went wrong.</ErrorMessage>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 