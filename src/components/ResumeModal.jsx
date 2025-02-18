import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 1000px;
  height: 90vh;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  z-index: 1;
  
  &:hover {
    color: #1e88e5;
  }
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: calc(100% - 20px);
  border: none;
  border-radius: 8px;
`;

const ResumeModal = ({ isOpen, onClose }) => {
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
            onClick={e => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <PDFViewer
              src="/portfolio/resume.pdf"
              title="Resume Preview"
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;