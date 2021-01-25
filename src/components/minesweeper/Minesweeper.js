import React from "react";

// Styles
import "./Minesweeper.scss";

// Components
import Menu from "./Menu";
import Scoreboard from "./Scoreboard";
import Grid from "./Grid";

function Minesweeper(props) {
  // Options: initialize, started, won, lost
  const [gameState, setGameState] = React.useState("initialize");
  const [flagCount, setFlagCount] = React.useState(10);

  React.useEffect(() => {
    switch (gameState) {
      case "initialize":
        setFlagCount(10);
        break;
      default:
        return;
    }
  }, [gameState]);

  return (
    <>
      <Menu state={{ gameState: gameState, setGameState: setGameState }} />
      <Scoreboard state={{ gameState: gameState }} flags={flagCount} />
      <Grid
        state={{ gameState: gameState, setGameState: setGameState }}
        flags={{ flagCount: flagCount, setFlagCount: setFlagCount }}
      />
    </>
  );
}

export default Minesweeper;
