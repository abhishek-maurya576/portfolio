import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  /* Enhanced glass morphism */
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  border-top: 1px solid ${({ theme }) => theme.glass.border};
  box-shadow: ${({ theme }) => theme.shadows.glass.lg};
  
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[8]};
  margin-top: ${({ theme }) => theme.spacing[24]};
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.docked};
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[4]};
    margin-top: ${({ theme }) => theme.spacing[16]};
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing[12]};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[8]};
    padding: 0;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  letter-spacing: -0.02em;
  
  /* Enhanced gradient text */
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  
  /* Glass morphism background */
  background: ${({ theme }) => theme.glass.backgroundWeak};
  backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  border: 1px solid ${({ theme }) => theme.glass.border};
  box-shadow: ${({ theme }) => theme.shadows.glass.sm};
  
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.glass.background};
    border-color: ${({ theme }) => theme.glass.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.glass.md};
    transform: translateY(-4px) scale(1.05);
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.secondary};
  line-height: 1.8;
  font-size: ${({ theme }) => theme.fontSize.base};
  opacity: 0.9;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing[16]};
  padding-top: ${({ theme }) => theme.spacing[8]};
  border-top: 1px solid ${({ theme }) => theme.glass.border};
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  opacity: 0.8;
  letter-spacing: 0.02em;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Me</FooterTitle>
          <FooterText>
            A passionate Android Developer and Web Developer, creating innovative solutions 
            and exploring cutting-edge technologies to build better digital experiences.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterText>
            • Projects<br />
            • Skills<br />
            • Blog<br />
            • Contact
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <SocialLinks>
            <SocialLink 
              href="https://github.com/abhishek-maurya576" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/abhishekmaurya9118/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink 
              href="https://x.com/Abhishekm576" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaTwitter />
            </SocialLink>
            <SocialLink 
              href="mailto:maury972137@gmail.com"
              whileHover={{ y: -5 }}
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {currentYear} Abhishek Maurya. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 