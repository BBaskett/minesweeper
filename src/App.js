import React from "react";

// Styles
import "./App.scss";

// Images
import minesweeper_icon from "./images/minesweeper_icon.png";

// Components
import Window from "./components/windows98/Window";
import Taskbar from "./components/windows98/Taskbar";

// TODO: Add ability to open new window from start menu
// TODO: Add window in taskbar where user can close
function App() {
  return (
    <div className="App-Wrapper">
      <Window title="Minesweeper" icon={minesweeper_icon} />
      <Taskbar />
    </div>
  );
}

export default App;
