import React from "react";

// Styles
import "./Tile.scss";

// Images
import flag from "../images/flag.svg";

function Tile(props) {
  const { type, start } = props;
  const [active, setActive] = React.useState(false);
  const [flagged, setFlagged] = React.useState(false);
  function checkTile() {
    if (type === "b") {
    }
    return type;
  }
  function handleClick(event) {
    // Right Click
    if (event.button === 2) {
      if (flagged || active) {
        return setFlagged(false);
      } else {
        return setFlagged(true);
      }
    }
    setFlagged(false);
    setActive(true);
    start(true);
    return checkTile();
  }
  return (
    <div
      className={`Minesweeper-Tile ${active ? "Pressed" : ""}`}
      onMouseDown={handleClick}
      onContextMenu={(event) => {
        event.preventDefault();
        return false;
      }}
    >
      {flagged ? <img src={flag} alt="flagged" /> : active ? type : ""}
    </div>
  );
}

export default Tile;
