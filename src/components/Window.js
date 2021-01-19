import React from "react";
import "./Window.css";
import icon from "../images/minesweeper_icon.png";

function Window() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuOptions = {
    game: ["New Game", "Statistics", "Options", "Change Appearance", "Exit"],
    help: ["Help Me"],
  };
  return (
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
          <a href="#" onClick={(event) => console.log(event)}>
            Game
          </a>
          <a href="#">Help</a>
          <ul className="Subnav-Menu hidden" id="game">
            {menuOptions.game.map((action) => (
              <li>{action}</li>
            ))}
          </ul>
          <ul className="Subnav-Menu hidden" id="help">
            {menuOptions.help.map((action) => (
              <li>{action}</li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="Content">
        <p>Section</p>
      </section>
    </main>
  );
}

export default Window;
