import { useState } from "react";
import ColorSquare from "./ColorSquare";
import Board from "./Board";
import MyPalette from "./MyPalette";
const StateHandler = () => {
  const [squares, setSquares] = useState(arr);
  const [color, setColor] = useState(null);
  const [myColors, setMyColors] = useState([]);

  const changeColor = (square) => {
    const tempSquares = squares.slice();
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    setColor(`rgb(${red},${green},${blue})`);
    tempSquares[squares.indexOf(square)] = { ...square, color: color };
    setSquares(tempSquares);
  };

  const squaresBoard = squares.map((square) => (
    <ColorSquare
      key={square.id}
      color={square.color}
      clickHandler={() => changeColor(square)}
      onClickHandler={() =>
        setMyColors((myColors) => [
          ...myColors,
          { id: Date.now(), color: square.color },
        ])
      }
    />
  ));
  return (
    <>
      <Board squaresBoard={squaresBoard} />
      <h1>My Palette</h1>
      <p>1. Double Click a color to remove from palette </p>
      <MyPalette
        myColors={myColors}
        handleDoubleClick={(item) =>
          setMyColors(myColors.filter((x) => x !== item))
        }
      />
    </>
  );
};
export default StateHandler;

const arr = [];
for (let i = 0; i < 90; i++) {
  let x = { id: i, color: null };
  arr.push(x);
}
