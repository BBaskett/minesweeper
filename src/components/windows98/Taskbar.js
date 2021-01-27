import React from "react";
import "./Taskbar.scss";

// Images
import windows98flag from "../../images/windows98flag.png";
import ie from "../../images/ie.png";

// TODO: Create taskbar windows for when minimized
// TODO: Create functional start menu to launch game from
// TODO: Create desktop shortcut(s)

function Taskbar(props) {
  const { openWindow } = props;
  const [time, setTime] = React.useState();
  const [startActive, setStartActive] = React.useState(true);

  React.useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
  });

  return (
    <>
      {startActive ? (
        <aside className="Win98-Start-Menu">
          <div id="Win98-Start-Menu-Vertical-Logo">
            <span>
              <b>Windows</b>98
            </span>
          </div>
          <ul className="Win98-Start-Menu-Options">
            <li>Windows Update</li>
            <hr />
            <li className="Win98-Start-Menu-Option-Extend">
              <span>
                <u>P</u>rograms
              </span>
            </li>
            <li>
              F<u>a</u>vorites
            </li>
            <li className="Win98-Start-Menu-Option-Extend">
              <span>
                <u>D</u>ocuments
              </span>
            </li>
            <li className="Win98-Start-Menu-Option-Extend">
              <span>
                <u>G</u>ames
              </span>
            </li>
            <li className="Win98-Start-Menu-Option-Extend">
              <span>
                <u>S</u>ettings
              </span>
            </li>
            <li className="Win98-Start-Menu-Option-Extend">
              <span>
                <u>F</u>ind
              </span>
            </li>
            <li>
              <u>H</u>elp
            </li>
            <hr />
            <li>
              <u>R</u>un...
            </li>
            <li onClick={() => openWindow("minesweeper")}>Minesweeper</li>
            <li>
              <u>L</u>og Off
            </li>
            <li>
              Sh<u>u</u>t Down
            </li>
          </ul>
        </aside>
      ) : (
        ""
      )}
      <div className="Taskbar">
        <button
          className="Taskbar-Button"
          onClick={() => setStartActive(!startActive)}
        >
          <img src={windows98flag} alt="windows_98_flag" />
          <span>Start</span>
        </button>
        <section className="Taskbar-Shortcuts">
          <img src={ie} alt="internet_explorer" />
        </section>
        <section className="Taskbar-Void"></section>
        <section className="Taskbar-System">
          <span>{time}</span>
        </section>
      </div>
    </>
  );
}

export default Taskbar;
