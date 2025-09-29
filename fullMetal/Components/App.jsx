import React from 'react'
import "../CSS/reset.css"
import "../CSS/style.css"
import { navTitles } from '../src/charData.js'
import { charData } from '../src/charData.js'
import { Header } from '../Components/Header.jsx';
import CharacterCards from "../Components/CharacterCards.jsx";
import { CharacterRatings } from "../Components/CharacterRatings.jsx";

function App() {
 console.log(charData)
  return (
    <div>
      <Header navButtons={navTitles}/>
      <CharacterRatings characters={charData} />
      <CharacterCards characters={charData} />
    </div>
  );
}


export default App;