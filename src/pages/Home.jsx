import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
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

const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  padding-top: 64px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
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

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled(motion.a)`
  padding: 0.8rem 2rem;
  background: ${props => props.$primary ? ({ theme }) => theme.primary : 'transparent'};
  color: ${props => props.$primary ? 'white' : ({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const TagLine = styled(motion.h2)`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: ${({ theme }) => theme.accent};
  margin: 1rem 0 2rem;
  font-weight: 500;
`;

const AboutSection = styled(motion.section)`
  padding: 6rem 2rem;
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.2)`};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 4rem auto;
  max-width: 1200px;
  text-align: left;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1.5rem;
  }
`;

const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const InterestCard = styled(motion.div)`
  padding: 1.5rem;
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.3)`};
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.secondary};
  }
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
          
          <ButtonContainer>
            <Button
              href="#projects"
              $primary
              as={motion.a}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}
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
              whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </Button>
          </ButtonContainer>

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
              programming languages and frameworks. I'm particularly interested in creating applications that 
              solve real-world problems and enhance user experiences.
            </p>
            <p>
              Currently pursuing my degree, I've had the opportunity to work on various projects that have 
              helped me develop a deep understanding of software development principles and best practices. 
              I'm always eager to learn new technologies and contribute to innovative solutions.
            </p>
            
            <InterestsGrid>
              <InterestCard
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3>App Development</h3>
                <p>Creating intuitive and efficient mobile applications using Kotlin and Java</p>
              </InterestCard>
              <InterestCard
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Content Creation</h3>
                <p>Writing technical blogs and creating educational content about programming</p>
              </InterestCard>
              <InterestCard
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Open Source</h3>
                <p>Contributing to open-source projects and collaborating with developers globally</p>
              </InterestCard>
            </InterestsGrid>
          </AboutSection>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CertificationsSection />
          </motion.div>

          <SkillsSection />
          <ProjectsSection />
          <Footer />
          <FloatingSocial />
          <FloatingEmail />
        </Content>
      </HomeContainer>
    </PageContainer>
  );
};

export default Home;