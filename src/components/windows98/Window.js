import React from "react";
import Draggable from "react-draggable";

// Styles
import "./Window.scss";

// Componenets
import Minesweeper from "../minesweeper/Minesweeper";

// TODO: Create exit and minimize functional

function Window(props) {
  const { title, icon } = props;

  return (
    <Draggable
      allowAnyClick={false}
      axis="both"
      defaultPosition={{ x: 0, y: 0 }}
      bounds="parent"
      cancel=".window-content, .window-button"
      id="window"
    >
      <div className="window">
        <header className="window-header">
          <section>
            <img src={icon} alt="icon" />
            <span>{title}</span>
          </section>
          <section>
            <button className="window-button">_</button>
            <button className="window-button">X</button>
          </section>
        </header>
        <main className="window-content">
          <Minesweeper />
        </main>
      </div>
    </Draggable>
  );
}

export default Window;
