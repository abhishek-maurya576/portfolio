import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing[8]};
  
  /* Enhanced glass morphism */
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  border-bottom: 1px solid ${({ theme }) => theme.glass.border};
  box-shadow: ${({ theme }) => theme.shadows.glass.md};
  
  z-index: ${({ theme }) => theme.zIndex.sticky};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  /* Responsive padding */
  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing[4]};
    height: 64px;
  }
  
  /* Hover effect */
  &:hover {
    background: ${({ theme }) => theme.glass.backgroundStrong};
    border-bottom-color: ${({ theme }) => theme.glass.borderStrong};
  }
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: 800;
  letter-spacing: -0.02em;
  text-decoration: none;
  
  /* Enhanced gradient text */
  background: ${({ theme }) => theme.gradients.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Smooth transitions */
  transition: all ${({ theme }) => theme.transitions.normal};
  
  /* Hover effect */
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
  
  /* Responsive sizing */
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: center;
  
  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing[6]};
  }
  
  @media (max-width: 640px) {
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${({ theme, $isActive }) => $isActive ? theme.primary : theme.text};
  text-decoration: none;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: -0.01em;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  /* Glass morphism background for active state */
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.glass.backgroundWeak : 'transparent'};
  border: 1px solid ${({ theme, $isActive }) => 
    $isActive ? theme.glass.border : 'transparent'};
  
  transition: all ${({ theme }) => theme.transitions.normal};

  /* Enhanced underline effect */
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $isActive }) => $isActive ? '80%' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: all ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.glass.backgroundWeak};
    border-color: ${({ theme }) => theme.glass.border};
    transform: translateY(-1px);
    
    &::after {
      width: 80%;
    }
  }
  
  /* Active state enhancements */
  ${({ $isActive, theme }) => $isActive && `
    color: ${theme.primary};
    box-shadow: ${theme.shadows.glass.sm};
  `}
  
  @media (max-width: 640px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: ${({ theme }) => `${theme.spacing[1.5]} ${theme.spacing[2]}`};
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