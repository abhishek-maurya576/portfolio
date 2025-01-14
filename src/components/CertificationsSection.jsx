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
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
`;

const CertificationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const CertificationTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primary};
  margin: 1rem 0;
`;

const CertificationIssuer = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const CertificationDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const SkillTag = styled.span`
  background: ${({ theme }) => `rgba(${theme.primaryRgba}, 0.2)`};
  color: ${({ theme }) => theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
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

  svg {
    font-size: 0.9rem;
  }
`;

const certifications = [
  {
    title: "Microsoft AI Skills Challenge",
    issuer: "Microsoft",
    date: "Dec 2024",
    image: "https://media.licdn.com/dms/image/D4D22AQGhRgbEEZvBJw/feedshare-shrink_800/0/1704780357376?e=1707955200&v=beta&t=Uu9Ey2Qx2lGzXWQPVgHgwqSZjZgwWXvJsYoXtHEkgEU",
    skills: ["Artificial Intelligence", "Machine Learning", "Azure AI"],
    url: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/"
  },
  {
    title: "GirlScript Summer of Code (GSoC) Extended 2024",
    issuer: "GirlScript Foundation",
    date: "Oct 2024",
    image: "https://media.licdn.com/dms/image/v2/D562DAQELDd5XDWt1uQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729265646223?e=1737442800&v=beta&t=s72l_LzU-2hL3uA9dCaBXNYAt0rpMBpaTqbK7gnSfdk",
    skills: ["Open Source", "Git", "GitHub", "JavaScript"],
    url: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/"
  },
  {
    title: "Java Certification Test",
    issuer: "Complete Coding by Prashant Sir",
    date: "Oct 2024",
    credentialId: "WNUBEWMB",
    image: "https://media.licdn.com/dms/image/v2/D562DAQGmhNGbIZaJPg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1728721178796?e=1737442800&v=beta&t=9yBONWkgDPgU9WGOBdNShfNNiU44q0FvD21oDZjwzec",
    skills: ["Java", "OOP", "Data Structures"],
    url: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Canvas Credentials (Badgr)",
    date: "Oct 2024",
    image: "https://media.licdn.com/dms/image/v2/D562DAQFBg5jmg9VQnQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729946220842?e=1737442800&v=beta&t=W1NhxXjbxEncsIxFYKT-bzpUbvJ5bHz7QJ8QzwpxsME",
    skills: ["API Testing", "Postman", "API Documentation"],
    url: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/"
  },
  {
    title: "C Programming Certification Test",
    issuer: "Complete Coding by Prashant Sir",
    date: "Sep 2024",
    image: "https://media.licdn.com/dms/image/v2/D562DAQHKOLOMm_gx_Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726561783395?e=1737442800&v=beta&t=HFuh9K1_W6yEzZGiyouZYp6i4CqOl6Y3F5k2GHAsfO4",
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
