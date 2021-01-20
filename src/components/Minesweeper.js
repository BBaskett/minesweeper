import React from "react";

// Styles
import "./Minesweeper.scss";

// Images
import smiley from "../images/smiley.svg";
import smiley_game_over from "../images/smiley_game_over.svg";

// Components
import Tile from "./Tile";

function Minesweeper(props) {
  const { width, height } = props;
  const gridSize = width * height;
  const bombs = new Array(10).fill("b");
  const tiles = new Array(gridSize - 10).fill("o");
  const gameArray = tiles.concat(bombs);
  const [gameOver, setGameOver] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [time, setTime] = React.useState(0);

  // TODO: Correct interval which is duplicated on every state change
  React.useEffect(() => {
    if (start) {
      setInterval(() => {
        return setTime(time + 1);
      }, 1000);
    }
  }, [start]);

  // TODO: Build function to calculate the amout of bombs around a tile then pass to Tile component
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
        <span id="flag_count">10</span>
        <div className="Minesweeper-Reset-Button">
          <img src={gameOver ? smiley_game_over : smiley} alt="reset" />
        </div>
        <span id="timer">{time}</span>
      </header>
      <main className="Minesweeper-Field">
        {gameArray.map((tile, index) => (
          <Tile type={tile} key={index} start={setStart} />
        ))}
      </main>
    </div>
  );
}

export default Minesweeper;
