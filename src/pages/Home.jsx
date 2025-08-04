import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import AnimatedBackground from '../components/AnimatedBackground';
import FloatingSocial from '../components/FloatingSocial';
import FloatingEmail from '../components/FloatingEmail';
import ProfileSection from '../components/ProfileSection';
import TypedText from '../components/TypedText';
import ParticleBackground from '../components/ParticleBackground';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import CertificationsSection from '../components/CertificationsSection';
import ResumeButton from '../components/ResumeButton';
import { useInView } from 'react-intersection-observer';

const PageContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.background};
  background-image: ${({ theme }) => theme.gradients.mesh};
  background-attachment: fixed;
  background-size: 100% 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding-top: 72px;

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[8]};
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const HeroSection = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]};
  max-width: 900px;
  margin: 0 auto;
  
  /* Enhanced glass morphism */
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  box-shadow: ${({ theme }) => theme.shadows.glass.xl};
  
  /* Subtle gradient border */
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius['3xl']};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing[8]};
    margin: 0 ${({ theme }) => theme.spacing[4]};
    border-radius: ${({ theme }) => theme.borderRadius['2xl']};
    
    &::before {
      border-radius: ${({ theme }) => theme.borderRadius['2xl']};
    }
  }
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSize['6xl']};
  font-weight: 900;
  text-align: center;
  margin: ${({ theme }) => theme.spacing[6]} 0;
  letter-spacing: -0.04em;
  line-height: 1.1;
  
  /* Enhanced gradient text */
  background: ${({ theme }) => theme.gradients.hero};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Text shadow for depth */
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    margin: ${({ theme }) => theme.spacing[4]} 0;
  }
  
  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin: ${({ theme }) => theme.spacing[4]} 0;
  letter-spacing: -0.02em;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: ${({ theme }) => theme.spacing[3]} 0;
  }
`;

const TagLine = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  margin: ${({ theme }) => theme.spacing[6]} 0;
  line-height: 1.7;
  max-width: 600px;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.base};
    margin: ${({ theme }) => theme.spacing[4]} 0;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing[8]} 0;

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing[4]};
    margin: ${({ theme }) => theme.spacing[6]} 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing[8]} 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};
    margin: ${({ theme }) => theme.spacing[6]} 0;
    align-items: center;
  }
`;

const AboutSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[8]};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[4]};
  }
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
  
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.base};
  letter-spacing: -0.01em;
  min-width: 160px;
  
  /* Enhanced glass morphism styling */
  background: ${({ $primary, theme }) => 
    $primary 
      ? theme.gradients.button
      : theme.glass.background
  };
  color: ${({ $primary, theme }) => $primary ? '#ffffff' : theme.text};
  border: 1px solid ${({ $primary, theme }) => 
    $primary ? 'transparent' : theme.glass.border};
  
  /* Glass effects for secondary button */
  ${({ $primary, theme }) => !$primary && `
    backdrop-filter: ${theme.glass.backdrop};
    -webkit-backdrop-filter: ${theme.glass.backdrop};
    box-shadow: ${theme.shadows.glass.sm};
  `}
  
  /* Primary button shadow */
  ${({ $primary, theme }) => $primary && `
    box-shadow: ${theme.shadows.colored.primary};
  `}
  
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px) scale(1.02);
    
    ${({ $primary, theme }) => $primary 
      ? `
        box-shadow: ${theme.shadows.colored.primary}, 0 8px 25px rgba(0, 0, 0, 0.15);
        filter: brightness(1.1);
      `
      : `
        background: ${theme.glass.backgroundStrong};
        border-color: ${theme.glass.borderStrong};
        box-shadow: ${theme.shadows.glass.md};
        color: ${theme.primary};
      `
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
    font-size: ${({ theme }) => theme.fontSize.sm};
    min-width: 140px;
  }
`;

const StyledCanvas = styled(Canvas)`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

const Home = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const scrollToProjects = (e) => {
    e.preventDefault();
    console.log('View My Work button clicked');
    
    const projectsSection = document.getElementById('projects');
    console.log('Projects section element:', projectsSection);
    
    if (projectsSection) {
      // Get the position relative to the document
      const rect = projectsSection.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      const navbarHeight = 120;
      const targetPosition = elementTop - navbarHeight;
      
      console.log('Element rect:', rect);
      console.log('Current scroll position:', scrollTop);
      console.log('Element top position:', elementTop);
      console.log('Target scroll position:', targetPosition);
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else {
      console.log('Projects section not found - available elements with IDs:');
      const elementsWithIds = document.querySelectorAll('[id]');
      elementsWithIds.forEach(el => console.log('- ID:', el.id));
    }
  };

  return (
    <PageContainer>
      <StyledCanvas>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Stars
          radius={300}
          depth={60}
          count={1000}
          factor={7}
          saturation={0}
          fade={true}
        />
        <AnimatedBackground />
      </StyledCanvas>

      <HomeContainer>
        <ParticleBackground />
        <Content>
          <ProfileSection />
          
          <HeroSection>
            <Title
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TypedText text="Abhishek Maurya" />
            </Title>
            
            <Subtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Aspiring Software Engineer | Tech Enthusiast | App Developer
            </Subtitle>
            
            <TagLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Building innovative and efficient digital solutions that make a difference
            </TagLine>

            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SocialLink 
                href="https://github.com/abhishek-maurya576" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink 
                href="https://www.linkedin.com/in/abhishekmaurya9118/" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink 
                href="https://www.youtube.com/@bforbca" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaYoutube />
              </SocialLink>
            </SocialLinks>

            <ButtonContainer>
              <Button
                onClick={scrollToProjects}
                $primary
                as={motion.button}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </Button>
              <ResumeButton />
            </ButtonContainer>
          </HeroSection>

          <AboutSection
            ref={aboutRef}
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2>About Me</h2>
            <p>
              I'm a passionate software developer with a strong foundation in both web and mobile development. 
              My journey in tech began with a curiosity about how things work, which led me to explore various 
              programming languages and frameworks.
            </p>
            <p>
              Currently pursuing my degree, I've had the opportunity to work on various projects that have 
              helped me develop a deep understanding of software development principles and best practices. 
              I'm always eager to learn new technologies and contribute to innovative solutions.
            </p>
          </AboutSection>

          <ProjectsSection />
          <CertificationsSection />
          <SkillsSection />
          <Footer />
          <FloatingSocial />
          <FloatingEmail />
        </Content>
      </HomeContainer>
    </PageContainer>
  );
};

export default Home;