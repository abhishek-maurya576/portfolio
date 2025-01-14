import { motion, useScroll } from 'framer-motion';
import styled from 'styled-components';

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => theme.primary};
  transform-origin: 0%;
  z-index: 1001;
`;

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return <ProgressBar style={{ scaleX: scrollYProgress }} />;
};

export default ScrollProgress; 