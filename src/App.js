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
function App() {
  const subnav = [
    {
      name: "Game",
      children: [
        "New Game",
        "Statistics",
        "Options",
        "Change Appearance",
        "Exit",
      ],
    },
    { name: "Help", children: ["Instructions"] },
  ];
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
