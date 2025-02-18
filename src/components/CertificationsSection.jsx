import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.1)`};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 4rem auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 2rem auto;
    border-radius: 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0.5rem;
  }
`;

const CertificationCard = styled(motion.div)`
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.2)`};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CertificationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0.8rem 0;
  }
`;

const CertificationIssuer = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CertificationDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin: 0.8rem 0;
  }
`;

const SkillTag = styled.span`
  background: ${({ theme }) => `rgba(${theme.primaryRgba}, 0.2)`};
  color: ${({ theme }) => theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
`;

const ViewButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ theme }) => `linear-gradient(45deg, ${theme.primary}, ${theme.accent})`};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  svg {
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const certifications = [
  {
    title: "Microsoft AI Skills Challenge",
    issuer: "Microsoft",
    date: "Dec 2024",
    image: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/microsoft-ai-skills.png",
    skills: ["Artificial Intelligence", "Machine Learning", "Azure AI"],
    url: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/"
  },
  {
    title: "GirlScript Summer of Code (GSoC) Extended 2024",
    issuer: "GirlScript Foundation",
    date: "Oct 2024",
    image: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/postman.png",
    skills: ["Open Source", "Git", "GitHub", "JavaScript"],
    url: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/"
  },
  {
    title: "Java Certification Test",
    issuer: "Complete Coding by Prashant Sir",
    date: "Oct 2024",
    credentialId: "WNUBEWMB",
    image: "https://github.com/abhishek-maurya576/portfolio/blob/main/images/java-cert.png?raw=true",
    skills: ["Java", "OOP", "Data Structures"],
    url: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Canvas Credentials (Badgr)",
    date: "Oct 2024",
    image: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/postman-cert.png",
    skills: ["API Testing", "Postman", "API Documentation"],
    url: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/"
  },
  {
    title: "C Programming Certification Test",
    issuer: "Complete Coding by Prashant Sir",
    date: "Sep 2024",
    image: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/c-programming-cert.png",
    skills: ["C Programming", "Problem Solving", "Algorithms"],
    url: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/"
  }
];

const CertificationsSection = () => {
  return (
    <SectionContainer id="certifications">
      <SectionTitle>Certifications</SectionTitle>
      <CertificationsGrid>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CertificationImage src={cert.image} alt={cert.title} />
            <CertificationTitle>{cert.title}</CertificationTitle>
            <CertificationIssuer>{cert.issuer}</CertificationIssuer>
            <CertificationDate>{cert.date}</CertificationDate>
            {cert.credentialId && (
              <CertificationDate>Credential ID: {cert.credentialId}</CertificationDate>
            )}
            <SkillTags>
              {cert.skills.map((skill, i) => (
                <SkillTag key={i}>{skill}</SkillTag>
              ))}
            </SkillTags>
            <ViewButton
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate <FaExternalLinkAlt />
            </ViewButton>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </SectionContainer>
  );
};

export default CertificationsSection;
