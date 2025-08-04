import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Import project images
import muzicPlayerImg from '../assets/images/projects/muzic-player.png';
import ticTacToeImg from '../assets/images/projects/tic-tac-toe.png';
import linkzyChatImg from '../assets/images/projects/linkzy-chat.png';
import aiSummarizerImg from '../assets/images/projects/ai-summarizer.png';
import snakeGameImg from '../assets/images/projects/snake-game.png';
import stopwatchImg from '../assets/images/projects/stopwatch.png';
import loginSignupImg from '../assets/images/projects/login-page.png';
import sgameImg from '../assets/images/projects/snake.webp';
import aichatbotImg from '../assets/images/projects/ACB.png';
import love_3DImg from '../assets/images/projects/3D_love.png';

const SectionContainer = styled.section`
  padding: 6rem 1rem;
  background: ${({ theme }) => theme.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradients.liquidGlass};
    pointer-events: none;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem 0;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  -webkit-backdrop-filter: ${({ theme }) => theme.glass.backdrop};
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.glass.shadow};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradients.card};
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: ${({ theme }) => theme.glass.shadow}, 0 20px 40px rgba(31, 38, 135, 0.2);
    border-color: ${({ theme }) => theme.glass.borderStrong};
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px) scale(1.01);
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.glass.backgroundWeak};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.accent};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.glass.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.glass.background};
    border-color: ${({ theme }) => theme.accent};
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.glass.backgroundWeak};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.glass.border};
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradients.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    background: ${({ theme }) => theme.glass.background};
    border-color: ${({ theme }) => theme.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.primary};
`;

const CardInfo = styled.p`
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: rgba(65, 105, 225, 0.1);
  color: ${({ theme }) => theme.primary};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ViewButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accent};
  }
`;

const projects = [
  {
    title: "Linkzy Chat App",
    description: "A real-time chatting application with Firebase backend, featuring user authentication and live messaging capabilities.",
    image: linkzyChatImg,
    techStack: ["Flutter", "Firebase", "Android Studio"],
    sourceCode: "https://github.com/abhishek-maurya576/linkzy",
    liveDemo: "https://github.com/abhishek-maurya576/linkzy/releases",
  },
{
    title: "3D Love",
    description: "A rotating cube with a secret message, hover effects, and endless vibes – perfect for coders, lovers, and Gen Z chaos enthusiasts.",
    image: love_3DImg,
    techStack: ["Html", "CSS", "Javascript"],
    sourceCode: "https://github.com/abhishek-maurya576/3D_love",
    liveDemo: "https://abhishek-maurya576.github.io/3D_love/",
  },

  {
    title: "S Game",
    description: "A modern Snake game for Android, built with Jetpack Compose & Kotlin. Features a retro Nokia-style UI, enhanced graphics, and multiple game modes.",
    image: sgameImg,
    techStack: ["Kotlin", "Jetpack Compose", "MVVM pattern", "Custom Canvas drawing"],
    liveDemo: "https://github.com/abhishek-maurya576/Snake-Game/releases/tag/v1.0.0",
    sourceCode: "https://github.com/abhishek-maurya576/Snake-Game"
  },
  
  {
    title: "Snake Game",
    description: "A classic Snake game built with HTML5 Canvas and JavaScript, featuring smooth controls and score tracking.",
    image: snakeGameImg,
    techStack: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    liveDemo: "https://abhishek-maurya576.github.io/snake_game/",
    sourceCode: "https://github.com/abhishek-maurya576/snake_game"
  },
  {
    title: "Stopwatch App",
    description: "A precise stopwatch application with lap timing functionality and a clean, intuitive interface.",
    image: stopwatchImg,
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://github.com/abhishek-maurya576/Stop-Watch",
    sourceCode: "https://stop-watch-three-dun.vercel.app/"
  },
  {
    title: "Login/Signup Page",
    description: "A modern authentication interface with form validation and smooth transitions between login and signup modes.",
    image: loginSignupImg,
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://abhishek-maurya576.github.io/login-signup-page/",
    sourceCode: "https://github.com/abhishek-maurya576/login-signup-page"
  },
  {
    title: "Muzic Player",
    description: "A feature-rich music player application built with Kotlin for Android devices, featuring local playback, notification controls, and background playback support.",
    image: muzicPlayerImg,
    techStack: ["Kotlin", "Android Studio", "Material Design"],
    liveDemo: "https://github.com/abhishek-maurya576/Muzic-Player/releases/tag/v1.0.0",
    sourceCode: "https://github.com/abhishek-maurya576/Muzic-Player"
  },
  {
    title: "Tic Tac Toe AI",
    description: "An interactive Tic Tac Toe game for Android with AI opponent, created using Java and Android Studio.",
    image: ticTacToeImg,
    techStack: ["Java", "Android Studio", "AI"],
    liveDemo: "https://github.com/abhishek-maurya576/Tic-Tac-Toe-AI/releases/tag/v4.0.0",
    sourceCode: "https://github.com/abhishek-maurya576/Tic-Tac-Toe-AI"
  },
   {
    "title": "AI Chat Bot Agent",
    "description": "An advanced AI-powered assistant application for Android, integrating natural language processing, automated interactions, and accessibility features.",
    "image": aichatbotImg,
    "techStack": ["Kotlin", "Android Studio", "Google Gemini AI", "Room Database"],
    "liveDemo": "https://github.com/abhishek-maurya576/AiChatBot/releases",
    "sourceCode": "https://github.com/abhishek-maurya576/AiChatBot"
  },
  {
    title: "AI Text Summarizer",
    description: "A web application that uses AI to generate concise summaries of text content using the Hugging Face API.",
    image: aiSummarizerImg,
    techStack: ["Node.js", "Express", "Hugging Face API", "HTML/CSS/JS"],
    liveDemo: "https://ai-text-summarize-app.vercel.app/",
    sourceCode: "https://github.com/abhishek-maurya576/AI-Text-Summarize-app"
  }
];

