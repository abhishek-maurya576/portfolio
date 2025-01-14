import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
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
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme, $isActive }) => $isActive ? theme.primary : theme.text};
  text-decoration: none;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '400'};
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $isActive }) => $isActive ? '100%' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    &::after {
      width: 100%;
    }
  }
`;

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const location = useLocation();

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo to="/">My Portfolio</Logo>
      <NavLinks>
        <NavLink to="/about" $isActive={location.pathname === '/about'}>About</NavLink>
        <NavLink to="/projects" $isActive={location.pathname === '/projects'}>Projects</NavLink>
        <NavLink to="/contact" $isActive={location.pathname === '/contact'}>Contact</NavLink>
        <NavLink to="/blog" $isActive={location.pathname === '/blog'}>Blog</NavLink>
      </NavLinks>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </Nav>
  );
};

export default Navbar;