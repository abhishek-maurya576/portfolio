import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled(motion.div)`
  /* Enhanced glass morphism */
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdropStrong};
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.glass.lg};
  
  overflow: hidden;
  position: relative;
  
  /* Gradient border effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius['2xl']};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
  }
  
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: ${({ theme }) => theme.glass.backgroundStrong};
    border-color: ${({ theme }) => theme.glass.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.glass.xl};
    
    &::before {
      opacity: 0.6;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
  
  /* Subtle gradient overlay */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 60%,
      rgba(0, 0, 0, 0.1) 100%
    );
    pointer-events: none;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all ${({ theme }) => theme.transitions.slow};
  filter: brightness(0.9) contrast(1.1);

  ${Card}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  position: relative;
  z-index: 1;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  letter-spacing: -0.02em;
  line-height: 1.3;
  
  /* Subtle gradient text on hover */
  transition: all ${({ theme }) => theme.transitions.normal};
  
  ${Card}:hover & {
    background: ${({ theme }) => theme.gradients.text};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: 1.7;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

const Tech = styled.span`
  /* Mini glass morphism pills */
  background: ${({ theme }) => theme.glass.backgroundWeak};
  backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  border: 1px solid ${({ theme }) => theme.glass.border};
  color: ${({ theme }) => theme.primary};
  padding: ${({ theme }) => `${theme.spacing[1.5]} ${theme.spacing[3]}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  letter-spacing: 0.02em;
  
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.glass.background};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.glass.sm};
  }
`;

const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  /* Glass morphism button style */
  background: ${({ theme }) => theme.glass.backgroundWeak};
  backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  border: 1px solid ${({ theme }) => theme.glass.border};
  
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.glass.background};
    border-color: ${({ theme }) => theme.glass.borderStrong};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glass.md};
  }
  
  svg {
    font-size: ${({ theme }) => theme.fontSize.sm};
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