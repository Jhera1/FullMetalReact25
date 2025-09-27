import React, { Component } from "react";
import "./CharacterCards.css";

class CharacterCards extends Component {
  render() {
    const { characters } = this.props;

    return (
      <section id="character-cards">
        {characters.map((char) => (
          <div className="card" key={char.name}>
            <div className="card-titles">
              <h3>{char.name}</h3>
              {char.nickName && <h4>{char.nickName}</h4>}
            </div>
            <img src={char.imageUrl} alt={char.name} />
            <p>{char.background}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default CharacterCards;
