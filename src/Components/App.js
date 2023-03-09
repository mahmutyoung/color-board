import "./App.css";
import StateHandler from "./StateHandler";
const App = () => {
  return (
    <div className='app'>
      <h1>Color Generator</h1>
      <p>1. On mouse leave a square you get a randomly generated color</p>
      <p>2. Click a square to add the color to my palette</p>
      <StateHandler />
    </div>
  );
};
export default App;
