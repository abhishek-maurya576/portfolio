import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from 'styled-components';

const AnimatedBackground = () => {
  const theme = useTheme();
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial
        color={theme.primary}
        wireframe
        transparent
        opacity={0.15}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </mesh>
  );
};

export default AnimatedBackground; 