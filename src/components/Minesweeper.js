import React from "react";

// Styles
import "./Minesweeper.scss";

// Images
import smiley from "../images/smiley.svg";
import smiley_game_over from "../images/smiley_game_over.svg";

// Components
import Tile from "./Tile";

function Minesweeper(props) {
  const height = 8;
  const width = 8;
  const gridSize = width * height;
  const bombs = new Array(10).fill("b");
  const tiles = new Array(gridSize - 10).fill("o");
  const gameArray = tiles.concat(bombs);
  const [gameOver, setGameOver] = React.useState(false);
  const [time, setTime] = React.useState(0);

  const [activeNav, setActiveNav] = React.useState(null);
  const [plays, setPlays] = React.useState(0);
  const [startGame, setStartGame] = React.useState(false);
  const [timer, setTimer] = React.useState(0);

  // Config Items
  const navLinks = {
    Game: [
      {
        name: "New Game",
        func: () => setPlays(plays + 1),
        active: true,
      },
      {
        name: "Statistics",
        func: null,
        active: false,
      },
      {
        name: "Options",
        func: null,
        active: false,
      },
      {
        name: "Change Appearance",
        func: null,
        active: false,
      },
      {
        name: "Exit",
        func: null,
        active: true,
      },
    ],
    Help: [
      {
        name: "Instructions",
        func: null,
        active: true,
      },
    ],
  };

  // TODO: Global event listener when menu item clicked to close menu if focus lost
  // TODO: Correct interval which is duplicated on every state change

  React.useEffect(() => {
    console.log(startGame);
    if (startGame) {
      console.log("started");
      setInterval(() => {
        return setTimer(timer + 1);
      }, 1000);
    }
  });

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
    <>
      <ul className="minesweeper-nav">
        {Object.keys(navLinks).map((link, index) => (
          <li key={`nav_${index}`}>
            <span
              className={activeNav === link ? "active" : null}
              onClick={() =>
                activeNav === link ? setActiveNav(null) : setActiveNav(link)
              }
            >
              {link}
            </span>
            <ul
              className={`minesweeper-subnav ${
                activeNav === link ? "active" : ""
              }`}
            >
              {navLinks[link].map(({ name, func, active }, index) =>
                active ? (
                  <li key={`subnav_${index}`} onClick={func}>
                    {name}
                  </li>
                ) : null
              )}
            </ul>
          </li>
        ))}
      </ul>
      <ul className="minesweeper-scoreboard">
        <li>
          <input type="text" value="010" size="3" readOnly />
        </li>
        <li>
          <img src={gameOver ? smiley_game_over : smiley} alt="reset" />
        </li>
        <li>
          <input type="text" value={timer} key={timer} size="3" readOnly />
        </li>
      </ul>
      <main className="minesweeper-main" key={plays}>
        {gameArray.map((tile, index) => (
          <Tile type={tile} key={index} start={setStartGame} />
        ))}
      </main>
    </>
  );
}

export default Minesweeper;
