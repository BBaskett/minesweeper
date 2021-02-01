import React from "react";

// Styles
import "./Menu.scss";

function Menu(props) {
  const {
    state: { gameState, setGameState },
    exitGame,
  } = props;
  const [activeNav, setActiveNav] = React.useState(null);

  return (
    <>
      <ul className="minesweeper-nav">
        <li>
          <span
            className={activeNav === "Game" ? "active" : null}
            onClick={() =>
              activeNav === "Game" ? setActiveNav(null) : setActiveNav("Game")
            }
          >
            Game
            <ul
              className={`minesweeper-subnav ${
                activeNav === "Game" ? "active" : ""
              }`}
            >
              <li
                onClick={() => {
                  setActiveNav(null);
                  return setGameState("initialize");
                }}
              >
                <u>N</u>ew Game
              </li>
              <li
                onClick={() => {
                  exitGame()();
                }}
              >
                <u>E</u>xit
              </li>
            </ul>
          </span>
        </li>
      </ul>
    </>
  );
}

export default Menu;
