import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine"; // Импортируем тип для опций

export const SpaceBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    // Растягиваем на весь экран под контент
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 200, // Оптимальное количество для баланса
        density: {
          enable: true,
        },
      },
      color: {
        // Белый, голубой и глубокий синий для эффекта глубины
        value: ["#ffffff", "#7dd3fc", "#09a8f1"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.1, max: 0.6 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
      move: {
        enable: true,
        speed: 0.4, // Медленное "плавание" для современности
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble", // Эффект линзы при наведении
        },
      },
      modes: {
        bubble: {
          distance: 100,
          size: 3,
          duration: 0.3,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
    />
  );
};

export default SpaceBackground;
