import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ResumeModal from './ResumeModal';

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MainButton = styled.button`
  padding: 12px 24px;
  background-color: transparent;
  color: #000;
  border: 2px solid #1e88e5;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1e88e5;
    color: white;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 8px 0;
  margin-top: 8px;
  z-index: 1000;
  display: ${props => props.$isOpen ? 'block' : 'none'};

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 8px 8px 8px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    width: 16px;
    height: 16px;
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
