import React from "react";

// Styles
import "./Tile.scss";

// Images
import flag from "../../images/flag.svg";

function Tile(props) {
  const { parentState, setParentState, type } = props;
  const [active, setActive] = React.useState(false);
  const [flagged, setFlagged] = React.useState(false);

  React.useEffect(() => {
    if (parentState === "initialize") {
      setActive(false);
      return setFlagged(false);
    }
  });

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
    return setParentState("started");
  }

  // Hide right-click menu
  function handleContextMenu(event) {
    event.preventDefault();
    return false;
  }

  return (
    <div
      className={`Minesweeper-Tile ${active ? "Pressed" : ""}`}
      onMouseDown={handleClick}
      onContextMenu={handleContextMenu}
    >
      {flagged ? <img src={flag} alt="flagged" /> : active ? type : ""}
    </div>
  );
}

export default Tile;
