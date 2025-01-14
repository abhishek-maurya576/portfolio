import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.8)`};
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo to="/">My Portfolio</Logo>
      <NavLinks>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </NavLinks>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </Nav>
  );
};

export default Navbar;