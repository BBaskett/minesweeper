import React from "react";

// Styles
import "./Scoreboard.scss";

// Images
import smiley from "../../images/smiley.svg";
import smiley_game_over from "../../images/smiley_game_over.svg";

function Scoreboard(props) {
  const [timer, setTimer] = React.useState(0);
  const { parentState } = props;
  React.useEffect(() => {
    if (parentState === "initialize") {
      return setTimer(0);
    }
    if (parentState === "started") {
      const interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });
  return (
    <ul className="minesweeper-scoreboard">
      <li>
        <input type="text" value="010" size="3" readOnly />
      </li>
      <li>
        <img
          src={parentState === "lost" ? smiley_game_over : smiley}
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
