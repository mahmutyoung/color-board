import { useState } from "react";
import "./App.css";
const App = () => {
  return (
    <div>
      <Board />
    </div>
  );
};
export default App;

const arr = [];
for (let i = 0; i < 100; i++) {
  let x = { id: i, color: null };
  arr.push(x);
}

const Board = () => {
  const [squares, setSquares] = useState(arr);
  const changeColor = (id) => {
    const newSquares = squares.slice();
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    newSquares[id].color = `rgb(${red},${green},${blue})`;
    setSquares(newSquares);
  };
  console.log(squares);
  const squaresBoard = squares.map((square) => (
    <Square
      key={square.id}
      color={square.color}
      mouseOver={() => changeColor(square.id)}
    />
  ));

  return <div className='board'>{squaresBoard}</div>;
};

const Square = ({ mouseOver, color }) => {
  return (
    <button
      className='square'
      style={{ backgroundColor: color }}
      onClick={mouseOver}
      on
    />
  );
};
