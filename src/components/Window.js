import React from "react";
import Draggable from "react-draggable";

// Styles
import "./Window.scss";

function Window(props) {
  const { title, icon, child } = props;
  return (
    <Draggable
      allowAnyClick={false}
      axis="both"
      defaultPosition={{ x: 0, y: 0 }}
      bounds="parent"
      cancel=".window-content, .window-button"
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
        <main className="window-content">{child}</main>
      </div>
    </Draggable>
  );
}

export default Window;
