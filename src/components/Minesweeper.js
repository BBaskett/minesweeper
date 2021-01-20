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
  const [start, setStart] = React.useState(false);
  const [time, setTime] = React.useState(0);

  const [navOpen, setNavOpen] = React.useState(null);

  const navLinks = {
    Game: [
      {
        name: "New Game",
        func: () => console.log("new game"),
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

  if (navOpen) {
    console.log(navLinks[navOpen]);
    console.log(Object.values(navLinks[navOpen]));
  }

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
    <>
      <nav>
        {Object.keys(navLinks).map((link) => (
          <span
            onClick={() =>
              navOpen === link ? setNavOpen(null) : setNavOpen(link)
            }
          >
            {link}
          </span>
        ))}
        {navOpen ? (
          <ul>
            {navLinks[navOpen].map(({ name, func, active }) =>
              active ? <li>{name}</li> : null
            )}
          </ul>
        ) : null}
      </nav>
      <section>
        <span>10</span>
        <div>
          <img src={gameOver ? smiley_game_over : smiley} alt="reset" />
        </div>
        <span>{time}</span>
      </section>
      <main>
        {gameArray.map((tile, index) => (
          <Tile type={tile} key={index} start={setStart} />
        ))}
      </main>
    </>
  );
}

export default Minesweeper;
