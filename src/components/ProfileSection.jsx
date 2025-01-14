import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ResumeModal from './ResumeModal';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const ProfileImage = styled(motion.div)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.primary};
  position: relative;
  cursor: pointer;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover {
    &::before {
      opacity: 0.2;
    }
    
    img {
      transform: scale(1.1);
    }
  }
`;

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ProfileContainer>
      <ProfileImage
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.05 }}
      >
        <img 
          src="https://via.placeholder.com/180x180" 
          alt="Abhishek Maurya" 
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/180x180";
          }}
        />
      </ProfileImage>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ProfileContainer>
  );
};

export default ProfileSection;