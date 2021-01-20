// Styles
import "./App.scss";

// Components
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";

function App() {
  return (
    <div className="App-Wrapper">
      <Window />
      <Taskbar />
    </div>
  );
}

export default App;
