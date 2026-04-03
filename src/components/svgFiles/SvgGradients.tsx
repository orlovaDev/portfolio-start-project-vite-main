import React from "react";

export const SvgGradients:React.FC = () => {
  return (
    <svg
      style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="nest_grad" x1="60" y1="120" x2="60" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB199" />
          <stop offset="1" stopColor="#FF0844" />
        </linearGradient>
      </defs>

    </svg>
  );
};
