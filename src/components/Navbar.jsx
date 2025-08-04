import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const NavContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  
  @media (max-width: 768px) {
    top: 15px;
    left: 15px;
    right: 15px;
    transform: none;
    width: calc(100% - 30px);
  }
`;

const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 12px 24px;
  
  /* Pill-like design with glass morphism */
  background: ${({ theme }) => theme.glass?.backgroundStrong || 'rgba(255, 255, 255, 0.25)'};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) => theme.glass?.borderStrong || 'rgba(255, 255, 255, 0.2)'};
  border-radius: 50px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.glass?.background || 'rgba(255, 255, 255, 0.3)'};
    box-shadow: 0 16px 64px rgba(31, 38, 135, 0.2);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    gap: 15px;
    flex-wrap: wrap;
  }
  
  @media (max-width: 640px) {
    justify-content: space-between;
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    gap: 10px;
  }
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize?.lg || '18px'};
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
  
  background: ${({ theme }) => theme.gradients?.text || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize?.base || '16px'};
  }
  
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize?.sm || '14px'};
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  
  background: ${({ theme }) => theme.glass?.backgroundWeak || 'rgba(255, 255, 255, 0.15)'};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.glass?.border || 'rgba(255, 255, 255, 0.2)'};
  border-radius: 30px;
  padding: 6px;
  
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, $isActive }) => $isActive ? 'white' : (theme.text || 'rgba(255, 255, 255, 0.8)')};
  text-decoration: none;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSize?.sm || '14px'};
  padding: 8px 16px;
  border-radius: 25px;
  white-space: nowrap;
  
  background: ${({ theme, $isActive }) => 
    $isActive ? (theme.gradients?.primary || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') : 'transparent'};
  
  transition: all 0.3s ease;
  
  box-shadow: ${({ theme, $isActive }) => 
    $isActive ? '0 8px 32px rgba(99, 102, 241, 0.24)' : 'none'};

  &:hover {
    color: ${({ theme, $isActive }) => $isActive ? 'white' : (theme.primary || '#667eea')};
    background: ${({ theme, $isActive }) => 
      $isActive ? (theme.gradients?.primary || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') : 'rgba(255, 255, 255, 0.15)'};
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize?.xs || '12px'};
    padding: 6px 12px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: ${({ theme }) => theme.glass?.backgroundWeak || 'rgba(255, 255, 255, 0.15)'};
  border: 1px solid ${({ theme }) => theme.glass?.border || 'rgba(255, 255, 255, 0.2)'};
  color: ${({ theme }) => theme.text || 'white'};
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.glass?.background || 'rgba(255, 255, 255, 0.25)'};
    color: ${({ theme }) => theme.primary || '#667eea'};
  }
  
  @media (max-width: 640px) {
    display: block;
  }
`;

const MobileNavLinks = styled.div`
  display: none;
  
  @media (max-width: 640px) {
    display: ${({ $isOpen }) => $isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 4px;
    margin-top: 8px;
    padding: 12px;
    background: ${({ theme }) => theme.glass?.backgroundStrong || 'rgba(255, 255, 255, 0.25)'};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid ${({ theme }) => theme.glass?.border || 'rgba(255, 255, 255, 0.2)'};
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  }
`;

const MobileNavLink = styled(Link)`
  color: ${({ theme, $isActive }) => $isActive ? 'white' : (theme.text || 'rgba(255, 255, 255, 0.8)')};
  text-decoration: none;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSize?.sm || '14px'};
  padding: 10px 16px;
  border-radius: 15px;
  text-align: center;
  
  background: ${({ theme, $isActive }) => 
    $isActive ? (theme.gradients?.primary || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') : 'transparent'};
  
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme, $isActive }) => $isActive ? 'white' : (theme.primary || '#667eea')};
    background: ${({ theme, $isActive }) => 
      $isActive ? (theme.gradients?.primary || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') : 'rgba(255, 255, 255, 0.15)'};
  }
`;

