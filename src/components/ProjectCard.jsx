import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tech = styled.span`
  background: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ProjectCard = ({ project, index }) => {
  const { title, description, image, techStack, liveDemo, sourceCode } = project;

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <ImageContainer>
        <ProjectImage src={image} alt={title} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechStack>
          {techStack.map((tech) => (
            <Tech key={tech}>{tech}</Tech>
          ))}
        </TechStack>
        <Links>
          {sourceCode && (
            <Link href={sourceCode} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Source
            </Link>
          )}
          {liveDemo && (
            <Link href={liveDemo} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </Link>
          )}
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard; 