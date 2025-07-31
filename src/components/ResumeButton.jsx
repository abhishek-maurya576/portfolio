import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ResumeModal from './ResumeModal';

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MainButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  letter-spacing: -0.01em;
  min-width: 160px;
  
  /* Glass morphism styling */
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.glass.border};
  box-shadow: ${({ theme }) => theme.shadows.glass.sm};
  
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.glass.backgroundStrong};
    border-color: ${({ theme }) => theme.glass.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.glass.md};
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px) scale(1.02);
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 180px;
  padding: ${({ theme }) => theme.spacing[2]} 0;
  margin-top: ${({ theme }) => theme.spacing[2]};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  display: ${props => props.$isOpen ? 'block' : 'none'};
  
  /* Enhanced glass morphism */
  background: ${({ theme }) => theme.glass.backgroundStrong};
  backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  border: 1px solid ${({ theme }) => theme.glass.borderStrong};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.glass.lg};

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 8px 8px 8px;
    border-style: solid;
    border-color: transparent transparent ${({ theme }) => theme.glass.backgroundStrong} transparent;
  }
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin: 0 ${({ theme }) => theme.spacing[2]};
  
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.glass.backgroundWeak};
    color: ${({ theme }) => theme.primary};
    transform: translateX(4px);
  }

  svg {
    width: 16px;
    height: 16px;
    opacity: 0.8;
  }
`;

const ResumeButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/portfolio/resume.pdf';
    link.download = 'Abhishek_Maurya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const handlePreview = () => {
    setShowModal(true);
    setIsOpen(false);
  };

  return (
    <ButtonContainer ref={dropdownRef}>
      <MainButton onClick={() => setIsOpen(!isOpen)}>
        Resume
      </MainButton>
      
      <DropdownContent $isOpen={isOpen}>
        <DropdownButton onClick={handlePreview}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Preview
        </DropdownButton>
        <DropdownButton onClick={handleDownload}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </DropdownButton>
      </DropdownContent>

      <ResumeModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </ButtonContainer>
  );
};

export default ResumeButton;
