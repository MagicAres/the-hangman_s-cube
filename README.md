# 🎲 The Hangman's Cube (React + BabylonJS)

## 🔎 À propos  
Ce projet combine un jeu du pendu en React — mot à deviner, interface lettres, dessin du pendu — avec un cube 3D animé à l’aide de BabylonJS.  
L’objectif : un mélange entre un mini‑jeu et un visuel 3D, pour un rendu original — avec des polices personnalisées, des effets “néon / glow”, et un cube texturé se tournant automatiquement.

## 📦 Fonctionnalités  
- Jeu du pendu : tirage aléatoire d’un mot, proposition de lettres, affichage des erreurs, victoire / défaite.  
- Interface des lettres avec effet “glow” sur les boutons au survol.  
- Animations en SVG / Canvas pour le pendu + affichage du mot.  
- Cube 3D texturé tournant en continu (rotation sur deux axes), créé avec BabylonJS.  
- Texte “règles / instructions” animées avec effet “machine à écrire”.  
- Style sombre / “cyber‑néon” + polices personnalisées.

## 🚀 Prérequis  
- Node.js (version 16+ recommandée)  
- Yarn ou npm  
- Navigateur moderne (support du WebGL pour BabylonJS)  

## 🔧 Installation & lancement  

```bash
# cloner le dépôt
git clone https://github.com/MagicAres/the-hangman_s-cube.git
cd the-hangman_s-cube

# installer les dépendances
npm install   # ou yarn

# lancer le projet en mode développement
npm run dev   # ou yarn dev
