// src/Hangman.jsx
import React, { useState, useEffect } from "react";
import HangmanCanvas from "./HangmanCanvas";
import HangmanWord from "./HangmanWord";
import urlImg from './assets/imgs/win.jpg';

// const words = [
//   "CITROUILLE",
//   "LANTERNE",
//   "FANTÔME",
//   "MANOIR",
//   "SORCIÈRE",
//   "MAGIE",
//   "CHATEAU",
//   "SORTILÈGE",
//   "SPECTRE",
//   "BLANCHE-NEIGE",
//   "ARAIGNÉE",
//   "CIMETIÈRE",
//   "CLAIRIÈRE",
//   "MALEFIQUE",
//   "VILAIN",
//   "MONSTRE",
//   "COFFRE",
//   "PARCHEMIN",
//   "ESPRIT",
//   "ENCHANTEUR",
//   "OMBRE",
//   "TENEBRES",
//   "MALEDICTION",
//   "NUIT",
//   "CRÂNE",
//   "POTENCE",
//   "BRUME",
//   "RÉVERBĖRE",
//   "CREPUSCULE",
//   "SÉPULCRE",
//   "VAMPIRE",
//   "PHANTOM",
//   "CHAUVE-SOURIS",
//   "MARIONNETTE",
//   "ENVOÛTER",
//   "MYSTERE",
//   "RÉMINISCENCE",
//   "MIRAGE",
//   "RESONANCE",
// ];
const words = [
  "HALLOWEEN",
  "TERROR",
  "CHÂTEAU",
  "MALÉFIQUE",
  "CITROUILLE",
  "ENFANCE",
  "FANTÔME",
  "DISNEY"
];

export default function Hangman() {
  const [word, setWord] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );
  const [used, setUsed] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const errors = used.filter((l) => !word.includes(l)).length;
  const won = word.split("").every((l) => used.includes(l));
  const lost = errors >= 6;

  const handleLetter = (letter) => {
    if (used.includes(letter) || won || lost) return;
    setUsed([...used, letter]);
  };

  const handleRestart = () => {
    // Réinitialise le jeu
    setWord(words[Math.floor(Math.random() * words.length)]);
    setUsed([]);
    setShowModal(false);
  };

  useEffect(() => {
    if (won || lost) {
      const id = setTimeout(() => {
        setShowModal(true);
      }, 0);
      return () => clearTimeout(id);
    }
  }, [won, lost]);

  return (
    <>
      <div className="hangman-box">
        <h2>Jeu du Pendu</h2>
        <HangmanCanvas errors={errors} />
        <HangmanWord
          word={word}
          used={used}
          onGuess={handleLetter}
          disabled={won || lost}
        />
        {showModal && (
          <div className="modal-backdrop">
            <div className="modal-content">
              {won ? <h2>🎉 Gagné !</h2> : <h2>💀 Perdu !</h2>}
              {!won && (
                <>
                  <p>
                    Le mot était : <strong>{word}</strong>
                  </p>
                </>
              )}
              <button onClick={handleRestart}>OK</button>
              {won && (
                <div className="image-container">
                  <img
                    src={won ? urlImg : ''}
                    alt={won ? "Victoire" : ''}
                    style={{ maxWidth: "80%", margin: "10px 0" }}

                  /></div>)}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
