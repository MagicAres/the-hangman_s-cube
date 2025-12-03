// src/TypewriterRules.jsx
import React, { useState, useEffect } from "react";

export default function TypewriterRules({ text, speed = 70 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay("");
    let idx = 0;

    const interval = setInterval(() => {
      if (idx < text.length) {
        const char = text[idx];  
        setDisplay((prev) => prev + char);
        idx++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div style={{ whiteSpace: "pre-wrap", color: "white" }}>
      {display}
      <span className="cursor">|</span>
    </div>
  );
}
