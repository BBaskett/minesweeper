import React from "react";

// Styles
import "./Minesweeper.scss";

function Minesweeper(props) {
  const { width, height } = props;
  const gridSize = width * height;
  const bombs = new Array(10).fill("x");
  const tiles = new Array(gridSize - 10).fill("o");
  const gameArray = tiles.concat(bombs);
  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  shuffle(gameArray);
  return (
    <div id="Minesweeper">
      <header className="Minesweeper-Header">
        <span>10</span>
        <button>Reset</button>
        <span>0</span>
      </header>
      <main className="Minesweeper-Field">
        {gameArray.map((tile) => (
          <button>{tile}</button>
        ))}
      </main>
    </div>
  );
}

export default Minesweeper;
