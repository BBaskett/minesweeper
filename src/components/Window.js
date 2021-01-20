import React from "react";
import Draggable from "react-draggable";

// Styles
import "./Window.scss";

// Images
import icon from "../images/minesweeper_icon.png";

// Componenents
import Minesweeper from "./Minesweeper";

function Window() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);
  let width = 8;
  let height = 8;
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
      cancel=".Window-Header-Controls-Right, .Content, .Window-Header-Subnav"
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
            <span onClick={() => setMenuOpen(!menuOpen)}>Game</span>
            <span onClick={() => setHelpOpen(!helpOpen)}>Help</span>
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
          <Minesweeper width={width} height={height} />
        </section>
      </main>
    </Draggable>
  );
}

export default Window;
