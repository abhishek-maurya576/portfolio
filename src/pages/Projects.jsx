import styled from 'styled-components';
import { motion } from 'framer-motion';
import muzicPlayerImg from '../assets/images/projects/muzic-player.png';
import ticTacToeImg from '../assets/images/projects/tic-tac-toe.png';
import linkzyChatImg from '../assets/images/projects/linkzy-chat.png';

const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.primary}20;
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
`;

const ProjectStatus = styled.div`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.875rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.surface};
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Linkzy Chat App",
      description: "A real-time chatting app built with Firebase backend, featuring user authentication and live messaging capabilities.",
      tech: ["Flutter", "Firebase", "Android Studio", ],
      image: linkzyChatImg
    },
    {
      id: 2,
      title: "Muzic App",
      description: "Feature-rich music player with local playback, notification controls, and background playback support.",
      tech: ["Java", "Android Studio"],
      image: muzicPlayerImg
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description: "An interactive Tic Tac Toe game for Android, created with AI assistance.",
      tech: ["Java", "Android Studio", "AI"],
      image: ticTacToeImg
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </Title>
      <ProjectGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -10 }}
          >
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;