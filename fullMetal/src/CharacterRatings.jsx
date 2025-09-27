// CharacterRatings.jsx
import React from "react";

export function CharacterRatings({ characters }) {
  const topFive = [...characters]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        
       
          {topFive.map((char, i) => (
            <tr key={char.name} className={i % 2 === 0 ? "dark" : "light"}>
              <td>
                {char.name}
                {char.nickName && ` "${char.nickName}"`}
              </td>
              <td>{char.skillset}</td>
              <td>{char.votes}</td>
            </tr>
          ))}
       
      </table>
    </section>
  );
}
