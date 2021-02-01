import React from "react";
import "./Taskbar.scss";

// Images
import start from "../../images/windows_icons/windows-0.png";
import ie_taskbar from "../../images/application_icons/msie2-1.png";
import windows_update from "../../images/windows_icons/windows_update_large-1.png";
import run from "../../images/windows_icons/application_hourglass_small-3.png";
import favorites from "../../images/windows_icons/directory_favorites-4.png";
import documents from "../../images/windows_icons/directory_open_file_mydocs-1.png";
import settings from "../../images/windows_icons/settings_gear_cool-4.png";
import log_off from "../../images/windows_icons/key_win-3.png";
import shut_down from "../../images/windows_icons/shut_down_cool-4.png";
import find from "../../images/windows_icons/search_file_2-0.png";
import help from "../../images/windows_icons/help_book_small-3.png";
import minesweeper from "../../images/minesweeper_icons/minesweeper_icon.png";
import programs from "../../images/windows_icons/appwiz_file-0.png";

function Taskbar(props) {
  const {
    openWindow,
    start: { startActive, setStartActive },
  } = props;
  const [time, setTime] = React.useState();

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
            <div>
              <b>Windows</b>98
            </div>
          </div>
          <ul className="Win98-Start-Menu-Options">
            <li>
              <img
                src={windows_update}
                alt="windows_update_icon"
                height="32"
                width="32"
              />
              &nbsp; Windows Update
            </li>
            <hr />
            <li className="Win98-Start-Menu-Option-Extend">
              <span>
                <img
                  src={programs}
                  alt="windows_update_icon"
                  height="32"
                  width="32"
                />
                &nbsp;
                <u>P</u>rograms
              </span>
              <ul className="Win98-Start-Menu-Option-Extend-Subnav">
                <li
                  onClick={() => {
                    openWindow("minesweeper");
                    setStartActive(false);
                  }}
                >
                  <img
                    src={minesweeper}
                    alt="windows_update_icon"
                    height="32"
                    width="32"
                  />
                  &nbsp; Minesweeper
                </li>
              </ul>
            </li>
            <li>
              <img
                src={favorites}
                alt="windows_update_icon"
                height="32"
                width="32"
              />
              &nbsp; F<u>a</u>vorites
            </li>
            <li className="Win98-Start-Menu-Option-Extend">
              <span>
                <img
                  src={documents}
                  alt="windows_update_icon"
                  height="32"
                  width="32"
                />
                &nbsp;
                <u>D</u>ocuments
              </span>
            </li>
            <li className="Win98-Start-Menu-Option-Extend">
              <span>
                <img
                  src={settings}
                  alt="windows_update_icon"
                  height="32"
                  width="32"
                />
                &nbsp;
                <u>S</u>ettings
              </span>
            </li>
            <li className="Win98-Start-Menu-Option-Extend">
              <span>
                <img
                  src={find}
                  alt="windows_update_icon"
                  height="32"
                  width="32"
                />
                &nbsp;
                <u>F</u>ind
              </span>
            </li>
            <li>
              <img
                src={help}
                alt="windows_update_icon"
                height="32"
                width="32"
              />
              &nbsp;
              <u>H</u>elp
            </li>
            <li>
              <img src={run} alt="windows_update_icon" height="32" width="32" />
              <u>R</u>un...
            </li>
            <hr />
            <li>
              <img
                src={log_off}
                alt="windows_update_icon"
                height="32"
                width="32"
              />
              <u>L</u>og Off
            </li>
            <li>
              <img
                src={shut_down}
                alt="windows_update_icon"
                height="32"
                width="32"
              />
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
          <img src={start} alt="windows_98_flag" height="32" width="32" />
          <span>Start</span>
        </button>
        <section className="Taskbar-Shortcuts">
          <img
            src={ie_taskbar}
            alt="internet_explorer_icon_taskbar"
            height="32"
            width="32"
          />
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
