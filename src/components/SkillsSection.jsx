import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsContainer = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[8]};
  
  /* Enhanced glass morphism */
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.borderRadius['3xl']};
  box-shadow: ${({ theme }) => theme.shadows.glass.xl};
  
  margin: ${({ theme }) => theme.spacing[16]} auto;
  max-width: 1200px;
  position: relative;
  
  /* Gradient border effect */
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
    opacity: 0.2;
  }
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[4]};
    margin: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[4]};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-weight: 800;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  letter-spacing: -0.03em;
  
  /* Enhanced gradient text */
  background: ${({ theme }) => theme.gradients.hero};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[6]};
  }
`;

const SkillCategory = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing[8]};
  
  /* Enhanced glass morphism */
  background: ${({ theme }) => theme.glass.backgroundWeak};
  backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.glass.md};
  
  position: relative;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }) => theme.glass.background};
    border-color: ${({ theme }) => theme.glass.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.glass.lg};
    transform: translateY(-4px);
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    color: ${({ theme }) => theme.primary};
    letter-spacing: -0.02em;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  /* Subtle glass background */
  background: ${({ theme }) => theme.glass.backgroundWeak};
  border: 1px solid ${({ theme }) => theme.glass.border};
  
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.glass.background};
    border-color: ${({ theme }) => theme.primary};
    transform: translateX(4px);
  }

  &:before {
    content: '▹';
    color: ${({ theme }) => theme.accent};
    margin-right: ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 600;
  }
`;

const CertificationsSection = styled.div`
  margin-top: 4rem;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const CertificationCard = styled(motion.div)`
  padding: 1.5rem;
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.3)`};
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.accent};
  }

  p {
    color: ${({ theme }) => theme.secondary};
    font-size: 0.9rem;
  }
`;

const skills = {
  "Programming Languages": [
    "Java", "Kotlin", "Python", "JavaScript",
     "Dart", "Flutter", "C"
  ],
  "Web Development": [
    "HTML", "CSS",
    "Tailwind CSS", "Material UI",
    "Responsive Design"
  ],
  "Data Science & AI:": [
    "Machine Learning", "Deep Learning", "Python"
    
  ],
  "Database Query Languages": [
    "SQL", "NoSQL"
  ],
  "Operating Systems": [
    "Linux", "Windows"
  ],
  "Version Control": [
    "Git", "GitHub"
  ],
  
  "Development Tools": [
    "Android Studio", "IntelliJ IDEA", "VS Code",
    "Git & GitHub", "Firebase", "Docker", "Kaggle", "Project IDX", "Postman", "Figma", "Adobe Photoshop", "Capcut"
  ],
  "Other Skills": [
    "RESTful APIs", "Database Design",
    "UI/UX Design", "MS Office",
    "Problem Solving", "Team Collaboration"
  ]
};



const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <SkillsContainer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle>Skills & Expertise</SectionTitle>
      
      <SkillsGrid>
        {Object.entries(skills).map(([category, items], index) => (
          <SkillCategory
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{category}</h3>
            <SkillList>
              {items.map((skill, skillIndex) => (
                <SkillItem
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>

      
    </SkillsContainer>
  );
};

export default SkillsSection; 