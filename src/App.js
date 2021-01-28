import React from "react";

// Styles
import "./App.scss";

// Images
import minesweeper_icon from "./images/minesweeper_icons/minesweeper_icon.png";
import recycle from "./images/application_icons/recycle_bin_empty-4.png";
import ie from "./images/application_icons/msie2-2.png";

// Components
import Window from "./components/windows98/Window";
import Taskbar from "./components/windows98/Taskbar";

function App() {
  const [windows, setWindows] = React.useState([]);
  const [startState, setStartState] = React.useState(false);
  const appWrapper = React.useRef(null);

  function closeWindow(position) {
    windows.splice(position, 1);
    const updatedArray = [...windows];
    return setWindows(updatedArray);
  }

  function openWindow(application) {
    switch (application) {
      case "minesweeper":
        setWindows(
          windows.concat({ title: "Minesweeper", icon: minesweeper_icon })
        );
        break;
      default:
        console.error("Not configured correctly");
    }
  }

  return (
    <div
      className="App-Wrapper"
      ref={appWrapper}
      onClick={(event) => {
        if (event.target === appWrapper.current && startState) {
          setStartState(false);
        }
      }}
    >
      <div className="Shortcut-Wrapper">
        <img src={recycle} alt="recycle_bin_icon" height="32" width="32" />
        <p>Recycle Bin</p>
      </div>
      <div className="Shortcut-Wrapper">
        <img src={ie} alt="ie_shortcut_icon" height="32" width="32" />
        <p>Internet Explorer</p>
      </div>
      {windows.length > 0
        ? windows.map((window, index) => (
            <Window
              title={window.title}
              icon={window.icon}
              key={index}
              arrayIndex={index}
              closeFunc={closeWindow}
              x={(index + 1) * 50}
              y={(index + 1) * 50}
            />
          ))
        : ""}
      <Taskbar
        openWindow={openWindow}
        start={{ startActive: startState, setStartActive: setStartState }}
      />
    </div>
  );
}

export default App;
