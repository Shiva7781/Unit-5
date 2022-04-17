import Timer from "./component/Timer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Timer</h1>
      <Timer initialTime={1} endTime={59} />
    </div>
  );
};

export default App;
