import styled from 'styled-components';
import { motion } from 'framer-motion';
import SkillsSection from '../components/SkillsSection';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCategory = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: "▹";
    color: ${({ theme }) => theme.primary};
    margin-right: 0.5rem;
  }
`;

const CertificationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const CertificationCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CertificationTitle = styled.h4`
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const CertificationIssuer = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.9rem;
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AboutContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Section variants={itemVariants}>
          <Title>About Me</Title>
          <Text>
            I'm a BCA student at CMP Degree College with a passion for software development
            and creating innovative applications. My journey in tech began with a curiosity
            about how apps work, which led me to pursue app development and programming.
          </Text>
          <Text>
            Currently, I'm focused on expanding my knowledge in modern web technologies
            and mobile app development, while also exploring the fascinating world of AI
            and machine learning.
          </Text>
        </Section>

        <Section variants={itemVariants}>
          <Title>Skills</Title>
          <SkillsGrid>
            <SkillCategory>
              <CategoryTitle>Programming Languages</CategoryTitle>
              <SkillsList>
                <SkillItem>C</SkillItem>
                <SkillItem>Java</SkillItem>
                <SkillItem>JavaScript</SkillItem>
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Frameworks & Libraries</CategoryTitle>
              <SkillsList>
                <SkillItem>React.js</SkillItem>
                <SkillItem>Firebase</SkillItem>
                <SkillItem>Android SDK</SkillItem>
              </SkillsList>
            </SkillCategory>

            <SkillCategory>
              <CategoryTitle>Tools & Platforms</CategoryTitle>
              <SkillsList>
                <SkillItem>Git & GitHub</SkillItem>
                <SkillItem>Postman</SkillItem>
                <SkillItem>Android Studio</SkillItem>
              </SkillsList>
            </SkillCategory>
          </SkillsGrid>
        </Section>

        <Section variants={itemVariants}>
          <Title>Certifications</Title>
          <CertificationsContainer>
            <CertificationCard whileHover={{ y: -5 }}>
              <CertificationTitle>Introduction to Artificial Intelligence</CertificationTitle>
              <CertificationIssuer>Infosys Springboard (2024)</CertificationIssuer>
            </CertificationCard>

            <CertificationCard whileHover={{ y: -5 }}>
              <CertificationTitle>Postman API Fundamentals Student Expert</CertificationTitle>
              <CertificationIssuer>Postman (2024)</CertificationIssuer>
            </CertificationCard>

            <CertificationCard whileHover={{ y: -5 }}>
              <CertificationTitle>C Programming Certification Test</CertificationTitle>
              <CertificationIssuer>KG Coding (2024)</CertificationIssuer>
            </CertificationCard>
          </CertificationsContainer>
        </Section>

        <SkillsSection />
      </motion.div>
    </AboutContainer>
  );
};

export default About; 