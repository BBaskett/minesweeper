import React from "react";
import Draggable from "react-draggable";

// Styles
import "./Window.scss";

// TODO: Put actions for each menu options
class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      help: false,
    };
  }
  render() {
    const { title, icon, child } = this.props;
    return (
      <Draggable
        allowAnyClick={false}
        axis="both"
        defaultPosition={{ x: 0, y: 0 }}
        bounds="parent"
        cancel=".Window-Header-Controls-Right, .Content, .Window-Header-Subnav"
      >
        <div className="Window">
          <header>
            <section className="Window-Header-Left">
              <img src={icon} alt="icon" />
              <span>{title}</span>
            </section>
            <section className="Window-Header-Right">
              <button>_</button>
              <button>X</button>
            </section>
          </header>
          <main>{child}</main>
        </div>
      </Draggable>
    );
  }
}

export default Window;
