import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';

const TypedContainer = styled(motion.span)`
  display: inline-block;
`;

const Cursor = styled(motion.span)`
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: ${({ theme }) => theme.primary};
  margin-left: 2px;
`;

const TypedText = ({ text, delay = 0 }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0 }
      });

      for (let i = 0; i <= text.length; i++) {
        await controls.start({
          width: `${i}ch`,
          transition: { duration: 0.1 }
        });
      }
    };

    animate();
  }, [text, controls]);

  return (
    <>
      <TypedContainer
        initial={{ opacity: 0, width: 0 }}
        animate={controls}
        style={{ overflow: 'hidden' }}
      >
        {text}
      </TypedContainer>
      <Cursor
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </>
  );
};

export default TypedText; 