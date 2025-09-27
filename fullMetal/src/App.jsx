import React from 'react'
import "./CharacterCards.css"
import './App.css'
import './CharacterRatings.css'
import "./header.css"
import CharacterCards from "./CharacterCards.jsx";
import { charData } from './charData.js'
import { CharacterRatings } from "./CharacterRatings.jsx";
import "./style.css"
function App() {
  return (
    <body>
      <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        <li>about us</li>
        <li>info</li>
        <li>support us</li>
      </nav>
    </header>
    <CharacterRatings characters={charData} />
      <CharacterCards characters={charData} />
    </body>

  );
}

export default App;