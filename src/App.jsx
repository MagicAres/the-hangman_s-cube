// import { useState } from "react";
import "./App.css";
import Hangman from "./Hangman";
import BabylonCube from "./BabylonCube";

export default function App() {
  return (
    <div className="app-container">
      <h1>🎮 The Hangman's Cube</h1>
      <div className="content">
        <BabylonCube />
        <Hangman />
      </div>
    </div>
  );
}
