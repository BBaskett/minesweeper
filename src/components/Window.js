import React from "react";
import Draggable from "react-draggable";

// Styles
import "./Window.css";

// Images
import icon from "../images/minesweeper_icon.png";

// Componenents
import Minesweeper from "./Minesweeper";

function Window() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const menuOptions = {
    game: ["New Game", "Statistics", "Options", "Change Appearance", "Exit"],
    help: ["Help Me"],
  };
  return (
    <Draggable
      allowAnyClick={false}
      axis="both"
      defaultPosition={{ x: 0, y: 0 }}
      bounds="parent"
    >
      <main className="Window">
        <header className="Window-Header">
          <section className="Window-Header-Controls">
            <section className="Window-Header-Controls-Left">
              <img className="Window-Header-Icon" src={icon} alt="icon" />
              <span className="Window-Header-Title">Minesweeper</span>
            </section>
            <section className="Window-Header-Controls-Right">
              <button title="minimize">_</button>
              <button title="fullscreen">
                <div className="box"></div>
              </button>
              <button title="close">x</button>
            </section>
          </section>
          <nav className="Window-Header-Subnav">
            <a href="#" onClick={() => setMenuOpen(!menuOpen)}>
              Game
            </a>
            <a href="#" onClick={() => setHelpOpen(!helpOpen)}>
              Help
            </a>
            <ul className={`Subnav-Menu ${menuOpen ? "" : "hidden"}`}>
              {menuOptions.game.map((action) => (
                <li>{action}</li>
              ))}
            </ul>
            <ul className={`Subnav-Menu ${helpOpen ? "" : "hidden"}`}>
              {menuOptions.help.map((action) => (
                <li>{action}</li>
              ))}
            </ul>
          </nav>
        </header>
        <section className="Content">
          <Minesweeper />
        </section>
      </main>
    </Draggable>
  );
}

export default Window;
