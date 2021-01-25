import React from "react";

// Styles
import "./Grid.scss";

// Images
import flag from "../../images/flag.svg";
import bomb from "../../images/minesweeper_icon.png";

// Helper Functions
import { gridGenerator } from "./helper_functions";

function Tile(props) {
  const {
    state: { gameState, setGameState },
    flags: { flagCount, setFlagCount },
    type,
  } = props;
  const [active, setActive] = React.useState(false);
  const [flagged, setFlagged] = React.useState(false);

  React.useEffect(() => {
    switch (gameState) {
      case "initialize":
        setActive(false);
        setFlagged(false);
        break;
      default:
        return;
    }
  }, [gameState]);

  function handleClick(event) {
    // Right Click
    if (event.button === 2) {
      if (active || (flagCount === 0 && flagged === false)) {
        return false;
      }
      if (flagged) {
        setFlagged(false);
        return setFlagCount((flags) => flags + 1);
      }
      setFlagged(true);
      setFlagCount((flags) => flags - 1);
    }
    // Left Click
    if (event.button === 0) {
      if (flagged) {
        setFlagCount((flags) => flags + 1);
      }
      setFlagged(false);
      setActive(true);
    }
    return setGameState("started");
  }

  // Hide right-click menu
  function handleContextMenu(event) {
    event.preventDefault();
    return false;
  }

  function endGame() {
    return setGameState("lost");
  }

  return (
    <div
      className={`minesweeper-tile ${active ? "pressed" : ""}`}
      onMouseDown={
        gameState === "won" ? null : gameState === "lost" ? null : handleClick
      }
      onContextMenu={handleContextMenu}
    >
      {gameState === "lost" ? (
        type === "*" ? (
          <img src={bomb} alt="bomb" onLoad={endGame} />
        ) : type === 0 ? (
          ""
        ) : (
          type
        )
      ) : flagged ? (
        <img src={flag} alt="flagged" />
      ) : active ? (
        type === "*" ? (
          <img src={bomb} alt="bomb" onLoad={endGame} />
        ) : type === 0 ? (
          ""
        ) : (
          type
        )
      ) : (
        ""
      )}
    </div>
  );
}

function Grid(props) {
  const {
    state: { gameState, setGameState },
    flags: { flagCount, setFlagCount },
  } = props;
  const grid = gridGenerator(8, 8, 10);
  const [gridState, setGridState] = React.useState(grid);

  React.useEffect(() => {
    switch (gameState) {
      case "initialize":
        setGridState((prevGrid) => (prevGrid = grid));
        break;
      default:
        return;
    }
  }, [gameState]);

  return (
    <main className="minesweeper-main">
      {gridState.map((tile, index) => (
        <Tile
          type={tile}
          key={index}
          state={{ gameState: gameState, setGameState: setGameState }}
          flags={{ flagCount: flagCount, setFlagCount: setFlagCount }}
        />
      ))}
    </main>
  );
}

export default Grid;
