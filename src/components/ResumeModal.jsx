import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  padding: 3rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${props => props.$primary ? ({ theme }) => theme.primary : 'transparent'};
  color: ${props => props.$primary ? 'white' : ({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  width: 200px;
  justify-content: center;
  cursor: pointer;
`;

const LoadingSpinner = styled(motion.div)`
  border: 3px solid ${({ theme }) => theme.background};
  border-top: 3px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 auto;
`;

const ResumeModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // Reset loading state after download starts
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </CloseButton>
            
            <Title>Resume Options</Title>
            
            <ButtonContainer>
              {isLoading ? (
                <LoadingSpinner
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <Button
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    $primary
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                  >
                    <span>👀</span> Open in New Tab
                  </Button>
                  
                  <Button
                    href="/resume.pdf"
                    download="Abhishek_Maurya_Resume.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                  >
                    <span>⬇️</span> Download Resume
                  </Button>
                </>
              )}
            </ButtonContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal; 