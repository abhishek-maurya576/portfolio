import { useCallback } from 'react';
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from 'styled-components';
import Particles from "@tsparticles/react";

const ParticleBackground = () => {
  const theme = useTheme();

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: theme.primary
      },
      links: {
        enable: true,
        color: theme.secondary,
        opacity: 0.5,
        distance: 150
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        }
      },
      size: {
        value: 3
      },
      opacity: {
        value: 0.7
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    background: {
      color: "transparent"
    },
    fullScreen: {
      enable: false,
      zIndex: 0
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default ParticleBackground; 