import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  background-image: ${({ theme }) => theme.gradients.mesh};
  background-attachment: fixed;
  background-size: 100% 100%;
`;

const SpinnerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Glass morphism background */
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.glass.xl};
  
  padding: ${({ theme }) => theme.spacing[12]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid transparent;
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-right: 4px solid ${({ theme }) => theme.accent};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid transparent;
    border-top: 2px solid ${({ theme }) => theme.primary}40;
    border-radius: 50%;
    animation: ${spin} 2s linear infinite reverse;
  }
`;

const LoadingText = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  letter-spacing: -0.01em;
  animation: ${pulse} 2s ease-in-out infinite;
  
  /* Gradient text */
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
    <LoadingText>Loading...</LoadingText>
  </SpinnerContainer>
);

export default LoadingSpinner; 