import styled from 'styled-components';
import { motion } from 'framer-motion';

const SocialContainer = styled(motion.div)`
  position: fixed;
  left: 2rem;
  bottom: 0;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  
  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const SocialLink = styled(motion.a)`
  display: inline-block;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.secondary};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const FloatingSocial = () => {
  const socialLinks = [
    { icon: '💻', url: 'https://github.com/abhishek-maurya576' },
    { icon: '👔', url: 'https://linkedin.com/in/abhishekmaurya9118' },
    { icon: '📸', url: 'https://instagram.com/b_for_bca' },
  ];

  return (
    <SocialContainer
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <SocialList>
        {socialLinks.map((link, index) => (
          <motion.li
            key={link.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
          >
            <SocialLink
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </SocialLink>
          </motion.li>
        ))}
      </SocialList>
    </SocialContainer>
  );
};

export default FloatingSocial; 