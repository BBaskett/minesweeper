import React from "react";

// Styles
import "./App.scss";

// Components
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";

function App() {
  const [gameOver, setGameOver] = React.useState(false);
  const [exit, setExit] = React.useState(false);
  return (
    <div className="App-Wrapper">
      {exit ? null : (
        <Window
          gameOver={gameOver}
          setGameOver={setGameOver}
          setExit={setExit}
        />
      )}
      // TODO: Add ability to open new window from start menu
      <Taskbar setExit={setExit} />
    </div>
  );
}

export default App;
