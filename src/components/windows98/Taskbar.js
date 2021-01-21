import React from "react";
import "./Taskbar.scss";

// Images
import windows98flag from "../../images/windows98flag.png";
import ie from "../../images/ie.png";

function Taskbar() {
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
    <div className="Taskbar">
      <button className="Taskbar-Button">
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
  );
}

export default Taskbar;
