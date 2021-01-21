import React from "react";

// Styles
import "./App.scss";

// Images
import minesweeper_icon from "./images/minesweeper_icon.png";

// Components
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import Minesweeper from "./components/Minesweeper";

// TODO: Add ability to open new window from start menu
// TODO: Add window in taskbar where user can close
function App() {
  return (
    <div className="App-Wrapper">
      <Window
        title="Minesweeper"
        icon={minesweeper_icon}
        child={<Minesweeper />}
      />
      <Taskbar />
    </div>
  );
}

export default App;
