import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;

const MenuItem = styled(motion.div)`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const MenuLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.secondary};
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileMenu = ({ isOpen, onClose }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <MenuOverlay
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="exit"
          onClick={onClose}
        >
          <MenuList>
            {['Home', 'About', 'Projects', 'Contact'].map((item, i) => (
              <MenuItem
                key={item}
                variants={itemVariants}
                custom={i}
                onClick={(e) => e.stopPropagation()}
              >
                <MenuLink to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={onClose}>
                  {item}
                </MenuLink>
              </MenuItem>
            ))}
          </MenuList>
          <SocialLinks>
            <SocialLink href="https://github.com/abhishek-maurya576" target="_blank">💻</SocialLink>
            <SocialLink href="https://linkedin.com/in/abhishekmaurya9118" target="_blank">👔</SocialLink>
            <SocialLink href="https://instagram.com/b_for_bca" target="_blank">📸</SocialLink>
            <SocialLink href="https://x.com/Abhishekm576" target="_blank">🐦</SocialLink>
            <SocialLink href="https://www.youtube.com/@bforbca" target="_blank">🎥</SocialLink>
          </SocialLinks>
        </MenuOverlay>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 