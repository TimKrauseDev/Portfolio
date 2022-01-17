import React from "react";
import Particles from "react-tsparticles";

const TsParticles = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#1D1E20",
          },
        },
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 3,
              opacity: 1,
              size: 10,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 1,
              duration: 2,
            },
          },
        },
        particles: {
          color: {
            value: "#B5B6B6",
          },
          links: {
            color: "#7ACBAE",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 0.7,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 500,
            },
            value: 40,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default TsParticles;
