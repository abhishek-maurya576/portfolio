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
import { useInView } from 'react-intersection-observer';

const PageContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.background};
  overflow: hidden;
`;

const StyledCanvas = styled(Canvas)`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 0;
  background: ${({ theme }) => theme.background};
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding-top: 64px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.8)`};
  backdrop-filter: blur(10px);
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  text-align: center;
  margin: 1rem 0;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin: 0.5rem 0;
`;

const TagLine = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin: 1rem 0;
  line-height: 1.6;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: 2rem 0;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: 2rem 0;
`;

const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  background: ${({ $primary, theme }) => 
    $primary ? `linear-gradient(45deg, ${theme.primary}, ${theme.accent})` : 'transparent'};
  color: ${({ $primary, theme }) => $primary ? '#fff' : theme.text};
  border: ${({ $primary, theme }) => 
    $primary ? 'none' : `2px solid ${theme.primary}`};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const AboutSection = styled(motion.section)`
  padding: 4rem 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Home = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
                href="#projects"
                $primary
                as={motion.a}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </Button>
              <Button
                href="/contact"
                as={motion.a}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </Button>
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