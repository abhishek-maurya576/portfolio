import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ResumeModal from './ResumeModal';
// Import a default profile picture (you can replace this with your actual profile picture)
import defaultProfilePic from '../assets/images/profile/profile.jpg';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 100%;
  max-width: 200px;
`;

const ProfileImage = styled(motion.div)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;
  cursor: pointer;
  
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
    z-index: 1;
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

const ProfileName = styled(motion.h3)`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

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
          src={imageError ? "https://via.placeholder.com/180x180?text=AM" : defaultProfilePic}
          alt="Abhishek Maurya" 
          onError={(e) => {
            setImageError(true);
            e.target.src = "https://via.placeholder.com/180x180?text=AM";
          }}
        />
      </ProfileImage>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </ProfileContainer>
  );
};

export default ProfileSection;