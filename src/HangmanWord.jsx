// src/HangmanWord.jsx
import React from "react";

export default function HangmanWord({ word, used, onGuess, disabled }) {
  const letters = word.split("");

  return (
    <div className="hangman-word">
      <div className="word">
        {letters.map((l, i) => (
          <span key={i} className="letter">
            {used.includes(l) ? l : "_"}
          </span>
        ))}
      </div>
      <div className="letters-grid">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZÀÂÇÈÉĒÔÛ'-".split("").map((l) => (
          <button className="my-glow-button"
            key={l}
            disabled={used.includes(l) || disabled}
            onClick={() => onGuess(l)}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}