const ProjectsButton = styled.button`
  color: ${({ theme, $isActive }) => $isActive ? 'white' : (theme.text || 'rgba(255, 255, 255, 0.8)')};
  background: ${({ theme, $isActive }) => 
    $isActive ? (theme.gradients?.primary || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') : 'transparent'};
  border: none;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSize?.sm || '14px'};
  padding: 8px 16px;
  border-radius: 25px;
  white-space: nowrap;
  cursor: pointer;
  
  transition: all 0.3s ease;
  
  box-shadow: ${({ theme, $isActive }) => 
    $isActive ? '0 8px 32px rgba(99, 102, 241, 0.24)' : 'none'};

  &:hover {
    color: ${({ theme, $isActive }) => $isActive ? 'white' : (theme.primary || '#667eea')};
    background: ${({ theme, $isActive }) => 
      $isActive ? (theme.gradients?.primary || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') : 'rgba(255, 255, 255, 0.15)'};
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize?.xs || '12px'};
    padding: 6px 12px;
  }
`;

const MobileProjectsButton = styled.button`
  color: ${({ theme, $isActive }) => $isActive ? 'white' : (theme.text || 'rgba(255, 255, 255, 0.8)')};
  background: ${({ theme, $isActive }) => 
    $isActive ? (theme.gradients?.primary || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') : 'transparent'};
  border: none;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSize?.sm || '14px'};
  padding: 10px 16px;
  border-radius: 15px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme, $isActive }) => $isActive ? 'white' : (theme.primary || '#667eea')};
    background: ${({ theme, $isActive }) => 
      $isActive ? (theme.gradients?.primary || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)') : 'rgba(255, 255, 255, 0.15)'};
  }
`;

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsInView, setIsProjectsInView] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if projects section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          const rect = projectsSection.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          // Consider section in view if it's visible in the viewport
          const isInView = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.3;
          setIsProjectsInView(isInView);
        }
      } else {
        setIsProjectsInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToProjects = () => {
    console.log('Scroll to projects clicked, current path:', location.pathname);
    
    const performScroll = () => {
      // Try multiple approaches to find the element
      let projectsSection = document.getElementById('projects');
      
      if (!projectsSection) {
        // Fallback: try to find by text content
        const headings = document.querySelectorAll('h1, h2, h3');
        for (let heading of headings) {
          if (heading.textContent.toLowerCase().includes('project')) {
            projectsSection = heading.closest('section') || heading.parentElement;
            console.log('Found projects section by text content:', projectsSection);
            break;
          }
        }
      }
      
      console.log('Projects section element:', projectsSection);
      
      if (projectsSection) {
        // Method 1: Try scrollIntoView with offset
        projectsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Method 2: Apply offset after scroll
        setTimeout(() => {
          const currentScroll = window.pageYOffset;
          const offset = 100;
          window.scrollTo({
            top: currentScroll - offset,
            behavior: 'smooth'
          });
          console.log('Applied offset, scrolled to:', currentScroll - offset);
        }, 500);
        
      } else {
        console.log('Projects section not found - available elements with IDs:');
        const elementsWithIds = document.querySelectorAll('[id]');
        elementsWithIds.forEach(el => console.log('- ID:', el.id, 'Element:', el.tagName));
        
        // Try to scroll to a reasonable position if element not found
        const estimatedPosition = window.innerHeight * 2; // Scroll down 2 viewport heights
        window.scrollTo({
          top: estimatedPosition,
          behavior: 'smooth'
        });
        console.log('Fallback scroll to estimated position:', estimatedPosition);
      }
    };

    if (location.pathname !== '/') {
      console.log('Not on home page, navigating first...');
      navigate('/');
      // Wait longer for navigation and DOM to be ready
      setTimeout(performScroll, 1500);
    } else {
      console.log('Already on home page, scrolling...');
      // Small delay to ensure DOM is ready
      setTimeout(performScroll, 200);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <NavContainer>
      <Nav>
        <Logo to="/">My Portfolio</Logo>
        
        {/* Desktop Navigation */}
        <NavLinksContainer>
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path} 
              $isActive={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
          <ProjectsButton 
            onClick={scrollToProjects}
            $isActive={location.pathname === '/' && isProjectsInView}
          >
            Projects
          </ProjectsButton>
        </NavLinksContainer>

        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>

        {/* Mobile Navigation */}
        <MobileNavLinks $isOpen={isMobileMenuOpen}>
          {navItems.map((item) => (
            <MobileNavLink 
              key={item.path}
              to={item.path} 
              $isActive={location.pathname === item.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </MobileNavLink>
          ))}
          <MobileProjectsButton 
            onClick={scrollToProjects}
            $isActive={location.pathname === '/' && isProjectsInView}
          >
            Projects
          </MobileProjectsButton>
        </MobileNavLinks>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;