const certifications = [
  {
    id: 1,
    title: "Problem Solving (Basic) with Python",
    issuer: "HackerRank",
    date: "Issued Feb 2025",
    credentialId: "f64a7475c9f1",
    verifyLink: "https://www.hackerrank.com/certificates/iframe/f64a7475c9f1",
    image: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/problem-solving-python.png",
    skills: ["Python", "Problem Solving", "Programming"]
  },
  {
    id: 2,
    title: "Introduction to AI",
    issuer: "Infosys Springboard",
    date: "Issued Aug 2024",
    credentialId: "Scan the QR",
    verifyLink: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/Introduction-to-AI.png",
    image: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/Introduction-to-AI.png",
    skills: ["Problem Solving & Logical Thinking", "Analytical Skills", "Technical Assessment"]
  },
  {
    id: 3,
    title: "API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Issued Oct 2024",
    credentialId: "c3d7f2a0-3b1a-4b1a-9b1a-3b1a4b1a9b1a",
    verifyLink: "https://media.licdn.com/dms/image/v2/D562DAQFBg5jmg9VQnQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729946220842?e=1737471600&v=beta&t=8QI318DNyeZtJ9DViW1tjZ7LxUTc8qFmmXzAjrnMx5o",
    image: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/postman.png",
    skills: ["API Testing", "API Documentation", "Postman"]
  },
  {
    id: 4,
    title: "Introduction to Robotic Process Automation",
    issuer: "Infosys Springboard",
    date: "Issued Feb 2025",
    credentialId: "Scan QR",
    verifyLink: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/Introduction-to-RPA.png",
    image: "https://raw.githubusercontent.com/abhishek-maurya576/portfolio/refs/heads/main/images/Introduction-to-RPA.png",
    skills: ["Workflow Automation:", "RPA Basics", "Scripting & Logic Building:"]
  }
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <SectionContainer>
      <ContentWrapper>
        <SectionTitle
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </SectionTitle>
        <Grid>
          {projects.map((project, index) => (
            <Card
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  {project.liveDemo && (
                    <ProjectLink href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </ProjectLink>
                  )}
                  {project.sourceCode && (
                    <ProjectLink href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                      Source Code
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </Card>
          ))}
        </Grid>

        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Certifications
        </SectionTitle>
        <Grid>
          {certifications.map((cert) => (
            <Card key={cert.id} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: cert.id * 0.1 }}>
              <CardContent>
                {cert.image && (
                  <ProjectImage>
                    <img src={cert.image} alt={cert.title} />
                  </ProjectImage>
                )}
                <CardTitle>{cert.title}</CardTitle>
                <CardInfo>
                  {cert.issuer} • {cert.date}
                </CardInfo>
                <TagsContainer>
                  {cert.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </TagsContainer>
                <CardInfo style={{ fontSize: '0.8rem', marginTop: '1rem' }}>
                  Credential ID: {cert.credentialId}
                </CardInfo>
                <ViewButton href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                  Verify Certificate
                </ViewButton>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ProjectsSection;
