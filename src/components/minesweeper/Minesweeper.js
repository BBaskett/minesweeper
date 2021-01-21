import React from "react";

// Styles
import "./Minesweeper.scss";

// Components
import Tile from "./Tile";
import Scoreboard from "./Scoreboard";

function Minesweeper(props) {
  const [activeNav, setActiveNav] = React.useState(null);
  // Options: initialize, started, won, lost
  const [gameState, setGameState] = React.useState("initialize");
  const [gridState, setGridState] = React.useState([]);

  // Config Items
  const grid = gridGenerator(8, 8, 10);
  const navLinks = {
    Game: [
      {
        name: "New Game",
        func: () => {
          setGameState("initialize");
          return setGridState(grid);
        },
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

  // Initialize game
  React.useEffect(() => {
    return setGridState(grid);
  }, []);

  React.useEffect(() => {
    if (gameState === "initialize") {
      return setActiveNav(null);
    }
  });

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

  function gridGenerator(height, width, bombs) {
    const gridSize = height * width;
    const bombsArray = new Array(bombs).fill("b");
    const emptyArray = new Array(gridSize - bombs).fill("x");
    const gameArray = emptyArray.concat(bombsArray);
    return shuffle(gameArray);
  }

  // TODO: Global event listener when menu item clicked to close menu if focus lost
  // TODO: Correct interval which is duplicated on every state change
  // TODO: Build function to calculate the amout of bombs around a tile then pass to Tile component
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
      <Scoreboard parentState={gameState} />
      <main className="minesweeper-main">
        {gridState.map((tile, index) => (
          <Tile
            type={tile}
            key={index}
            parentState={gameState}
            setParentState={setGameState}
          />
        ))}
      </main>
    </>
  );
}

export default Minesweeper;
