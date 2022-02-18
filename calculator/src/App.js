import "./App.css";
import Counters from "./components/component.js";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const ops_item = ["+", "-", "*", "/"];

  return (
    <div className="App">
      <p>Try the calculator </p>
      <Counters title={numbers} detail={ops_item} />
    </div>
  );
}

export default App;
