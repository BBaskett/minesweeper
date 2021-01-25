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
  const [windows, setWindows] = React.useState([
    { title: "Minesweeper", icon: minesweeper_icon },
  ]);

  function closeWindow(position) {
    let array = windows;
    return setWindows(array.splice(position, 1));
  }

  return (
    <div className="App-Wrapper">
      {windows.map((window, index) => (
        <Window
          title={window.title}
          icon={window.icon}
          key={index}
          arrayIndex={index}
          closeFunc={closeWindow}
        />
      ))}
      <Taskbar />
    </div>
  );
}

export default App;
