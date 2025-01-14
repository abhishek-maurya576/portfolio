import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsContainer = styled(motion.section)`
  padding: 6rem 2rem;
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.2)`};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 4rem auto;
  max-width: 1200px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  padding: 2rem;
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.3)`};
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};

  &:before {
    content: '▹';
    color: ${({ theme }) => theme.accent};
    margin-right: 1rem;
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
  "Languages & Frameworks": [
    "Java", "Kotlin", "JavaScript", "Node.js",
    "React", "Express", "HTML5", "CSS3"
  ],
  "Development Tools": [
    "Android Studio", "IntelliJ IDEA", "VS Code",
    "Git & GitHub", "Firebase", "Docker"
  ],
  "Other Skills": [
    "RESTful APIs", "Database Design",
    "UI/UX Design", "Agile Methodology",
    "Problem Solving", "Team Collaboration"
  ]
};

const certifications = [
  {
    title: "Postman API Fundamentals",
    issuer: "Postman",
    date: "2023"
  },
  {
    title: "C Programming Certification",
    issuer: "Coding Ninjas",
    date: "2023"
  }
];

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

      <CertificationsSection>
        <h3>Certifications</h3>
        <CertificationGrid>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h4>{cert.title}</h4>
              <p>{cert.issuer} • {cert.date}</p>
            </CertificationCard>
          ))}
        </CertificationGrid>
      </CertificationsSection>
    </SkillsContainer>
  );
};

export default SkillsSection; 