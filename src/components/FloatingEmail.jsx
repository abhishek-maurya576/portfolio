import styled from 'styled-components';
import { motion } from 'framer-motion';

const EmailContainer = styled(motion.div)`
  position: fixed;
  right: 2rem;
  bottom: 0;
  z-index: 10;
  writing-mode: vertical-rl;

  @media (max-width: 768px) {
    display: none;
  }
`;

const EmailLink = styled(motion.a)`
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  letter-spacing: 0.1em;
  padding: 10px;
  
  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.secondary};
    margin-top: 20px;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FloatingEmail = () => {
  return (
    <EmailContainer
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <EmailLink
        href="mailto:abhishekmaurya9118@gmail.com"
        whileHover={{ y: -3 }}
      >
        abhishekmaurya9118@gmail.com
      </EmailLink>
    </EmailContainer>
  );
};

export default FloatingEmail; 