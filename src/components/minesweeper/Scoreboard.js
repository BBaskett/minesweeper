import React from "react";

// Styles
import "./Scoreboard.scss";

// Images
import smiley from "../../images/minesweeper_icons/smiley.svg";
import smiley_game_over from "../../images/minesweeper_icons/smiley_game_over.svg";

function Scoreboard(props) {
  const {
    state: { gameState },
    flags,
  } = props;
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    if (gameState === "initialize") {
      return setTimer(0);
    }
    if (gameState === "started") {
      const interval = setInterval(() => {
        setTimer((time) => time + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameState]);

  return (
    <ul className="minesweeper-scoreboard">
      <li>
        <input
          type="text"
          value={String(flags).padStart(3, "0")}
          size="3"
          readOnly
        />
      </li>
      <li>
        <img
          src={gameState === "lost" ? smiley_game_over : smiley}
          alt="smiley"
        />
      </li>
      <li>
        <input type="text" value={timer} size="3" readOnly />
      </li>
    </ul>
  );
}

export default Scoreboard;
