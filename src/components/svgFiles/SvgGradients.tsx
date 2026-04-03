import React from "react";

export const SvgGradients: React.FC = () => {
  return (
    <svg
      style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Градиент для NestJS */}
        <linearGradient id="paint0_linear_1_3284" x1="0" y1="1" x2="0" y2="0">
          <stop stopColor="#FFB199" />
          <stop offset="1" stopColor="#FF0844" />
        </linearGradient>

        {/* Паттерн для Git */}
        <pattern id="pattern0_114131_611" patternContentUnits="objectBoundingBox" width="1" height="1">
          <image
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX8AAAF/..."
            x="0" y="0" width="1" height="1"
            preserveAspectRatio="none"
          />
        </pattern>

        {/* Градиенты для Gmail, GitHub и LinkedIn */}
        <linearGradient id="paint0_linear_1_2985" x1="0" y1="18.8683" x2="37.7365" y2="18.8683" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4a82da"/>
          <stop offset="1" stopColor="#bad1f7"/>
        </linearGradient>

        <linearGradient id="paint0_linear_1_2999" x1="0" y1="18.4028" x2="37.7365" y2="18.4028" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4a82da"/>
          <stop offset="1" stopColor="#bad1f7"/>
        </linearGradient>

        <linearGradient id="paint0_linear_1_2992" x1="0" y1="18.8683" x2="37.7365" y2="18.8683" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4a82da"/>
          <stop offset="1" stopColor="#bad1f7"/>
        </linearGradient>
      </defs>
    </svg>
  );
};
