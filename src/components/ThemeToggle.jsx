import styled from 'styled-components';
import { motion } from 'framer-motion';

const ToggleButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
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