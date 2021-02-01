import React from "react";
import Draggable from "react-draggable";

// Styles
import "./Window.scss";

// Componenets
import Minesweeper from "../minesweeper/Minesweeper";

function Window(props) {
  const { title, icon, arrayIndex, closeFunc, x, y } = props;

  return (
    <Draggable
      allowAnyClick={false}
      axis="both"
      defaultPosition={{ x: x, y: y }}
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
            <button
              className="window-button"
              onClick={() => {
                return closeFunc(arrayIndex);
              }}
            >
              X
            </button>
          </section>
        </header>
        <main className="window-content">
          <Minesweeper closeGame={() => closeFunc(arrayIndex)} />
        </main>
      </div>
    </Draggable>
  );
}

export default Window;
