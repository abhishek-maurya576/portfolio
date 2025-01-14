import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.2)`};
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 2rem;
  margin-top: 6rem;
  position: relative;
  z-index: 10;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 0 1rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.text};
  line-height: 1.8;
  font-size: 1.1rem;
  opacity: 0.9;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  opacity: 0.8;
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