import React from "react";

// Styles
import "./Menu.scss";

// Components
import Window from "../../components/windows98/Window";

// TODO: Add exit functionality to menu
// TODO: Add instructions functionality to menu

function Menu(props) {
  const {
    state: { gameState, setGameState },
    exitGame,
  } = props;
  const [activeNav, setActiveNav] = React.useState(null);
  const [showInstructions, setShowInstructions] = React.useState(false);

  // TODO: Pass window state up to App.js to create a new window

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
              {/* <li onClick={() => {}}>
              <u>S</u>tatistics
            </li>
            <li onClick={() => {}}>
              <u>O</u>ptions
            </li>
            <li onClick={() => {}}>
              <u>C</u>hange Appearance
            </li> */}
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
        <li>
          <span
            className={activeNav === "Help" ? "active" : null}
            onClick={() =>
              activeNav === "Help" ? setActiveNav(null) : setActiveNav("Help")
            }
          >
            Help
            <ul
              className={`minesweeper-subnav ${
                activeNav === "Help" ? "active" : ""
              }`}
            >
              <li
                onClick={() => {
                  setActiveNav(null);
                }}
              >
                <u>I</u>nstructions
              </li>
            </ul>
          </span>
        </li>
      </ul>
      {showInstructions ? <Window title="Instructions" icon="" /> : null}
    </>
  );
}

export default Menu;
