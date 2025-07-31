import styled from 'styled-components';
import { motion } from 'framer-motion';

const ToggleButton = styled(motion.button)`
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  
  /* Enhanced glass morphism */
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  border: 1px solid ${({ theme }) => theme.glass.border};
  box-shadow: ${({ theme }) => theme.shadows.glass.sm};
  
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }) => theme.glass.backgroundStrong};
    border-color: ${({ theme }) => theme.glass.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.glass.md};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const IconWrapper = styled(motion.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSize.lg};
  
  /* Add subtle glow effect */
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <ToggleButton
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <IconWrapper
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </IconWrapper>
    </ToggleButton>
  );
};

export default ThemeToggle; 