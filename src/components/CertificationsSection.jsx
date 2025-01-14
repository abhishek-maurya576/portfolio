import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certifications = [
  {
    title: "Microsoft AI Skills Challenge",
    organization: "Microsoft",
    issueDate: "Dec 2024",
    logo: "https://media.licdn.com/dms/image/D4D22AQGhRgbEEZvBJw/feedshare-shrink_800/0/1704780357376?e=1707955200&v=beta&t=Uu9Ey2Qx2lGzXWQPVgHgwqSZjZgwWXvJsYoXtHEkgEU",
    credentialId: "",
    credentialUrl: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/",
    skills: ["Artificial Intelligence", "Machine Learning", "Azure AI"]
  },
  {
    title: "GirlScript Summer of Code (GSoC) Extended 2024",
    organization: "GirlScript Foundation",
    issueDate: "Oct 2024",
    logo: "https://media.licdn.com/dms/image/v2/D562DAQELDd5XDWt1uQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729265646223?e=1737442800&v=beta&t=s72l_LzU-2hL3uA9dCaBXNYAt0rpMBpaTqbK7gnSfdk",
    credentialId: "",
    credentialUrl: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/",
    skills: ["Open Source", "Git", "GitHub", "JavaScript"]
  },
  {
    title: "Java Certification Test",
    organization: "Complete Coding by Prashant Sir",
    issueDate: "Oct 2024",
    logo: "https://media.licdn.com/dms/image/v2/D562DAQGmhNGbIZaJPg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1728721178796?e=1737442800&v=beta&t=9yBONWkgDPgU9WGOBdNShfNNiU44q0FvD21oDZjwzec",
    credentialId: "WNUBEWMB",
    credentialUrl: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/",
    skills: ["Java", "OOP", "Data Structures"]
  },
  {
    title: "Postman API Fundamentals Student Expert",
    organization: "Canvas Credentials (Badgr)",
    issueDate: "Oct 2024",
    logo: "https://media.licdn.com/dms/image/v2/D562DAQFBg5jmg9VQnQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729946220842?e=1737442800&v=beta&t=W1NhxXjbxEncsIxFYKT-bzpUbvJ5bHz7QJ8QzwpxsME",
    credentialId: "671cdecdb5c04140e226256a",
    credentialUrl: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/",
    skills: ["API Testing", "Postman", "API Documentation"]
  },
  {
    title: "C Programming Certification Test",
    organization: "Complete Coding by Prashant Sir",
    issueDate: "Sep 2024",
    logo: "https://media.licdn.com/dms/image/v2/D562DAQHKOLOMm_gx_Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1726561783395?e=1737442800&v=beta&t=HFuh9K1_W6yEzZGiyouZYp6i4CqOl6Y3F5k2GHAsfO4",
    credentialId: "FR8WZB8",
    credentialUrl: "https://www.linkedin.com/in/abhishekmaurya9118/details/certifications/",
    skills: ["C Programming", "Problem Solving", "Algorithms"]
  }
];

const CertificationsContainer = styled.div`
  padding: 4rem 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  position: relative;

  &::before {
    content: 'Certifications';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
`;

const CertificationCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground || 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 2.5rem;
  align-items: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      ${({ theme }) => `rgba(${theme.primaryRgba}, 0.05)`},
      ${({ theme }) => `rgba(${theme.accentRgba}, 0.05)`}
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 1;
    }

    ${CertificationLogo} {
      transform: scale(1.05) rotate(3deg);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

const CertificationLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 15px;
  padding: 0.5rem;
  background: ${({ theme }) => theme.cardBackground || 'rgba(255, 255, 255, 0.05)'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }
`;

const CertificationInfo = styled.div`
  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.4;
    background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.9;
  }

  .organization {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.textSecondary};
    font-size: 1rem;
    line-height: 1.6;
  }

  .credential-id {
    font-family: 'Courier New', monospace;
    background: ${({ theme }) => `rgba(${theme.primaryRgba}, 0.1)`};
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1.2rem;

    span {
      background: ${({ theme }) => `rgba(${theme.primaryRgba}, 0.1)`};
      color: ${({ theme }) => theme.primary};
      padding: 0.4rem 1rem;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;

      &:hover {
        background: ${({ theme }) => theme.primary};
        color: white;
        transform: translateY(-2px);
      }
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

const CredentialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => `rgba(${theme.primaryRgba}, 0.3)`};
    background: transparent;
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};

    svg {
      transform: translateX(3px);
    }
  }
`;

const CertificationsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <CertificationsContainer 
      ref={ref}
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {certifications.map((cert, index) => (
        <CertificationCard
          key={cert.title}
          variants={cardVariants}
        >
          <CertificationLogo src={cert.logo} alt={cert.title} />
          <CertificationInfo>
            <h3>{cert.title}</h3>
            <p className="organization">{cert.organization}</p>
            <p>Issued: {cert.issueDate}</p>
            {cert.credentialId && (
              <p>Credential ID: <span className="credential-id">{cert.credentialId}</span></p>
            )}
            <div className="skills">
              {cert.skills.map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            {cert.credentialUrl && (
              <CredentialButton 
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                View Certificate
              </CredentialButton>
            )}
          </CertificationInfo>
        </CertificationCard>
      ))}
    </CertificationsContainer>
  );
};

export default CertificationsSection;
