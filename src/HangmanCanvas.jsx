// src/HangmanCanvas.jsx
import React from "react";

export default function HangmanCanvas({ errors }) {
  const parts = [
    <circle key="head" cx="150" cy="70" r="20" stroke="black" strokeWidth="4" fill="transparent" />,
    <line key="body" x1="150" y1="90" x2="150" y2="140" stroke="black" strokeWidth="4" />,
    <line key="armLeft" x1="150" y1="110" x2="130" y2="90" stroke="black" strokeWidth="4" />,
    <line key="armRight" x1="150" y1="110" x2="170" y2="90" stroke="black" strokeWidth="4" />,
    <line key="legLeft" x1="150" y1="140" x2="130" y2="170" stroke="black" strokeWidth="4" />,
    <line key="legRight" x1="150" y1="140" x2="170" y2="170" stroke="black" strokeWidth="4" />,
  ];

  const gallows = (
    <>
      <line x1="10" y1="190" x2="190" y2="190" stroke="black" strokeWidth="6" />
      <line x1="50" y1="190" x2="50" y2="20" stroke="black" strokeWidth="6" />
      <line x1="50" y1="20" x2="150" y2="20" stroke="black" strokeWidth="6" />
      <line x1="150" y1="20" x2="150" y2="50" stroke="black" strokeWidth="6" />
    </>
  );

  return (
    <svg width="200" height="220" style={{ background: "#b561f6c1" }}>
      {gallows}
      {parts.slice(0, errors).map((p) => p)}
    </svg>
  );
}
