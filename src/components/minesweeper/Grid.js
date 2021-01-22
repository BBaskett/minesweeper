import React from "react";

// Styles
import "./Grid.scss";

// Images
import flag from "../../images/flag.svg";
import bomb from "../../images/minesweeper_icon.png";

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function gridGenerator(height, width, bombs) {
  const gridSize = height * width;
  const bombsArray = new Array(bombs).fill("bomb");
  const emptyArray = new Array(gridSize - bombs).fill("x");
  const gameArray = emptyArray.concat(bombsArray);
  return shuffle(gameArray);
}

function Tile(props) {
  const { parentState, setParentState, type } = props;
  const [active, setActive] = React.useState(false);
  const [flagged, setFlagged] = React.useState(false);

  function handleClick(event) {
    // Right Click
    if (event.button === 2) {
      if (active) {
        return false;
      }
      setFlagged(!flagged);
    }
    // Left Click
    if (event.button === 0) {
      setFlagged(false);
      setActive(true);
    }
    return setParentState("started");
  }

  // Hide right-click menu
  function handleContextMenu(event) {
    event.preventDefault();
    return false;
  }

  function endGame() {
    return setParentState("lost");
  }

  return (
    <div
      className={`minesweeper-tile ${active ? "pressed" : ""}`}
      onMouseDown={handleClick}
      onContextMenu={handleContextMenu}
    >
      {flagged ? (
        <img src={flag} alt="flagged" />
      ) : active ? (
        type === "bomb" ? (
          <img src={bomb} alt="bomb" onLoad={endGame} />
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
  const { parentState, setParentState } = props;
  const [gridState, setGridState] = React.useState(gridGenerator(8, 8, 10));

  return (
    <main className="minesweeper-main">
      {gridState.map((tile, index) => (
        <Tile
          type={tile}
          key={index}
          parentState={parentState}
          setParentState={setParentState}
        />
      ))}
    </main>
  );
}

export default Grid;
