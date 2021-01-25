import React from "react";

// Styles
import "./Menu.scss";

// TODO: Add exit functionality to menu
// TODO: Add instructions functionality to menu

function Menu(props) {
  const {
    state: { gameState, setGameState },
  } = props;
  const [activeNav, setActiveNav] = React.useState(null);
  const navLinks = {
    Game: [
      {
        name: "New Game",
        func: () => {
          setActiveNav(null);
          return setGameState("initialize");
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
        func: () => {
          /* return close(); */
        },
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

  return (
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
  );
}

export default Menu;
